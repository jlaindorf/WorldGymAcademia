<template>
  
      <v-row>
     <v-col cols="8">
        <h1>Alunos</h1>
     </v-col>
      <v-col cols="2"> 
      <v-btn type="submit" color="blue" @click="newStudent" prepend-icon="mdi-plus" variant="tonal">Novo</v-btn>
    </v-col>
    </v-row>
   

    <v-form ref="form">
        <v-row align="center" justify="center">
    <v-col cols="6"> 
        <v-text-field label="Nome do Aluno" prepend-icon="mdi-account-search"
     v-model="aluno"  :rules="[value => !!value || 'É obrigatório colocar o Nome']"></v-text-field>

    </v-col>
    <v-col cols="2"> 
        <v-btn type="submit" @click.prevent="searchStudent" color="blue" variant="tonal">Buscar</v-btn>

    </v-col>
  </v-row>

</v-form>

<v-table >
    <thead>
      <tr class="text-left">
        <th >Alunos Cadastrados</th>
        
      </tr>
      
    </thead>
    <tbody  >
      <tr v-for="aluno in listaAlunos" :key="aluno.name">
  <td>{{ aluno.name }}</td>
    
  <td> <v-btn size="Small" @click.prevent="setUpTtrainning(aluno.id)" color="blue" variant="tonal">Montar treino</v-btn></td>
  <td><v-btn  size="Small"  @click.prevent="seeTrainning(aluno.id)" color="blue" variant="tonal">Ver</v-btn></td>
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

  
  methods:{
    loadStudents() {
 
 axios({
 url: 'http://localhost:3000/students',
 method: 'GET',
})
 .then((response) => {
     this.listaAlunos = response.data.students
 })
  
 .catch(() => {
   alert('Não foi possível localizar Alunos')
 })
},
    newStudent(){

        this.$router.push('/cadastro-aluno')
    }
    
    ,
    setUpTtrainning(id){

this.$router.push(`/cadastro-treino/${id}/cadastrar`)
}

,
seeTrainning(id){

this.$router.push(`/visualizacao-treinos/${id}/Ver-treino`)
}

,
    
        searchStudent(){
          const buscaAluno = this.aluno
          this.listaAlunos = this.listaAlunos.filter(item => item.name.includes(buscaAluno))
        }
    
   

}}
</script>

