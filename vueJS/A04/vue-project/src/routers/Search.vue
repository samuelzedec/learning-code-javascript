<script setup>
import Profile from "../components/Profile.vue";
import { ref } from "vue"

const isOpen = ref(true)
</script>

<template setup>

    <input type="checkbox" v-model="isOpen"> {{isOpen}}

    <Profile v-if="isOpen">
        <h1>GitHub User Data</h1>

        <template v-slot:footer>
            <p>GitHub User Data Footer</p>
        </template>

    </Profile>

</template>