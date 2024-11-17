<script setup lang="ts">
import { useMessageStore } from "@/store/message";
import { useAlertsStore } from "@/store/alerts";

const alertStore = useAlertsStore();

import Home from "@/views/Home.vue";
const messageStore = useMessageStore();
</script>

<template>
    <v-alert type="success" 
    v-if="alertStore.activeAlertSuccess"
    class="alert d-flex justify-center align-center"
    > {{ alertStore.alertMessage }}
    </v-alert>

    <v-alert type="error" 
    v-if="alertStore.activeAlertError"
    class="alert d-flex justify-center align-center"
    > {{ alertStore.alertMessage }}
    </v-alert>

    <div class="container d-flex justify-center align-center flex-column ga-4">
        <h1 class="text-center text-white">{{ messageStore.message }}</h1>
        <Home/>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    background-color: #121212;
    margin: 0;
}
.alert {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  position: fixed; /* Fixa o alerta na tela */
  top: 10px; /* Distância do topo */
  right: 10px; /* Distância da direita */
  z-index: 9999; /* Garante que o alerta fique sobre outros elementos */
  font-size: 12px;
}
</style>

