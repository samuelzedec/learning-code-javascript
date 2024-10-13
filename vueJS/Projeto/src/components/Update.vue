<script setup>
import { reactive } from "vue";
const emit = defineEmits(['update-user']);

const user = reactive({
    id: "", 
    name: "", 
    email: "",
    age: ""
});

function updateUser(ev) {
    ev.preventDefault();
    emit("update-user", user.id, user.name, user.email, user.age);

    user.id = "";
    user.name = "";
    user.email = "";
    user.age = "";
}
</script>

<template>
    <h1>Update User:</h1>
    <form @submit="updateUser">
        <input type="text" v-model="user.id" placeholder="ID" required>
        <input type="text" v-model="user.name" placeholder="New Name" required>
        <input type="text" v-model="user.email" placeholder="New Email" required>
        <input type="text" v-model="user.age" placeholder="New Age" required>
        <button type="submit">Update</button>
    </form>
</template>

<style scoped>
</style>