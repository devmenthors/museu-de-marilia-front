<script setup>
import { useRouter } from 'vue-router'
import { useDoacao } from '@/Composables/useDoacao'
// Antes importava '@/components/formularios/FormsSucesso.vue', que não existia
import SolicitacaoFinalizada from '@/Components/Formularios/SolicitacaoFinalizada.vue'

const router = useRouter()
const { estadoDoacao, limparDoacao } = useDoacao()

// VOLTAR PARA O INÍCIO: apaga os dados da doação concluída e volta para o painel
function home() {
  limparDoacao()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <!-- d-flex + justify-content-center: centraliza o cartão de sucesso na tela -->
  <div class="py-3 d-flex justify-content-center">
    <SolicitacaoFinalizada :protocolo="estadoDoacao.protocolo" @home="home" />
  </div>
</template>
