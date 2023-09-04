<template>
  

    <v-form ref="form" @submit.prevent="handleSubmit">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter" ></span>
      </div>
      
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>
  
        <v-text-field
          v-model="usuario.email"
          density="compact"
          placeholder="Digite seu Email "
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="[value => !!value || 'O email é obrigatório!']"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
  
        
        </div>
  
        <v-text-field
           v-model="usuario.password"
          type="password"
          density="compact"
          placeholder="Digite sua Senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="[value => !!value || 'A senha é obrigatória!']"
        
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
         
        </v-card>
  
        <v-btn
          type="submit"
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Login
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            @click="cadastroUsuario"
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Não tem uma conta? Cadastre-se <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </v-form>
  </template>
  <script>
    import axios from 'axios'
    export default {
  data() {
    return {
      usuario: {
        email: "",
        password: ""
      },
    }
  },
  methods: {
    async handleSubmit(){
      const {valid} = await this.$refs.form.validate()

      if(!valid){
        alert("Preencha todos os dados!")
        return
      }

      try {
        const result = await axios.post('http://localhost:3000/sessions', this.usuario)

        if(result.status == 200){
         
          localStorage.setItem("user-info", JSON.stringify(result.data.name))
          this.$router.push('/dashboard')
        }
        
        console.log(result)

      } catch (error) {
        console.log(error.response.data.error)
        alert("Usuário não cadastrado!")
       

      }

      
    },
    cadastroUsuario(){
        this.$router.push('/cadastro-novo')


    }
  }
}
</script>


  <style>
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