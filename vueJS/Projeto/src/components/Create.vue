<script setup>
import { reactive } from "vue";
const emit = defineEmits(['create-user']);

const user = reactive({
  id: "",
  name: "",
  email: "",
  age: ""
});

function create(ev) {
  ev.preventDefault();
  emit('create-user', user.id, user.name, user.email, user.age);

  user.id = "";
  user.name = "";
  user.email = "";
  user.age = "";
}
</script>

<template>
  <h1>Criar usuário:</h1>
  <form @submit="create">
    <input type="text" v-model="user.id" placeholder="ID" required>
    <input type="text" v-model="user.name" placeholder="Nome" required>
    <input type="email" v-model="user.email" placeholder="Email" required>
    <input type="number" v-model="user.age" placeholder="Idade" required>
    <button type="submit">Cadastrar</button>
  </form>
</template>

<style scoped>
</style>
