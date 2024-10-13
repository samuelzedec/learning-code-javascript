<script setup>
defineProps(["id", "name", "email", "age"]);
</script>

<template>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>{{ age }}</td>
</template>

<style scoped>

</style>