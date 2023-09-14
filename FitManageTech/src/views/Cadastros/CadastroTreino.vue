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
              :rules="[value => !!value || 'No minímo uma repetição']" 
            ></v-text-field>
          </v-col>
 
          <v-col
            cols="12"
            sm="4"
          >
          <v-text-field
              label="Peso em Quilos"
              type="number"
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
              type="number"
              v-model="rest"
              :rules="[value => !!value || 'Dado obrigatório']" 
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
          <v-select  label="Dia da Semana" 
          :items="items"
          :item-title="text"
          :item-value="value"
          v-model="weekDays"
           variant="outlined"
           :rules="[value => !!value || 'Dado obrigatório']" >
        
          </v-select>
          </v-col>
          <v-textarea
           
              label="Observações"
              v-model="observation"
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

        items: [ 
      { title:'Segunda-Feira', value: this.segunda},
      { title: 'Terça-Feira', value: this.terca},
      { title: 'Quarta-Feira', value:this.quarta},
      { title: 'Quinta-Feira', value: this.quinta},
      { title: 'Sexta-Feira', value: this.sexta},
      { title: 'Sábado', value: this.sabado},
      { title: 'Domingo', value: this.domingo}
        
      ],
       exercises:[],
       selectedExercise:'',
       reps:'',
       kilos:'',
       rest:'',
       weekDays:'',
       observation:'',
       studentId: this.$route.params.id ,
       exerciseId:'',
       segunda:'',
       terca:'',
       quarta:'',
       quinta:'',
       sexta:'',
       sabado:'',
       domingo:'',



   
      
     }
   },
   mounted() {
    this.loadExercises()
    const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira','Sábado'];
    const dataAtual = new Date();
    this.weekDays = diasDaSemana[dataAtual.getDay()];
  
    
  },

  
    methods: {
    
    loadExercises() {

      axios({
        url: 'http://localhost:3000/exercises',
        method: 'GET',
      })
        .then((response) => {
            this.exercises = response.data
            console.log(this.exercises.description)
            
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
      else{
        this.exerciseId = this.selectedExercise
        axios({
            url: 'http://localhost:3000/workouts',
            method: 'POST',
            data:{
                student_id: this.studentId,
                exercise_id: this.exerciseId,
                repetitions: this.reps,
                weight : this.kilos,
                break_time: this.rest,
                observations : this.observation,
                day: this.weekDays

            }
            ,

        })
        .then((response) => {
            alert('Cadastrado com sucesso');
            console.log(response.data);
           
          })
          .catch(() => {
            alert('não foi possível criar o treino nesse momento');
          });

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