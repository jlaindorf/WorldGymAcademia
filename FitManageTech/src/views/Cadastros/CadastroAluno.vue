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
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Email"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Contato"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <div>
    <VueDatePicker
      placeholder="Data De Nascimento"
      :max="new Date()"
      locale="pt-BR"
      :enable-time-picker="false"
      v-model="selectedDate"
      type="date"
    />
  
  </div>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="CEP"
             variant="outlined"
           ></v-text-field>
         </v-col>
 
         <v-col
           cols="12"
           sm="6"
         >
         <v-text-field
             label="Logradouro"
             variant="outlined"
           ></v-text-field>
         </v-col>

        <v-col
        cols="2"
        >
        <v-select
      label="Estado"
      v-model="selectedState"
      :items="estados"
      outlined
    ></v-select>
        </v-col> 
        <v-col
        cols="3"
        >
        <v-text-field
             label="Cidade"
             variant="outlined"
           ></v-text-field>
         </v-col>
         <v-col
        cols="3"
       >
        <v-text-field
             label="Bairro"
             variant="outlined"
           ></v-text-field>
         </v-col>
         <v-col
        cols="4"
        >
        <v-text-field
             label="Complemento"
             variant="outlined"
           ></v-text-field>
         </v-col>
       </v-row>
     </v-container>
   </v-form>
 </template>
 
<script>
export default {
  data() {
    return {
      selectedDate: null,
      selectedState: null,
      estados: [
        { text: 'Acre', value: 'AC' },
        { text: 'Alagoas', value: 'AL' },
        { text: 'Amapá', value: 'AP' },
        { text: 'Amazonas', value: 'AM' },
        { text: 'Bahia', value: 'BA' },
        { text: 'Ceará', value: 'CE' },
        { text: 'Distrito Federal', value: 'DF' },
        { text: 'Espírito Santo', value: 'ES' },
        { text: 'Goiás', value: 'GO' },
        { text: 'Maranhão', value: 'MA' },
        { text: 'Mato Grosso', value: 'MT' },
        { text: 'Mato Grosso do Sul', value: 'MS' },
        { text: 'Minas Gerais', value: 'MG' },
        { text: 'Pará', value: 'PA' },
        { text: 'Paraíba', value: 'PB' },
        { text: 'Paraná', value: 'PR' },
        { text: 'Pernambuco', value: 'PE' },
        { text: 'Piauí', value: 'PI' },
        { text: 'Rio de Janeiro', value: 'RJ' },
        { text: 'Rio Grande do Norte', value: 'RN' },
        { text: 'Rio Grande do Sul', value: 'RS' },
        { text: 'Rondônia', value: 'RO' },
        { text: 'Roraima', value: 'RR' },
        { text: 'Santa Catarina', value: 'SC' },
        { text: 'São Paulo', value: 'SP' },
        { text: 'Sergipe', value: 'SE' },
        { text: 'Tocantins', value: 'TO' },
      ],
    };
  },
};
</script>