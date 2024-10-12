<script setup>
import { ref } from "vue";

const emit = defineEmits(["fetch-user", "update-modelValue"]);
const searchInput = ref("");

function handleSubmit(ev) {
    ev.preventDefault();
    emit("fetch-user", searchInput.value);
}

</script> 

<template> 
    <form @submit="handleSubmit">
        <!-- Emite o evento "update:modelValue" para o componente pai sempre que o valor do input é alterado.
        O "$event.target.value" passa o valor atual do campo de entrada como argumento, permitindo que
        o componente pai atualize seu estado com o novo valor. Esse padrão é usado para implementar
        a vinculação bidirecional de dados (two-way data binding) com "v-model" em componentes personalizados. -->
        <input 
            type="text" 
            v-model="searchInput"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <!-- O $emit é usado diretamente para emitir eventos sem precisar definir uma constante emit localmente -->
        <button type="submit">Carregar Usuário</button>
    </form>
</template>

<style scoped> 
input,button {
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
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>