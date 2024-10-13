<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/search" class="link">Search</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<style>

h1 {
  color:#f64348;
}
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
.link {
  padding: 15px 70px;
  margin: 10px 30px;
  border-radius: 5px;
  background-color:#f64348;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

nav {
  margin: 20px 20px 40px 20px;
  border-bottom: 2px solid white;
  height: 50px;
}
</style>