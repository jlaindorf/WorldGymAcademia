<template>
    <div>
        <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter" ></span>
      </div>
      <v-row>
     <v-col cols="8">
        <h1>Alunos</h1>
     </v-col>
      <v-col cols="2"> 
      <v-btn type="submit" color="blue" @click="cadastrarNovo" prepend-icon="mdi-plus" variant="tonal">Novo</v-btn>
    </v-col>
    </v-row>
    </div>

    <v-form ref="form">
        <v-row align="center" justify="center">
    <v-col cols="6"> 
        <v-text-field label="Nome do Aluno" prepend-icon="mdi-account-search"
     v-model="aluno"  :rules="[value => !!value || 'É obrigatório colocar o Nome']"
></v-text-field>

    </v-col>
    <v-col cols="2"> 
        <v-btn type="submit" @click="searchStudent" color="blue" variant="tonal">Buscar</v-btn>

    </v-col>
  </v-row>

</v-form>

<v-table>
    <thead>
      <tr>
        <th class="text-left">Alunos Cadastrados</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="aluno in listaAlunos" :key="aluno.id">
        <td>{{ aluno.id}}</td>
      </tr>
    </tbody>
  </v-table>

 

  
</template>


<script>

import axios from 'axios';

export default {
  data() {
    return {
      aluno: '',
      listaAlunos: []
     
    };
  },
  mounted() {
    this.loadStudents()
  },

  
  methods: {
    cadastrarNovo(){

        this.$router.push('/cadastro-aluno')
    }
    
    ,
    loadStudents() {
 
        axios({
        url: 'http://localhost:3000/students',
        method: 'GET',
      })
        .then((response) => {
            this.listaAlunos = response.data
        })
         
        .catch(() => {
          alert('Não foi possível localizar Alunos')
        })
    },
   

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