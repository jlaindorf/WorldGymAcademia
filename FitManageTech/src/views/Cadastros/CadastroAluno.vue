<template>
   <v-form>
      <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter"></span>
       <h4 class="mdi mdi-account-multiple">Cadastro de Aluno</h4>
       
        
      </div>
     <v-container>
       <v-row>
         
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Nome Completo"
             model-value="Insira seu nome"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Email"
             model-value="Insira seu email"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Contato"
             model-value="Insira seu telefone"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-date-picker
         
          label="Data de Nascimento"
          prepend-icon="mdi-calendar"
          :rules="[value => !!value || 'A data de nascimento é obrigatória']"
        ></v-date-picker>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Nome Completo"
             model-value="Insira seu nome"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Nome Completo"
             model-value="Insira seu nome"
             variant="outlined"
           ></v-text-field>
         </v-col>
       </v-row>
     </v-container>
   </v-form>
 </template>