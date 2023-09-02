<template>
     <main >
       <h1>Formulário de cadastro</h1>
     <Form @submit="handleSubmit" :validation-schema="usuarioSchema"  v-slot="{ errors }" class="form-login" >
          <div class="logo">Fit Manage Tech
        <span class="mdi mdi-weight-lifter" ></span>
        <h3>Criar conta</h3>
      </div>
         <Field type="text" name="name" v-model="usuario.name" placeholder="Digite o nome" />
         {{ errors.name }}
   
         <Field type="email" name="email" v-model="usuario.email" placeholder="Digite o email" />
         {{ errors.email }}

         <Field type="password" name="password" v-model="usuario.password" placeholder="Escolha uma senha" />
         {{ errors.password }}

         
         <button type="submit">Cadastrar</button>
       </Form>
     </main>
   </template>
   
   
   <script>
   import { Form, Field } from "vee-validate"
   import * as Yup from "yup"
   export default {
     components: {
       Form,
       Field
     },
     data() {
       return {
         usuarioSchema: Yup.object().shape({
           name: Yup.string().required("O nome é obrigatório!"),
           email: Yup.string().email('Email não é valido').required('Email é obrigatório'),
           password: Yup.string()
            .min(8, 'A senha deve ser maior')
            .max(20, 'Deve ter entre 8-20 letras')
            .required('A senha é obrigatória'),
         }),
         usuario: {
           name: "",
           email: "",
           password:""
         }
       }
     },
     methods: {
       handleSubmit() {
         alert("Cadastro realizado!")
       }
     },
   }
   </script>

   <style>

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
   
</style>