<template>
    <v-form ref="form"  >
       <div class="logo">Fit Manage Tech
         <span class="mdi mdi-weight-lifter"></span>
        <h4 class="mdi mdi-account-multiple">Cadastro de Treino </h4>
        
         
       </div>
      <v-container >
        <v-row>
            <v-col
            cols="12"
            sm="12"
          >
          <v-select label="Qual Exercício" 
          :rules="[value => !!value || 'Dado obrigatório']" 
          v-model="selectedExercise"
           :items="exercises" 
           item-title="description"
           item-value="id"
           variant="outlined">
          
          </v-select>
          </v-col>
         
          <v-col
            cols="12"
            sm="4"
          >
          <v-text-field
              label="Repetições"
                v-model="reps"
              variant="outlined"
              :rules="[value => !!value || 'Dado obrigatório']" 
            ></v-text-field>
          </v-col>
 
          <v-col
            cols="12"
            sm="4"
          >
          <v-text-field
              label="Quilos"
              v-model="kilos"
              :rules="[value => !!value || 'Dado obrigatório']" 
              variant="outlined"
            ></v-text-field>
          </v-col>
 
          <v-col
            cols="12"
            sm="4"
          >
          <v-text-field
              label="Pausa em segundos"
              v-model="rest"
              :rules="[value => !!value || 'Dado obrigatório']" 
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
          <v-select  label="Dia da Semana" :items="['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']"
          v-model="weekDays"
           variant="outlined"
           :rules="[value => !!value || 'Dado obrigatório']" >
        
          </v-select>
          </v-col>
          <v-textarea
             autocomplete="Observações"
              label="Observações"
              v-model="observartion"
              :rules="[value => !!value || 'Dado obrigatório']" >
            ></v-textarea>
          <v-col
            cols="12"
            sm="12"
          >
        
          </v-col>
    
          
         
        </v-row>
      </v-container>
      <v-btn color="blue" variant="tonal" @click="registerWorkout">Cadastrar</v-btn>
  </v-form>

  </template>
 
 <script>
 import axios  from 'axios';
 export default {
   data() {
     return {
       exercises:[],
       selectedExercise:'',
       reps:'',
       kilos:'',
       rest:'',
       weekDays:'',
       observartion:'',
       studentId: this.$route.params.id 
       


   
      
     }
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
            this.exercises = response.data

        })
         
        .catch(() => {
          alert('Não foi possível Acessar a Lista de Exercícios')
        })
    },
    async registerWorkout(){
      const {valid} = await this.$refs.form.validate()

      if(!valid){
        alert("Preencha todos os dados!")
        return
      }

    }
  }
}
 </script>
 
 <style>
 .logo {
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #3498db;
    /* Cor azul */
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    width: 80%;
 
 }
 
 .mdi {
    width: 30%;
 }
 </style>