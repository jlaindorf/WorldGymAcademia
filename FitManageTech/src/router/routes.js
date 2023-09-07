import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login/Login.vue'
import cadastrousuario from '../views/Cadastros/CadastroUsuario.vue'
import cadastroaluno from '../views/Cadastros/CadastroAluno.vue'
import cadastrotreino from '../views/Cadastros/CadastroTreino.vue'
import dashboard from '../views/Dashboard/Dashboard.vue'
import gerenciaaluno from '../views/Gerenciamento/GerenciaAluno.vue'
import gerenciaexercicio from '../views/Gerenciamento/GerenciaExercicio.vue'
import visualizatreinos from '../views/Visualizacao/VisualizaTreinos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/cadastro-novo',
      name: 'CadastroUsuario',
      component: cadastrousuario
    },
    {
      path: '/cadastro-aluno',
      name: 'CadastroAluno',
      component: cadastroaluno
    },
    {
      path: '/cadastro-treino',
      name: 'CadastroTreino',
      component: cadastrotreino
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/gerenciamento-aluno',
      name: 'gerenciaaluno',
      component: gerenciaaluno
    },
    {
      path: '/gerenciamento-exercicios',
      name: 'gerenciaexercicio',
      component: gerenciaexercicio
    },
    {
      path: '/visualizacao-treinos',
      name: 'visualizatreinos',
      component: visualizatreinos
    }
  ]
})

export default router
