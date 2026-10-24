<template>
  <form class="formulario-registro" @submit.prevent="proximo">

    <div class="grupo-campo">
      <label class="label-laranja">TIPO DE ACERVO</label>
      <div class="grupo-bloco-radio">
        <label class="bloco-radio" :class="{ 'selecionado': dados.tipoAcervo === 'unico' }">
          <input type="radio" v-model="dados.tipoAcervo" value="unico" name="tipoAcervo">
          <span>Item único</span>
        </label>
        <label class="bloco-radio" :class="{ 'selecionado': dados.tipoAcervo === 'colecao' }">
          <input type="radio" v-model="dados.tipoAcervo" value="colecao" name="tipoAcervo">
          <span>Coleção</span>
        </label>
      </div>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">CATEGORIA</label>
      <select class="form-control-select" v-model="dados.categoria" required>
        <option value="" disabled selected>Selecione uma categoria</option>
        <option value="Paleontologia">Paleontologia</option>
        <option value="Arqueologia">Arqueologia</option>
        <option value="História">História</option>
      </select>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">HISTÓRICO E PROCEDÊNCIA</label>
      <textarea class="form-control" v-model="dados.historicoProcedencia"
        placeholder="Descreva a origem, contexto e importância do item." required></textarea>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">JUSTIFICATIVA DA DOAÇÃO</label>
      <textarea class="form-control" v-model="dados.justificativaDoacao"
        placeholder="Explique por que você deseja doar este item ao museu." required></textarea>
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
  tipoAcervo: 'unico',
  categoria: '',
  historicoProcedencia: '',
  justificativaDoacao: ''
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

.grupo-bloco-radio {
  display: flex;
  gap: 16px;
  width: 100%;
}

.bloco-radio {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

.bloco-radio input[type="radio"] {
  accent-color: #B53C02;
  width: 16px;
  height: 16px;
}

.bloco-radio.selecionado {
  background-color: #FFF5F0;
}

.form-control-select,
.grupo-campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
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

.btn-cancelar-laranja, .btn-confirmar-laranja {
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.btn-cancelar-laranja {
  background-color: transparent;
  border: 1px solid #B53C02;
  color: #B53C02;
}

.btn-confirmar-laranja {
  background-color: #B53C02;
  border: 1px solid #B53C02;
  color: #ffffff;
}
</style>
