<script setup>
import { ref } from 'vue'

// Estado reativo estruturado por constantes para capturar os dados pessoais do doador
const dadosDoador = ref({
  nome: '',
  cpf: '',
  email: '',
  telefone: '',
  endereco: ''
})
</script>

<template>
  <form class="formulario-registro">

    <div class="grupo-campo">
      <label class="label-laranja">NOME COMPLETO</label>
      <input
        v-model="dadosDoador.nome"
        type="text"
        class="form-control"
        placeholder="Digite seu nome completo"
      >
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">CPF</label>
      <input
        v-model="dadosDoador.cpf"
        type="text"
        class="form-control"
        placeholder="000.000.000-00"
      >
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">E-MAIL</label>
      <input
        v-model="dadosDoador.email"
        type="email"
        class="form-control"
        placeholder="nome@exemplo.com"
      >
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">TELEFONE</label>
      <input
        v-model="dadosDoador.telefone"
        type="text"
        class="form-control"
        placeholder="(00) 00000-0000"
      >
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">ENDEREÇO</label>
      <textarea
        v-model="dadosDoador.endereco"
        class="form-control"
        placeholder="Digite seu endereço completo"
      ></textarea>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja">VOLTAR</button>
      <button type="button" class="btn btn-confirmar-laranja">PRÓXIMO</button>
    </div>

  </form>
</template>

<style scoped>
.formulario-registro {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-laranja {
  font-size: 11px;
  font-weight: bold;
  color: #B53C02;
  letter-spacing: 0.5px;
}

.grupo-campo input,
.grupo-campo select,
.grupo-campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
}

.grupo-campo input::placeholder,
.grupo-campo textarea::placeholder {
  color: #cccccc;
}

.grupo-campo textarea {
  height: 120px;
  resize: vertical;
}

.grupo-botoes {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
}

.btn-cancelar-laranja {
  background-color: transparent;
  border: 1px solid #B53C02;
  color: #B53C02;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.btn-cancelar-laranja:hover {
  background-color: #FFF5F0;
}

.btn-confirmar-laranja {
  background-color: #B53C02;
  border: 1px solid #B53C02;
  color: #ffffff;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.btn-confirmar-laranja:hover {
  background-color: #943101;
  border-color: #943101;
}
</style>
