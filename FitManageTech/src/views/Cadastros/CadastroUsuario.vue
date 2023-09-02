<template>
     <form @submit.prevent="handleCreateAccount" class="form-login">
          <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter" ></span>
        <h3>Criar conta</h3>
      </div>
       
     
      
   
       <div class="form-element">
         <label for="name"> Nome completo </label>
         <input class="form-input " id="name" v-model="name"  />
        
       </div>
   
       <div class="form-element">
         <label for="email"> Email </label>
         <input class="form-input" id="email" v-model="email" />
        
       </div>
   
       <div class="form-element">
         <label for="phone"> Telefone </label>
         <input class="form-input" id="phone" v-model="phone" />
        
       </div>
   
       <div class="form-element">
         <label for="password"> Senha </label>
         <input class="form-input" id="password" type="password"  />
         
       </div>
   
       <div class="form-element">
         <label for="verifyPassword"> Confirma senha </label>
         <input class="form-input" id="verifyPassword" type="password"  />
        
       </div>
   
      
        <label for="">Selecione um Plano</label>
       <select >
          <option value="Bonze">Bronze</option>
          <option value="Prata">Prata</option>
          <option value="Bonze">Ouro</option>
       </select>
         
   
         
   
   
       <button type="submit">Criar conta</button>
     </form>
   </template>
       
   <script>
   import * as yup from 'yup'
   import axios from 'axios'
   
   export default {
     data() {
       return {
         name: '',
         email: '',
         phone: '',
         password: '',
         verifyPassword: '',
         sponsor: '',
         bio: '',
         confirmTerms: true,
         planType: '2',
   
         errors: {}
       }
     },
    
   }
   </script>
       
   <style scoped>
   .form-login {
     margin: 40px auto;
     width: 40%;
   
     border-radius: 4px;
     border: 1px solid #383737;
   
     display: flex;
     flex-direction: column;
     gap: 10px;
     align-items: center;
   
     padding: 10px;
   }
   
   .form-element {
     display: flex;
     flex-direction: column;
     width: 80%;
     justify-content: center;
     align-items: center;
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      max-width: 448px;
   }
   
   
   
   button {
     width: 80%;
     height: 54px;
     background-color: #3578e5;
   
     color: white;
     font-size: 18px;
     border-radius: 8px;
     border: none;
   }
   
   button:hover {
     background-color: #286ee0;
   }
   
   </style>