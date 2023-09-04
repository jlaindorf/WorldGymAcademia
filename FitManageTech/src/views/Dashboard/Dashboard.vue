<template>
     <h1>Bem Vindo,{{ nome }}</h1>

     <main>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-account-multiple"
  >
    <template v-slot:title>
      Alunos
    </template>

    <v-card-text>
      <h1></h1>
    </v-card-text>
  </v-card>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-arm=flex"
  >
    <template v-slot:title>
      Exercícios
    </template>

    <v-card-text>
      10
    </v-card-text>
  </v-card>
</main>
</template>


<script>
export default {
  data() {
    const dadosUsuario = localStorage.getItem('user-info');
    const nome = JSON.parse(dadosUsuario); 

    return {
      dadosUsuario: dadosUsuario,
      
      nome: nome, 
    };
  },
};
</script>


<style scoped>

main{
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

</style>