<script setup>
import { reactive, onMounted } from 'vue';

const coins = reactive({
  data: []
});

async function Requisition() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

  const res = await fetch(url);
  const data = await res.json();

  coins.data = Object.keys(data.bpi).map(key => {
    return {
      code: data.bpi[key].code,
      symbol: data.bpi[key].symbol,
      rate: data.bpi[key].rate,
      description: data.bpi[key].description,
      rate_float: data.bpi[key].rate_float
    };
  });
}

</script>

<template>
  <button @click="Requisition">Clique aqui</button>
  <div>
    <table>
      <thead v-if="coins.data.length">
      <tr>
        <th>Codigo: </th>
        <th>Simbolo: </th>
        <th>Descrição: </th>
        <th>Taxa: </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="coin in coins.data" :key="coin.code">
        <td>{{coin.code}}</td>
        <td>{{coin.symbol}}</td>
        <td>{{coin.description}}</td>
        <td>{{coin.rate_float}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
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
