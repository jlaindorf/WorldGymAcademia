<template>
    <img  class="base" src="https://img.freepik.com/fotos-gratis/pesos-de-exercicios-dumbbell-de-ferro-com-placas-extra_1423-223.jpg?w=1380&t=st=1694903627~exp=1694904227~hmac=9f9c897d4957bafd20ce5e3ce064c63ddc881a5cddf7c867f17ab2989c265f08" alt="piso-de-academia-com-halteres">
    <v-layout>
        <v-app-bar color="blue" v-if="renderizarMenu">
            <v-app-bar-title class="mdi mdi-weight-lifter">WorldGym</v-app-bar-title>

          

            <v-btn class="menu">
                <router-link to="/dashboard">
                 <span class="menu-text">Dashboard</span>
                </router-link>
            </v-btn>
            <v-btn class="menu">
                <router-link to="/gerenciamento-aluno">
                   <span class="menu-text">Alunos</span>
                </router-link>
            </v-btn>
            <v-btn class="menu">
                <router-link to="/gerenciamento-exercicios">
                    <span class="menu-text">Exercícios</span>
                </router-link>
            </v-btn >
            <v-btn class="menu">
                <router-link to="/">
                   <span class="menu-text">Sair</span>
                </router-link>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>
  
<script>
export default {
    computed: {
        renderizarMenu() {
            return this.$route.path !== '/' && this.$route.path !== '/cadastro-novo'
        }
    }
}
</script>

<style >

.menu-text {
  text-transform: none; 
  font-family: roboto, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color:black;
  
}
.base{
 
    opacity: 0.1;
    height: 100vh;
    width: 100vw;
    position:absolute;
    background-size: cover;
}
</style>

  