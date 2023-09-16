<template>
 
    <v-form ref="form"  >
       <div class="logo">Fit Manage Tech
         <span class="mdi mdi-weight-lifter"></span>
        <h4 class="mdi mdi-account-multiple">Treino </h4>
        <div v-if="listaTreinos.length > 0">
          {{ listaTreinos[0].student_name }}
        </div>
        </div>
        </v-form>
    
  <v-card>
    <v-toolbar color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      

      <template v-slot:extension>
        <v-tabs
         
          centered
        >
          <v-tab
          v-for="workout in listaTreinos" :key="workout.id"
          >
            {{workout.day }}
                    </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
     <table>
       <thead>
      
         <tr>
        
           <th>Exercício</th>
           <th>Repetições</th>
           <th>Pausa (s)</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="workout in listaTreinos" :key="workout.id">
           
           <td>{{ workout.exercise_description}}</td>
           <td>{{ workout.repetitions }}</td>
           <td>{{ workout.break_time }}</td>
         </tr>
       </tbody>
       {{ listaTreinos }}
     </table>
 </v-card>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       studentId: this.$route.params.id,
       listaTreinos: [],
       seg: '',
       terca: '',
       qua: '',
       qui: '',
       sex: '',
       sab: '',
       dom: '',
     };
   },
   mounted() {
     this.loadWorkout();
   },
   methods: {
     loadWorkout() {
       axios({
         url: `http://localhost:3000/workouts?student_id=${this.studentId}`,
         method: 'GET',
       })
         .then((response) => {
           this.listaTreinos = response.data.workouts
       
           this.seg = response.data.segunda
           this.terca = response.data.terca
           this.qua = response.data.quarta
           this.qui = response.data.quinta
           this.sex = response.data.sexta
           this.sab = response.data.sabado
           this.dom = response.data.domingo
         })
         .catch(() => {
           alert('Não foi possível acessar a lista de exercícios.')
         });
     },
   },
 }
 </script>
 