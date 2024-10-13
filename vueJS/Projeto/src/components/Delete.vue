<script setup>
import { ref } from "vue";
const emit = defineEmits(["delete-user"]);

const userId = ref("");

function deleteUser(ev) {
    ev.preventDefault();
    emit("delete-user", userId.value);
    userId.value = "";
}
</script>

<template>
    <h1> Deletar usuário: </h1>
    <form @submit="deleteUser">
        <input type="text" v-model="userId" placeholder="ID" required>
        <button type="submit">Deletar</button>
    </form>
</template>

<style scoped>
h1 {
    font-size: 1.5em;
}
</style>