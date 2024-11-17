<script setup lang="ts">
import { useMessageStore } from "@/store/message";
import { onMounted, ref, inject } from "vue";
import { CreateUser } from "@/graphql/mutations";
import { DefaultApolloClient, useQuery } from "@vue/apollo-composable";
import { GetAllUsers } from "@/graphql/queries";
import { useAlertsStore } from "@/store/alerts";

interface dataUser {
    name: string;
    email: string;
    position: number;
    department: string;
    skill: string;
}

const alertStore = useAlertsStore();
const { refetch } = useQuery(GetAllUsers);
const user = ref<dataUser>(Object.assign({}));
const messageStore = useMessageStore();
const apollo = inject<any>(DefaultApolloClient);
const items = ref([
    { title: "Junior", value: 1 },
    { title: "Mid", value: 2 },
    { title: "Senior", value: 3 },
    { title: "Intern", value: 4 },
    { title: "Lead", value: 5 },
    { title: "Manager", value: 6 },
]);
const itemsSkills = ref([
    { title: "JavaScript", value: "JavaScript" },
    { title: "Python", value: "Python" },
    { title: "Java", value: "Java" },
    { title: "C#", value: "C#" },
    { title: "Ruby", value: "Ruby" },
    { title: "PHP", value: "PHP" },
    { title: "Go", value: "Go" },
    { title: "Swift", value: "Swift" },
    { title: "C++", value: "C++" },
    { title: "TypeScript", value: "TypeScript" },
    { title: "Kotlin", value: "Kotlin" },
    { title: "Rust", value: "Rust" },
    { title: "Dart", value: "Dart" },
    { title: "R", value: "R" },
    { title: "Scala", value: "Scala" },
    { title: "Figma", value: "Figma" }
]);
const itemsDepartament = ref([
{ title: "Web Developer", value: "Web Developer" },
    { title: "Mobile Developer", value: "Mobile Developer" },
    { title: "Full Stack Developer", value: "Full Stack Developer" },
    { title: "DevOps Engineer", value: "DevOps Engineer" },
    { title: "Database Administrator (DBA)", value: "Database Administrator (DBA)" },
    { title: "Cloud Engineer", value: "Cloud Engineer" },
    { title: "Game Developer", value: "Game Developer" },
    { title: "Cybersecurity Specialist", value: "Cybersecurity Specialist" },
    { title: "Data Scientist", value: "Data Scientist" },
    { title: "UX/UI Designer", value: "UX/UI Designer" },
    { title: "Systems Architect", value: "Systems Architect" },
    { title: "AI/ML Engineer", value: "AI/ML Engineer" },
    { title: "Software Engineer", value: "Software Engineer" },
    { title: "QA Engineer", value: "QA Engineer" }
])
const itemsInArrSkills = ref([]);

onMounted(() => {
    messageStore.setMessage("Create User Page");
});

function create() {
    returnValueSkills();
    if (validateData()) { 
        alertStore.setAlert("error", "All fields are required!");
        return;
    }
    apollo.mutate({
        mutation: CreateUser,
        variables: {
            data: {
                name: user.value.name,
                email: user.value.email,
                position: user.value.position,
                skill:  user.value.skill,
                department: user.value.department,
            }
        }
    }).then(() => {
        clearInput();
        alertStore.setAlert("success", "User created successfully!");
        refetch();
    }).catch((err : Error) => {
        console.log(user.value);
        alertStore.setAlert("error", err.message);
        console.log(err.message);
    });
}

function validateEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(user.value.email);
}

function validateSkills(): boolean {
    if(itemsInArrSkills.value.length > 0) {
        return true;
    }
    return false;
}

function validateData() {
    if(user.value.name && user.value.email && user.value.position && user.value.department && user.value.skill) {
        return false;
    }
    return true;
}

const rules = {
    required: (value: string) => !!value || "Required.",
    email: (value: string) => validateEmail() || "Invalid email.",
    skills: (value: string) => validateSkills() || "Required."
}

function clearInput() {
    user.value = Object.assign({});
    itemsInArrSkills.value = [];
}

function returnValueSkills() {
    user.value.skill = itemsInArrSkills.value.join(", ");
}

</script>

<template>
    
    <v-card width="400px" class="d-flex align-center flex-column">
        <h3 class="my-5">Enter User Data</h3>
        <form style="width: 300px;" @submit.prevent="create">
            
            <v-text-field
            v-model="user.name"
            :rules="[rules.required]"
            variant="outlined"
            density="compact"
            placeholder="Name">    
            </v-text-field>

            <v-text-field
            v-model="user.email"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            density="compact"
            placeholder="Email">
            </v-text-field>

            <v-select
            v-model="user.position"
            :items="items"
            :rules="[rules.required]"
            density="compact"
            item-title="title"
            item-value="value"
            label="Select"
            persistent-hint
            single-line>
            </v-select>

            <v-select
            v-model="itemsInArrSkills"
            :items="itemsSkills"
            :rules="[rules.skills]"
            label="Select Item"
            multiple
            density="compact"
            >
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 2" class="ma-1" :key="item.value">
                    <span>{{ item.title }}</span>
                </v-chip>
                <span
                    v-if="index === 2"
                    class="text-grey text-caption align-self-center"
                >
                    (+{{ itemsInArrSkills.length - 2 }} others)
                </span>
            </template>
            </v-select>

            <v-select
            v-model="user.department"
            :items="itemsDepartament"
            :rules="[rules.required]"
            density="compact"
            item-title="title"
            item-value="value"
            label="Select"
            persistent-hint
            single-line>
            </v-select>

            <div class="d-flex justify-center" style="width: 100%">
                <v-btn
                type="submit"
                color="#42b883"
                class="ma-5"
                >Create</v-btn>
                
                <v-btn @click="clearInput()"
                class="ma-5"
                >Clear</v-btn>
            </div>
        </form>
    </v-card>
</template>