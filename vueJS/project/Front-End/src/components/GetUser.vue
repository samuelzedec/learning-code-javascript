<script setup lang="ts">
import { GetUser } from "@/graphql/queries";
import { inject, ref } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { onMounted } from "vue";
import { useMessageStore } from "@/store/message";
import { useAlertsStore } from "@/store/alerts";

interface dataUser {
    id: string;
    name: string;
    department: string;
    skill: string;
    position: {
        level: string;
        salary: string;
    }
}

const alertStore = useAlertsStore();
const IDProvided = ref("");
const messageStore = useMessageStore();
const apollo = inject<any>(DefaultApolloClient);
const user = ref<dataUser>(Object.assign({}));
const loading = ref(true);

onMounted(() => {
    messageStore.setMessage("Get User");
});

function userQuery() {
    const id = parseInt(IDProvided.value);
    apollo.query({
        query: GetUser,
        variables: {
            id: id
        }
    }).then(({ data } : any) => {
        user.value = data.user;
        console.log(user.value);
        IDProvided.value = "";
        loading.value = false;
    }).catch((error : Error) => {
        console.log(error);
        alertStore.setAlert("error", error.message);
        IDProvided.value = "";
    });
}

function GoToBack() {
    loading.value = true;
}
</script>

<template>
    <v-container class="d-flex justify-center align-center flex-column">
        <v-row  class="d-flex justify-center align-center" v-if="loading">
            <v-col cols="8">
                <h4 class="titlestyle">Enter the ID of the user who wants to see the information</h4>
                <form @submit.prevent="userQuery()" class="d-flex align-center flex-column">
                    <v-text-field
                    v-model="IDProvided"
                    variant="underlined"
                    density="compact"
                    width="90px"
                    placeholder="Enter the ID"
                    class="mt-5 inputstyle"
                    </v-text-field>

                    <v-btn 
                    color="#42b883"
                    type="submit"
                    > Search
                    </v-btn>
                </form>
            </v-col>
        </v-row> 
        <v-row class="d-flex justify-center flex-column" v-if="!loading">
            <v-col class="d-flex justify-center flex-column">
                <h4 class="titlestyle">User Data</h4>
                <v-text-field
                v-model="user.id"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="ID"
                class="inputstyle"
                </v-text-field>

                <v-text-field
                v-model="user.name"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="Name"
                class="inputstyle"
                </v-text-field>

                <v-text-field
                v-model="user.department"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="Department"
                class="inputstyle"
                </v-text-field>

                <v-text-field
                v-model="user.skill"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="Skill"
                class="inputstyle"
                </v-text-field>

                <v-text-field
                v-model="user.position.level"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="Level"
                class="inputstyle"
                </v-text-field>

                <v-text-field
                v-model="user.position.salary"
                variant="outlined"
                density="compact"
                disabled
                width="300px"
                label="Salary"
                class="inputstyle"
                </v-text-field>

                <v-btn 
                color="#42b883"
                @click="GoToBack()"
                > Back
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    margin: 0;
}

.borderstyle {
    border: 1px solid white;
}

.titlestyle {
    color: white;
    font-family: JetBrains Mono;
    color: #42b883;
    text-align: center;
}

.inputstyle {
    color: white;
    width: 100px;
    text-align: center !important;
}

</style>