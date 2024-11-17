<script setup>
import {reactive, ref, computed, onMounted, onUpdated, onUnmounted} from "vue";
import Repository from "@/components/Repository.vue";
import User from "@/components/User.vue";
import Form from "@/components/Form.vue";

const searchUsername = ref("");
const  state = reactive({
  login: "",
  name: "",
  bio: "",
  company: "",
  avatar_url: "",
  repos: []
});

async function fetchGithubUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const { login, name, bio, company, avatar_url } = await res.json();

  state.name = name;
  state.login = login;
  state.bio = bio;
  state.company = company;
  state.avatar_url = avatar_url;

  fetchUserRepositories(login);
}

async function fetchUserRepositories(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();

  state.repos = repos;
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0 
  ? `${state.name} possui ${state.repos.length} públicos`
  : `${state.name} não possui nenhum repositório`  
}); //Só é chamado novamente quando uma váriavel que esteja sendo usada, tenha seu valor alterado 


onMounted(() => {
  console.log("O componente foi montado")
});

onUpdated(() => {
  console.log("O componente foi atualizado")
});

onUnmounted(() => {
  console.log("o componente foi desmontado")
});
</script>


<template>
  <slot></slot>
  <p>nickname: <strong>{{ searchUsername }}</strong></p>

  <Form @fetch-user="fetchGithubUser" v-model.lazy="searchUsername"/>

  <User v-if="state.login !== '' " 
    :login="state.login" 
    :name="state.name" 
    :company="state.company" 
    :bio="state.bio" 
    :avatar_url="state.avatar_url"/>

  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
      <Repository v-for="repo of state.repos" 
        :full_name="repo.full_name" 
        :description="repo.description" 
        :html_url="repo.html_url"/>
  </section>

  <slot name="footer"></slot>
</template>
<style scoped>
</style>