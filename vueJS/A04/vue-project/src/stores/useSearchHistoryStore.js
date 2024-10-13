// Importa a função `defineStore` do Pinia, que é uma biblioteca de gerenciamento de estado para Vue.js.
// O Pinia funciona de forma semelhante ao Vuex, mas com uma abordagem mais simples e moderna.
import { defineStore } from "pinia";

// Define uma nova "store" chamada `useSearchHistoryStore` utilizando o `defineStore`.
// O primeiro argumento `'searchHistory'` é o nome da store, que será usado para referenciá-la em outras partes do aplicativo.
export const useSearchHistoryStore = defineStore('searchHistory', {
    // `state` é uma função que retorna o estado inicial da store.
    // Esse estado é reativo, o que significa que, quando alterado, a interface do usuário será automaticamente atualizada para refletir essas mudanças.
    state: () => {
        return {
            // Define uma propriedade `users` como uma lista vazia para armazenar o histórico de usuários pesquisados.
            users: []
        }
    },
    // `actions` é um objeto que contém métodos para alterar o estado.
    // Esses métodos são chamados de "ações" e são usados para modificar o estado de forma controlada.
    actions: {
        // Define uma ação chamada `pushToHistory` que recebe um argumento `userName`.
        // Essa ação adiciona o nome do usuário ao início da lista `users`.
        pushToHistory(userName) {
            // `this.users` faz referência à lista `users` no estado atual da store.
            // `unshift` adiciona o novo `userName` ao início do array.
            this.users.unshift(userName)
        }
    }
})
