<script setup>
import Profile from "./components/Profile.vue";
import { ref } from "vue"

const isOpen = ref(true)
</script>

<template>
  <input type="checkbox" v-model="isOpen"> {{isOpen}}
  <Profile v-if="isOpen">
    <br>GitHub User Data

    <template v-slot:footer>
      <p>GitHub User Data Footer</p>
    </template>
  </Profile>
</template>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

a {
  color: #f64348;
}
</style>