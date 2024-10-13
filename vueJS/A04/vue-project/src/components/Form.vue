<script setup>
import { ref } from "vue";
import { useSearchHistoryStore } from "../stores/useSearchHistoryStore";

const emit = defineEmits(["fetch-user", "update-modelValue"]);
const searchInput = ref("");
const searchHistory = useSearchHistoryStore();

function handleSubmit(ev) {
  ev.preventDefault();
  // Adiciona o valor do input ao histórico de pesquisa
  searchHistory.pushToHistory(searchInput.value);
  // Emite o evento para buscar o usuário com o valor do input
  emit("fetch-user", searchInput.value);
}

function showSearchHistory() {
  // Mostra o histórico de pesquisa em um alerta
  alert(`Histórico de pesquisa: \n${searchHistory.users.join("\n")}`);
}
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchInput"
      @input="emit('update-modelValue', $event.target.value)"
    />
    <button type="submit">Carregar Usuário</button>
    <button type="button" @click="showSearchHistory()">Ver histórico</button>
  </form>
</template>

<style scoped>
input, button {
  max-width: 20rem;
  padding: .5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: .25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #f64348;
  border: unset;
  border-radius: .25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 1rem 0 1rem 1rem;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>
