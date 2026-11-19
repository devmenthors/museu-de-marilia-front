<template>
  <form class="formulario-registro" @submit.prevent="proximo">

    <div class="grupo-campo">
      <span class="label-laranja" id="labelTipoAcervo">TIPO DE ACERVO</span>
      <!-- role="radiogroup" + aria-labelledby: o leitor de tela anuncia "Tipo de acervo" para as duas opções -->
      <div class="grupo-bloco-radio" role="radiogroup" aria-labelledby="labelTipoAcervo">
        <!-- A classe "selecionado" pinta o fundo do bloco escolhido -->
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
      <label class="label-laranja" for="categoria">CATEGORIA</label>
      <select id="categoria" class="campo-laranja" v-model="dados.categoria" required>
        <!-- value="" + disabled: obriga a escolher uma categoria de verdade -->
        <option value="" disabled>Selecione uma categoria</option>
        <option value="Paleontologia">Paleontologia</option>
        <option value="Arqueologia">Arqueologia</option>
        <option value="História">História</option>
      </select>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="historicoProcedencia">HISTÓRICO E PROCEDÊNCIA</label>
      <textarea id="historicoProcedencia" class="campo-laranja" v-model.trim="dados.historicoProcedencia"
        placeholder="Descreva a origem, contexto e importância do item." maxlength="2000" required></textarea>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="justificativaDoacao">JUSTIFICATIVA DA DOAÇÃO</label>
      <textarea id="justificativaDoacao" class="campo-laranja" v-model.trim="dados.justificativaDoacao"
        placeholder="Explique por que você deseja doar este item ao museu." maxlength="2000" required></textarea>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="voltar">VOLTAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">PRÓXIMO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useDoacao } from '@/Composables/useDoacao'

const emit = defineEmits(['proximo', 'voltar'])
const { estadoDoacao } = useDoacao()

// Cópia do que já foi preenchido (se a pessoa voltou da etapa 3, os dados continuam aqui)
const dados = ref({ ...estadoDoacao.informacoesItem })

const proximo = () => emit('proximo', { ...dados.value })
const voltar = () => emit('voltar', { ...dados.value }) // manda o rascunho junto, para não perder o que foi digitado
</script>

<style scoped>
/* Os dois blocos de opção lado a lado, ocupando a largura toda */
.grupo-bloco-radio {
  display: flex;
  gap: 16px;
  width: 100%;
}

.bloco-radio {
  flex: 1; /* cada bloco ocupa metade */
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
  accent-color: #B53C02; /* pinta a bolinha do radio de laranja */
  width: 16px;
  height: 16px;
}

.bloco-radio.selecionado {
  background-color: #FFF5F0;
}
</style>
