<template>
     <h1>Bem Vindo,{{ nome }}</h1>

     <main>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-account"
  >
    <template v-slot:title>
      This is a title
    </template>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
</main>
</template>


<script>
export default {
  data() {
    const dadosUsuario = localStorage.getItem('user-info');
    const valorChave = JSON.parse(dadosUsuario); 

    return {
      dadosUsuario: dadosUsuario,
      valorChave: valorChave,
      nome: valorChave.name, 
    };
  },
};
</script>


