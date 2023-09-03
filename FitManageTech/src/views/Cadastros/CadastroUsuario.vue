<template>
    

     <v-form ref="form" @submit.prevent="handleCreateAccount" >
       <v-card
         class="mx-auto pa-12 pb-8"
         elevation="8"
         max-width="448"
         rounded="lg"
       >
       <div class="logo">Fit Manage Tech
         <span class="mdi mdi-weight-lifter" ></span>
         <h3>Cadastro de Usuário</h3>
       </div>
       <div class="text-subtitle-1 text-medium-emphasis">Nome Completo</div>
       <v-text-field
           v-model="usuario.name"
           density="compact"
           placeholder="Digite seu nome Completo"
           prepend-inner-icon="mdi-note-edit-outline"
           variant="outlined"
           :class="{'input-error':this.errors.name}" 
      
           
         > </v-text-field>
         <span class="message-error"> {{ this.errors.name }} </span>
        
         
       
         <div class="text-subtitle-1 text-medium-emphasis">Email  </div>   
         <v-text-field
           v-model="usuario.email"
           density="compact"
           placeholder="Digite seu Email "
           prepend-inner-icon="mdi-email-outline"
           variant="outlined"
           :class="{'input-error':this.errors.email}" 
          
         ></v-text-field>
         <span class="message-error"> {{ this.errors.email }} </span>
   

         
        
         
       
         <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
           Senha
         </div>
           <v-text-field
            v-model="usuario.password"
           type="password"
           density="compact"
           placeholder="Escolha sua Senha"
           prepend-inner-icon="mdi-lock-outline"
           variant="outlined"
           :class="{'input-error':this.errors.password}" 
           
         ></v-text-field>
         <span class="message-error"> {{ this.errors.password }} </span>
         <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
           Confirme a Senha
         </div>
           <v-text-field
            v-model="usuario.verifyPassword"
           type="password"
           density="compact"
           placeholder="Digite sua Senha"
           prepend-inner-icon="mdi-lock-outline"
           variant="outlined"
           :class="{'input-error':this.errors.verifyPassword}" 
          
         ></v-text-field>
         <span class="message-error"> {{ this.errors.verifyPassword }} </span>
        
         <div class="text-subtitle-1 text-medium-emphasis" >Selecione seu Plano</div>
         <v-select
          v-model="usuario.planType"
          :items="['Bronze', 'Prata', 'Ouro']"
           variant="outlined"
           :class="{'input-error':this.errors.planType}" 
          ></v-select>
          <span class="message-error"> {{ this.errors.planType }} </span>
        
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
           Cadastrar
         </v-btn>
   
         <v-card-text class="text-center">
           <a
             @click="cadastroConcluido"
             class="text-blue text-decoration-none"
             href="#"
             rel="noopener noreferrer"
             target="_blank"
           >
           <v-icon icon="mdi-chevron-left"></v-icon>Voltar à tela de Login 
           </a>
         </v-card-text>
       </v-card>
     </v-form>
   </template>
   <script>
   import { captureErrorYup } from '../../utils/captureErrorYup.js'
     import * as Yup from 'yup'
     import axios from 'axios'
     export default {
          
  
   data() {
     return {
        
          items:{ 
               bronze: 'bronze',
               silver: 'prata',
               gold : 'ouro'
           },
       usuario: {
          name:"",
         email: "",
         password: "",
         verifyPassword:"",
         planType:"Bronze"
       },
       errors:{}
     }
   },
   methods: {
    handleCreateAccount() {
      try {
        // 1 - CRIAR SCHEMA VALIDATION
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().email('Email não é valido').required('Email é obrigatório'),
          password: Yup
            .string()
            .min(8, 'A senha deve ser maior')
            .max(20, 'Deve ter entre 8-20 letras')
            .required('A senha é obrigatória'),
          verifyPassword: Yup
            .string()
            .required('A confirmação é necessária')
            .oneOf([
            Yup.ref('password')], 'As senhas devem coincidir'),
            planType: Yup.string().required('Escolha um plano').oneOf(['Bronze', 'Prata', 'Ouro']),
        
        })

        schema.validateSync(
          {
            name: this.usuario.name,
            email: this.usuario.email,
            password: this.usuario.password,
            verifyPassword: this.usuario.verifyPassword,
            planType:this.usuario.planType
            
          },
          { abortEarly: false }
        )
   
      

           axios ({
          url : 'http://localhost:3000/users ',
          method : 'POST',
          data:{ 
            name: this.usuario.name,
            email: this.usuario.email,
            password: this.usuario.password,
            type_plan: this.usuario.planType
           }

        })

        //sucesso na requisição
          console.log(this.usuario)

        .then(( response) => {
            alert('Cadastrado com sucesso')
            
            
          })
          //cenario da falha , qualquer um diferente de 200
         .catch((error) =>{
            if(error.response.data.message){
              alert(error.response?.data?.message)
            }
            else{
              alert("Houve uma falha ao tentar carregar")
            }
          })


          .catch(() => {
            alert('Houve uma falha ao tentar cadastrar')
          })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          console.log(error)
          // capturar os errors do yup
          this.errors = captureErrorYup(error)
        }
      }
    }
  }
}
   
 </script>
 
 
   <style>
   .input-error {
  border-color: red;
}
   .message-error {
  color: red;
  margin: 4px;
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