<template>
  <form class="formulario-registro" @submit.prevent="confirmar">

    <div class="grupo-campo">
      <label class="label-laranja" for="departamentoDestino">DEPARTAMENTO DE DESTINO</label>
      <!-- maxlength="25": o aviso abaixo já dizia "Máximo de 25 caracteres", agora o campo respeita isso -->
      <input id="departamentoDestino" type="text" class="campo-laranja" v-model.trim="dados.departamento"
        maxlength="25" required>
      <span class="aviso-campo text-muted">Máximo de 25 caracteres</span>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="responsavel">RESPONSÁVEL</label>
      <input id="responsavel" type="text" class="campo-laranja" v-model.trim="dados.responsavel"
        placeholder="Nome do responsável" maxlength="120" required>
    </div>

    <div class="grupo-campo">
      <span class="label-laranja" id="labelPrioridade">PRIORIDADE</span>
      <div class="grupo-radio" role="radiogroup" aria-labelledby="labelPrioridade">
        <input type="radio" id="prioridadeNormal" name="prioridade" value="normal" v-model="dados.prioridade">
        <label for="prioridadeNormal" class="text-dark">Normal</label>

        <input type="radio" id="prioridadeUrgente" name="prioridade" value="urgente" v-model="dados.prioridade">
        <label for="prioridadeUrgente" class="text-dark">Urgente</label>
      </div>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="observacoesDestinatario">OBSERVAÇÕES PARA O DESTINATÁRIO</label>
      <textarea id="observacoesDestinatario" class="campo-laranja" v-model.trim="dados.observacoes" maxlength="2000"
        placeholder="Instruções adicionais ou detalhes técnicos específicos do encaminhamento..."></textarea>
    </div>

    <div class="grupo-checkbox">
      <input type="checkbox" id="manterInformado" class="form-check-input" v-model="dados.manterInformado">
      <label for="manterInformado" class="form-check-label text-muted">Manter-me informado sobre atualizações</label>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="emit('cancelar')">CANCELAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">CONFIRMAR ENCAMINHAMENTO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['confirmar', 'cancelar'])

const dados = ref({
  departamento: 'Laboratório de Preparação', // valor que já vinha preenchido
  responsavel: '',
  prioridade: 'normal',
  observacoes: '',
  manterInformado: true,
})

const confirmar = () => emit('confirmar', { ...dados.value })
</script>

<style scoped>
/* Radios lado a lado com o texto */
.grupo-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.grupo-radio input[type="radio"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #B53C02; /* bolinha laranja */
}

.grupo-radio label {
  font-size: 14px;
  font-weight: 500;
  margin-right: 24px; /* separa a opção "Normal" da "Urgente" */
  cursor: pointer;
}
</style>
