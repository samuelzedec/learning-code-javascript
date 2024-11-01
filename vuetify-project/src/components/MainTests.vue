<template>
    <v-container 
    class="elevation-4 custom-size rounded-lg"
    color="#000"
    >
        <v-row class="border-b-lg" >
            <v-col>
                <v-card-title class="text-wrap">
                    Dados gerais (exceto quando se trata de ARP)
                </v-card-title>
            </v-col>
        </v-row>

        <v-row style="max-width:400px">
            <v-col>
                <v-card-text style="padding: 10px 0px 3px 3px">
                    Descrição
                </v-card-text>
                
                <v-text-field
                density="compact"
                placeholder="Digite"
                type="input"
                variant="outlined"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-switch
                v-model="validate"
                >

                </v-switch>
            </v-col>

            <v-col>
                <p>Validação está: {{ validate ? 'Ativada' : 'Desativada' }}</p> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
const validate = ref(false);
</script>

<style>
.custom-size {
    max-width: 80%;
    height: 80%;
    padding: 20px;
}
</style>