<template>
  <v-app theme="light">
    <titleText/>
    <mainTests/>
  </v-app>
</template>

<script setup>
import  titleText  from "./components/NavBar.vue";
import mainTests from "./components/MainTests.vue";
</script>

<style>
body {
  background-color: #F2F7FF;
}
</style>