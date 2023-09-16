<template>
  <v-form ref="form">
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
        <v-tabs v-model="dias" centered>
      
          <v-tab value="segunda">Segunda</v-tab>
          <v-tab value="terca">Terca</v-tab>
          <v-tab value="quarta">Quarta</v-tab>
          <v-tab value="quinta">Quinta</v-tab>
          <v-tab value="sexta">Sexta</v-tab>
          <v-tab value="sabado">sabado</v-tab>
          <v-tab value="domingo">domingo</v-tab>

        </v-tabs>
      </template>
    </v-toolbar>
    <v-window v-model="dias">
      <v-window-item value="segunda">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>

      <v-window-item value="terca">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>

      </v-window-item>

      <v-window-item value="quarta">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="quinta">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>

      <v-window-item value="sexta">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>

      <v-window-item value="sabado">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="domingo">
        <v-table>
          <thead>
          <tr class="text-left">
            <th>Exercício</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.repetitions }}</td>
              <td>{{ workout.break_time }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
  
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {

      studentId: this.$route.params.id,
      listaTreinos: [],

      dias: 'segunda'
    };
  },
  mounted() {
    this.loadWorkout();

  },
  watch: {

    dias() {
      this.dias = this.dias
      this.loadWorkout();
      console.log(this.dias)
    }


  },
  methods: {
    loadWorkout() {
      axios({
        url: `http://localhost:3000/workouts?student_id=${this.studentId}`,
        method: 'GET',
      })
        .then((response) => {
          this.listaTreinos = response.data.workouts
          this.listaTreinos = this.listaTreinos.filter(item => item.day == this.dias)


          console.log(this.listaTreinos)


        })
        .catch(() => {
          alert('Não foi possível acessar a lista de exercícios.')
        });
    },

  },
  // searchTrain() {

  //   const buscaDia = "segunda"
  //   this.listaTreinos = this.listaTreinos.filter(item => item.day.includes(buscaDia))
  //   console.log(this.listaTreinos)
  // }

}
</script>
