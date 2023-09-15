<template>
   <h1> visualiza treinos</h1>
</template>
   <v-table
     fixed-header
     height="300px"
   >
     <thead>
       <tr>
         <th class="text-left">
           Segunda
         </th>
       </tr>
     </thead>
     <tbody>
      <tr v-for="workout in listaTreinos" :key="workout.id"> 
        <td>{{ workout.exercise_id }}</td>
        <td>{{ workout.height }}</td>
        <td>{{ workout.repetitions }}</td>
        <td>{{ workout.break_time }}</td>
      </tr>
     </tbody>
   </v-table>
 </template>
 <script>
 import axios from 'axios'
   export default {
     data () {
       return {
         studentId:'this.$route.params.id' ,
        listaTreinos: [],
        workout:'',
        exercise_id: ''
        
       }
     }, mounted(){
      this.loadWorkout()
   
   },
     loadWorkout(){
      axios({
        url: `http://localhost:3000/workouts?student_id=${this.studentId}`,
        method: 'GET',
      })
        .then((response) => {
            this.listaTreinos = response.data
            this.exercise_id = response.data.exercise_id
            
        })
         
        .catch(() => {
          alert('Não foi possível Acessar a Lista de Exercícios')
        })
      },
    

     }
   