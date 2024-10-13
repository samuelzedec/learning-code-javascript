<script setup>
import { reactive, ref } from "vue";
import Create from "./Create.vue";
import Delete from "./Delete.vue";
import Update from "./Update.vue";
import Table from "./Table.vue";

const database = reactive({
  value: []
});

const button = reactive({
  create: false,
  update: false,
  delete: false
})


function ButtonDivCreate() {
  button.create = true;
} 

function ButtonDivUpdate() {
  button.update = true;
} 

function ButtonDivDelete() {
  button.delete = true;
} 

function CreateUser(id, name, email, age) {
  const user = {id, name, email, age};
  database.value.push(user);
  alert("User created successfully.");
  console.log(database.value);

  button.create = false;
}

function UpdateUser(id, name, email, age) {
  const user = database.value.find(x => x.id === id);
  if (!user) throw new Error("User not found.");

  user.name = name;
  user.email = email;
  user.age = age;
  alert("User updated successfully.");
  console.log(database.value);
  button.update = false;
}

function DeleteUser(id) {
  const indexUser = database.value.findIndex(x => x.id === id);
  if (indexUser === -1) return;

  database.value.splice(indexUser, 1);
  alert("User deleted successfully.");
  console.log(database.value);
  button.delete = false;
}
</script>

<template>
  <header>
    
    <button v-if="!button.create" @click="ButtonDivCreate()">Criar</button>
    <div id="Create" class="inputs" v-if="button.create">
      <Create @create-user="CreateUser" />
    </div>

    <button v-if="!button.delete" @click="ButtonDivDelete()">Deletar</button>
    <div id="Delete" class="inputs" v-if="button.delete">
      <Delete @delete-user="DeleteUser"/>
    </div>

    <button v-if="!button.update" @click="ButtonDivUpdate()">Atualizar</button>
    <div id="Update" class="inputs" v-if="button.update">
      <Update @update-user="UpdateUser"/>
    </div>

  </header>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in database.value">
          <Table :id="user.id" :name="user.name" :email="user.email" :age="user.age"/>
        </tr>
      </tbody>

    </table>
</template>

<style>
* {
  color: #000;
}
#Create {
  background-color: #acf58a;
}

#Delete {
  background-color: #f58a8a;
  justify-content: start;
}

#Update {
  background-color: #e9f58a;
}

main {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  height: 100vh;
  border-radius: 10px;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid black;
  text-align: center;
}

th {
  background-color: #f4f4f4;
}
</style>