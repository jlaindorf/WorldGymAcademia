<template>
  <v-form ref="form">

    <h1 class="mdi mdi-account-multiple">Cadastro de Aluno</h1>


    <v-container>
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field :rules="[value => !!value || 'Nome é obrigatório']" label="Nome Completo" v-model="nome"
            variant="outlined"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Email" variant="outlined" :rules="emailRules" v-model="email"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Contato" type="phone" v-model="contato"
            :rules="[value => !!value || 'Número de contato obrigatório']" variant="outlined"></v-text-field>
        </v-col>
     
        <v-col cols="12" sm="6">
          <div  >
            <VueDatePicker  placeholder="Data De Nascimento" :max="new Date()" locale="pt-BR" :enable-time-picker="false"
              v-model="dataSelecionada" type="date" />
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="CEP" @change="viacep" v-model="cep" variant="outlined"
            :rules="[value => !!value || 'CEP obrigatório']"></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field label="Logradouro" v-model="logradouro" variant="outlined"
            :rules="[value => !!value || 'Logradouro obrigatório']"></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field label="Número" v-model="numero" variant="outlined"
            :rules="[value => !!value || 'Número obrigatório']"></v-text-field>
        </v-col>


        <v-col cols="2">
          <v-text-field label="Estado" v-model="uf" variant="outlined"
            :rules="[value => !!value || 'Estado é obrigatório']"></v-text-field>

        </v-col>
        <v-col cols="3">
          <v-text-field label="Cidade" v-model="cidade" variant="outlined"
            :rules="[value => !!value || 'Cidade é obrigatório']"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Bairro" v-model="bairro" variant="outlined"
            :rules="[value => !!value || 'Bairro é obrigatório']"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Complemento" v-model="complemento" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn :disabled="!formularioValido" @click="cadastraAluno" color="blue" variant="tonal">Cadastrar</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      nome: '',
      contato: '',
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      numero: '',
      email: '',
      emailRules: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail tem que ser válido'],
      dataSelecionada: null,
      formularioValido: false

    }
  },
  watch: {
    nome: 'validarFormulario',
    contato: 'validarFormulario',
    cep: 'validarFormulario',
    numero: 'validarFormulario'
  },

  methods: {
    validarFormulario() {
      this.formularioValido =
        !!this.nome && this.contato && this.cep && this.numero
        &&
        true;
    },
    viacep() {
      axios({
        url: `https://viacep.com.br/ws/${this.cep}/json/`,
        method: 'GET',
      })
        .then((response) => {
          this.data = response.data;
          this.logradouro = this.data.logradouro;
          this.bairro = this.data.bairro;
          this.cidade = this.data.localidade;
          this.uf = this.data.uf;

        })
        .catch(() => {
          alert('Não foi possível Encontrar o endereço');
        });
    },
    cadastraAluno() {
      axios({
        url: 'http://localhost:3000/students',
        method: 'POST',
        data: {
          name: this.nome,
          email: this.email,
          contact: this.contato,
          date_birth: this.dataSelecionada,
          cep: this.cep,
          street: this.logradouro,
          number: this.numero,
          neighborhood: this.bairro,
          city: this.cidade,
          province: this.uf,
          complement: this.complemento

        }
      })
        .then((response) => {
          alert('Aluno cadastrado com sucesso!')
          this.nome = '';
          this.contato = '';
          this.cep = '';
          this.logradouro = '';
          this.complemento = '';
          this.bairro = '';
          this.cidade = '';
          this.uf = '';
          this.numero = '';
          this.email = '';
          this.dataSelecionada = null;
          this.$nextTick(() => {
            this.$refs.form.resetValidation();
          });
        })
        .catch(() => {
          alert('Não foi possível cadastrar o ALuno ')
        })
    }
  },

};
</script>

<style s>
.logo {
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #3498db;
  /* Cor azul */
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 80%;

}

.mdi {
  width: 30%;
}
.data{
  height: 50px;
  width: 150%;
}
</style>