<script lang="ts" setup>
</script>

<template >
    <v-card 
    class="card"
    >
        <v-container class="headerbar d-flex  flex-wrap justify-space-around align-center" >
            <RouterLink to="/" class="link-home">
                <v-btn>Home</v-btn>
            </RouterLink>
            <RouterLink to="/create-user">
                <v-btn color="#121212">Create User</v-btn>
            </RouterLink>
            <RouterLink to="/update-user">
                <v-btn color="#121212">Update User</v-btn>
            </RouterLink>
            <RouterLink to="/delete-user">
                <v-btn color="#121212">Delete User</v-btn>
            </RouterLink>
            <RouterLink to="/get-user"> 
                <v-btn color="#121212">Get User</v-btn>
            </RouterLink>
            <RouterLink to="/get-all-users">
                <v-btn color="#121212">Get All Users</v-btn>
            </RouterLink>
        </v-container>
        <v-container class="d-flex justify-center" style="width: 100%">
            <RouterView/>
        </v-container>
    </v-card>
</template>

<style scoped>
.card {
    width: 65%;
    height: 75%;
    background-color: #121212;
    border: 1px dashed #42b883;
    box-shadow: 0 0 10px #42b883;
}

.headerbar {
    height: 10%;
    width: 100%;
    background-color: #42b883;
    margin: 0;
}
.link-home {
    color: black !important;
}
</style>