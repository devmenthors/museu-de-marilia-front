<template>
  <form class="formulario-registro" @submit.prevent="proximo">

    <div class="grupo-campo">
      <label class="label-laranja">NOME COMPLETO</label>
      <input type="text" class="form-control" v-model="dados.nomeCompleto" placeholder="Digite seu nome completo" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">CPF</label>
      <input type="text" class="form-control" v-model="dados.cpf" placeholder="000.000.000-00" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">E-MAIL</label>
      <input type="text" class="form-control" v-model="dados.email" placeholder="nome@exemplo.com" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">TELEFONE</label>
      <input type="text" class="form-control" v-model="dados.telefone" placeholder="(00) 00000-0000" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">ENDEREÇO</label>
      <input type="text" class="form-control" v-model="dados.endereco" placeholder="Digite seu endereço completo" required>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="voltar">VOLTAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">PRÓXIMO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['proximo', 'voltar'])

const dados = ref({
  nomeCompleto: '',
  cpf: '',
  email: '',
  telefone: '',
  endereco: ''
})

const proximo = () => emit('proximo', dados.value)
const voltar = () => emit('voltar')
</script>

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

.grupo-campo input[type="text"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
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
