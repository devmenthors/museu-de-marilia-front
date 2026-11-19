<template>

  <form class="formulario-registro" @submit.prevent="confirmar">

    <div class="grupo-campo">
      <label class="label-laranja" for="motivoNaoIncorporacao">MOTIVO DA NÃO INCORPORAÇÃO</label>
      <select id="motivoNaoIncorporacao" class="campo-laranja" v-model="dados.motivo">
        <option>Duplicidade no acervo</option>
        <option>Estado de conservação inadequado</option>
        <option>Fora do escopo da coleção</option>
      </select>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="justificativaDetalhada">JUSTIFICATIVA DETALHADA *</label>
      <!-- O "*" do rótulo indica campo obrigatório: agora o "required" faz valer isso de verdade -->
      <textarea id="justificativaDetalhada" class="campo-laranja" v-model.trim="dados.justificativa" maxlength="2000"
        placeholder="Digite detalhadamente os motivos científicos ou técnicos..." required></textarea>
    </div>

    <div class="grupo-checkbox">
      <input type="checkbox" id="notificarDoador" class="form-check-input" v-model="dados.notificarDoador">
      <label for="notificarDoador" class="form-check-label text-muted">Notificar doador por e-mail automaticamente?
        (Recomendado)</label>
    </div>
    <p class="aviso-checkbox text-muted">O doador receberá uma notificação formal via e-mail com a justificativa técnica
      informada neste parecer.</p>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="emit('cancelar')">CANCELAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">CONFIRMAR NÃO INCORPORAÇÃO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['confirmar', 'cancelar'])

const dados = ref({
  motivo: 'Duplicidade no acervo', // primeira opção, como já vinha selecionada
  justificativa: '',
  notificarDoador: true,
})

const confirmar = () => emit('confirmar', { ...dados.value })
</script>

<style scoped>
/* Texto explicativo logo abaixo do checkbox, alinhado com o texto do label */
.aviso-checkbox {
  font-size: 13px !important; /* !important porque a regra global de "p" também usa */
  margin-top: -16px; /* "puxa" para perto do checkbox, compensando o gap de 24px do formulário */
  margin-left: 30px; /* 18px do checkbox + 10px de gap + 2px: alinha com o início do texto do label */
  line-height: 1.2;
}
</style>
