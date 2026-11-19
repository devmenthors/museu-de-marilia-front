<script setup>
import { useRoute, useRouter } from 'vue-router'
import ResumoProposta from '@/Components/Formularios/ResumoProposta.vue'
import FormAprovarIncorporacao from '@/Components/Formularios/FormAprovarIncorporacao.vue'

const route = useRoute()
const router = useRouter()

// Volta para a tela de análise da MESMA solicitação, abrindo no status informado
function voltarParaAnalise(status) {
  router.push({ name: 'analysis', params: { id: route.params.id }, query: { status } })
}

// Recebe os dados do formulário quando o curador confirma
// eslint-disable-next-line no-unused-vars -- "dados" será usado quando a API existir
function confirmar(dados) {
  // Quando a API existir: POST /api/solicitacoes/{id}/incorporar enviando "dados"
  voltarParaAnalise('incorporation') // a análise reabre já mostrando o novo status
}
</script>

<template>
  <!-- O cabeçalho e o rodapé agora vêm do App.vue (iguais em todas as telas) -->
  <div class="py-3">
    <h1>Aprovar Incorporação</h1>
    <p class="subtitulo-cinza">Preencha os dados necessários para o registro oficial do item no acervo permanente</p>

    <!-- :id passa o protocolo da URL para o resumo mostrar a solicitação certa -->
    <ResumoProposta :id="route.params.id" />

    <FormAprovarIncorporacao @confirmar="confirmar" @cancelar="voltarParaAnalise('analysis')" />
  </div>
</template>
