<template>
    <div>
        <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter" ></span>
      </div>
      <h1>Gerenciamento de Exercícios</h1>
    </div>

    <v-form ref="form" @submit="getExercise">
        <v-row align="center" justify="center">
    <v-col cols="6"> 
        <v-text-field label="Exercício" prepend-icon="mdi-arm-flex"
         v-model="exercicio"  :rules="[value => !!value || 'É obrigatório colocar o exercício']" ></v-text-field>
    </v-col>
    <v-col cols="2"> 
      <v-btn type="submit" color="blue" variant="tonal">Cadastrar</v-btn>
    </v-col>
  </v-row>

</v-form>

<v-table>
    <thead>
      <tr>
        <th class="text-left">Exercícios cadastrados</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="exercicio in listaExercicios" :key="exercicio.id">
        <td>{{ exercicio.description }}</td>
      </tr>
    </tbody>
  </v-table>

 

  
</template>


<script>

import axios from 'axios';

export default {
  data() {
    return {
      exercicio: '',
      listaExercicios: []
     
    };
  },
  mounted() {
    this.loadExercises()
  },

  methods: {
    
    loadExercises() {

      axios({
        url: 'http://localhost:3000/exercises',
        method: 'GET',
      })
        .then((response) => {
            this.listaExercicios = response.data
          console.log(this.listaExercicios)})
         
        .catch(() => {
          alert('deu ruim')
        })
    },
   
    
   getExercise() {
      
        axios({
  url: 'http://localhost:3000/exercises',
  method: 'POST',
  data: {
    description: this.exercicio
  }
}).then((response) => {
  console.log(this.exercicio);
}).catch((error) => {
  console.error(error);
});}
 
  }}
</script>


<style>
  .logo {
            font-family: Arial, sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #3498db; /* Cor azul */
            text-transform: uppercase;
            letter-spacing: 4px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            width: 80%;
           
        }
        .mdi {
          width: 30%;}
</style>