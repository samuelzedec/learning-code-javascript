<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import { GetLevels } from "@/graphql/queries";
import { onMounted, onBeforeMount, ref } from "vue";
import { useMessageStore } from "@/store/message";

interface dataLevel {
    level: string;
    salary: string;
}

const messageStore = useMessageStore();
const { result, refetch } = useQuery(GetLevels);
const levels = ref<dataLevel[]>([]);
    const headers = ref([
    { title: "Level", value: "level" },
    { title: "Salary", value: "salary" },
]);
const loading = ref(true);


onBeforeMount(async () => {
    try {
        await refetch();
        if (result.value?.getLevel) {
            levels.value = result.value.getLevel.map((level: any) => ({
                level: level.level,
                salary: level.salary,
            }));
        }
    } finally {
        loading.value = false;
    }
});

onMounted(() => {
    messageStore.setMessage("Home Page");
});
</script>

<template>
    <v-container class="container">
        <v-row class="d-flex justify-center text-white font">
            <h1>Level information</h1>
        </v-row>
        <v-row class="font text-white text-justify px-5 mt-5">
            In our company, we have a diversity of positions that contribute to our collective success. Each position has a unique role, from leadership to the daily execution of tasks.
        </v-row>
        <v-row class="d-flex justify-center text-white">
            <v-col class="d-flex justify-center text-white" v-if="loading">
                <h1>Carregando...</h1>
            </v-col>
            <v-col class="d-flex justify-center text-white" v-else>
                <v-data-table
                :headers="headers"
                :items="levels"
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
    width: 80%;
    height: 80%;
    background-color: #121212;
    color: white;
}

</style>