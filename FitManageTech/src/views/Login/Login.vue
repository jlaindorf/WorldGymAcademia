<template>
    

      <div>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <div class="logo">Fit Manage Tech</div>
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>
  
        <v-text-field
          density="compact"
          placeholder="Digite seu Email "
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
  
        
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Digite sua Senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
         
        </v-card>
  
        <v-btn
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
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Não tem uma conta? Cadastre-se <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        visible: false,
      }),
    }
  </script>

  <style>
        .logo {
            font-family: Arial, sans-serif;
            font-size: 24px;
            font-weight: bold;
            color: #3498db; /* Cor azul */
            text-transform: uppercase;
            letter-spacing: 4px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            width: 80%;
           
        }
    </style>