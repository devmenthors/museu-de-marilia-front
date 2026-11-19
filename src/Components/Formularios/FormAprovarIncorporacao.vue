<template>
  <form class="formulario-registro" @submit.prevent="confirmar">

    <div class="grupo-campo">
      <label class="label-laranja" for="numeroRegistro">NÚMERO DE REGISTRO NO ACERVO</label>
      <input id="numeroRegistro" type="text" class="campo-laranja" v-model.trim="dados.numeroRegistro"
        placeholder="Ex: MPU-2025-0012" maxlength="30" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="categoriaClassificacao">CATEGORIA DE CLASSIFICAÇÃO</label>
      <select id="categoriaClassificacao" class="campo-laranja" v-model="dados.categoria">
        <option>Paleontologia</option>
        <option>Arqueologia</option>
      </select>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="localizacaoAcervo">LOCALIZAÇÃO NO ACERVO</label>
      <input id="localizacaoAcervo" type="text" class="campo-laranja" v-model.trim="dados.localizacao"
        placeholder="Ex: Prateleira B3, Sala de Fósseis de Vertebrados" maxlength="150" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="observacoesCurador">OBSERVAÇÕES DO CURADOR</label>
      <textarea id="observacoesCurador" class="campo-laranja" v-model.trim="dados.observacoes" maxlength="2000"
        placeholder="Adicione observações adicionais sobre o estado de conservação, relevância científica, ou instruções de curadoria..."></textarea>
    </div>

    <div class="grupo-checkbox">
      <input type="checkbox" id="gerarEtiqueta" class="form-check-input" v-model="dados.gerarEtiqueta">
      <label for="gerarEtiqueta" class="form-check-label text-muted">Gerar Etiqueta de Exposição
        automaticamente?</label>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="emit('cancelar')">CANCELAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">APROVAR INCORPORAÇÃO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

// confirmar -> envia os dados para a View; cancelar -> volta sem salvar
const emit = defineEmits(['confirmar', 'cancelar'])

// Valores iniciais iguais aos que já apareciam na tela (Paleontologia e checkbox marcado)
const dados = ref({
  numeroRegistro: '',
  categoria: 'Paleontologia',
  localizacao: '',
  observacoes: '',
  gerarEtiqueta: true,
})

const confirmar = () => emit('confirmar', { ...dados.value })
</script>
