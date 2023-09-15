<template>
   <div>
     <h1>Visualizar Treinos</h1>
     
     <table>
       <thead>
      
         <tr>
           <th>Dia da Semana</th>
           <th>Exercício</th>
           <th>Repetições</th>
           <th>Pausa (s)</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="workout in listaTreinos" :key="workout.id">
           <td>{{ workout.day }}</td>
           <td>{{ workout.exercise_description}}</td>
           <td>{{ workout.repetitions }}</td>
           <td>{{ workout.break_time }}</td>
         </tr>
       </tbody>
     </table>
   </div>
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
 