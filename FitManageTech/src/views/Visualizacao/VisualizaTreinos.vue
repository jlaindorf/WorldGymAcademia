<template>
  <v-form ref="form">



    <v-card color="transparent" class="mx-auto" prepend-icon="mdi mdi-account" style="width: 1215px" v-model="dias"
      value="segunda">

      <div v-if="listaTreinos.length > 0">
        <h2> {{ listaTreinos[0].student_name }}</h2>
      </div>

      <v-card-text>
        <h1>Treino do dia</h1>
      </v-card-text>


      <ul>
        <li v-for="workout in listaTreinos" :key="workout.id">
          <v-checkbox v-model="workout.selected"
            :label="`${workout.exercise_description} - Peso: ${workout.weight} kg - Repetições: ${workout.repetitions} - Pausa: ${workout.break_time} Segundos`"
            @change="addExercise(workout)"></v-checkbox>
        </li>
      </ul>
    </v-card>




  </v-form>

  <v-card>
    <v-toolbar color="blue">


      <v-toolbar-title>Treinos da Semana</v-toolbar-title>





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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
              <th>Peso</th>
              <th>Repetições</th>
              <th>Pausa (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workout in listaTreinos" :key="workout.id">
              <td>{{ workout.exercise_description }}</td>
              <td>{{ workout.weight }}</td>
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
import axios from 'axios'

export default {
  data() {
    return {
      studentId: this.$route.params.id,
      listaTreinos: [],
      dias: ''
    };
  },
  mounted() {
    this.loadWorkout();
    const dataAtual = new Date()
    const diaSemana = dataAtual.getDay()
    const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    this.dias = diasSemana[diaSemana]

  },
  watch: {
    dias() {
      this.dias = this.dias
      this.loadWorkout()
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
    addExercise(workout) {
      axios({
        url: 'http://localhost:3000/workouts/check',
        method: 'POST',
        data: {
          workout_id: workout.id,
          student_id: this.studentId,
          day_of_week: this.dias,
        },
      })
        .then((response) => {
          alert('Cadastrado com sucesso')
          console.log(response.data)
        })
        .catch(() => {
          alert('Não foi possível criar o treino neste momento.')
        })
    }
  }
}
</script>