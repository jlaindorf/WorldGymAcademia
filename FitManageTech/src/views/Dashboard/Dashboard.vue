<template>
   <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter"></span>
        </div>
  <h1>Bem Vindo,{{ nome }}</h1>

  <main>

    <v-card class="mx-auto" width="400" prepend-icon="mdi-account-multiple">
      <template v-slot:title>
        Alunos  
        <h1>{{ qtdAlunos }}</h1>  
      </template>

      <v-card-text>
       
        <v-btn type="submit" color="blue" @click="newStudent" prepend-icon="mdi-plus" variant="tonal">Adicionar Aluno</v-btn>
      </v-card-text>
      
    </v-card>


    <v-card class="mx-auto" width="400" prepend-icon="mdi-arm-flex">
      <template v-slot:title>
        Exercícios
        <h1>{{ qtdExercicios }}</h1>
      </template>

      <v-card-text>
       
        <v-btn type="submit" color="blue" @click="newTrain" prepend-icon="mdi-plus" variant="tonal">Adicionar Exercício</v-btn>
      </v-card-text>
    </v-card>
  </main>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    const dadosUsuario = localStorage.getItem('user-info');
    const nome = JSON.parse(dadosUsuario);

    return {
      dadosUsuario: dadosUsuario,
      nome: nome,
      qtdAlunos:'',
      qtdExercicios:'',

    };
    
  },
  mounted() {
  axios({
    url: 'http://localhost:3000/dashboard',
    method: 'GET',
  })
  .then((response) => {
   
    this.qtdAlunos = response.data.amount_students;
    this.qtdExercicios = response.data.amount_exercises;
   
  })
  .catch((error) => {
    console.error('Erro ao buscar dados do servidor:', error);
  })
},
methods:{

  newStudent(){

    this.$router.push('/cadastro-aluno')
  },

  newTrain(){
    this.$router.push('/gerenciamento-exercicios')
  }

}
  
  
  }
</script>


<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
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
          width: 30%;
        }
        
</style>