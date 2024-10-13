<script setup>
import { useSearchHistoryStore } from "@/stores/useSearchHistoryStore";
import search from "../stores/searchHistory";
import { reactive } from "vue";

const validate = reactive({
    value: false
});

const searchHistory = useSearchHistoryStore();
function active() {
    validate.value = true;
}
</script>

<template>
    <h1>Welcome!</h1>
    <p>This is the homepage of the app</p>
    <button @click="active">Ver histórico</button>

    <section v-if="validate.value">
        <h2>Histórico de pesquisa</h2>
        <ul>
            <li v-for="s in searchHistory.users"> {{ s }}</li>
        </ul>
    </section>
</template>
