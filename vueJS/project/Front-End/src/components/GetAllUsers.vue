<script setup lang="ts">
import { GetAllUsers } from "@/graphql/queries";
import { useQuery } from "@vue/apollo-composable";
import { onMounted, onBeforeMount, ref } from "vue";
import { useMessageStore } from "@/store/message";

interface dataUser {
    id: string;
    name: string;
    department: string;
    skill: string;
    level: string;
    salary: string;
}

const messageStore = useMessageStore();
const { result, refetch } = useQuery(GetAllUsers);
const users = ref<dataUser[]>([]);
const loading = ref(true);
const headers = ref([
    { title: "ID", value: "id" },
    { title: "Name", value: "name" },
    { title: "Department", value: "department" },
    { title: "Level", value: "level" },
]);

onBeforeMount(async () => {
    try {
        await refetch();
        if (result.value?.users) {
            users.value = result.value.users.map((user: any) => ({
                id: user.id,
                name: user.name,
                department: user.department,
                level: user.position.level,
            }));
        }
    } finally {
        loading.value = false;
    }
});

onMounted(() => {
    messageStore.setMessage("Get All Users");
});

</script>

<template>
    <v-container class="container">
        <v-row class="d-flex justify-center text-white font">
            <h1>Data from all users</h1>
        </v-row>
        <v-row class="d-flex justify-center text-white">
            <v-col class="d-flex justify-center text-white" v-if="loading">
                <h1>Carregando...</h1>
            </v-col>
            <v-col class="d-flex justify-center text-white" v-else>
                <v-data-table
                :headers="headers"
                :items="users"
                class="data-table">
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    color: "white";
}

.font {
    font-family: "JetBrains Mono", monospace;
}

.data-table {
    width: 100%;
    height: 60%;
    background-color: #121212;
    color: white;
    font-size: 12px;
}
</style>