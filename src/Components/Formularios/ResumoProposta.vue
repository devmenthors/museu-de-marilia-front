<script setup>
import { computed } from 'vue'
import { buscarSolicitacaoPorId } from '@/Services/solicitacoes'

// Caixa marrom "RESUMO DA PROPOSTA" que se repetia igual nas 3 telas de decisão do curador.
// Agora é um componente só e o protocolo/doador vêm da solicitação aberta (antes era sempre #000012).
const props = defineProps({
  id: {
    type: String,
    required: true, // protocolo vindo da URL (/analysis/:id/...)
  },
})

// computed: recalcula sozinho se o id mudar
const solicitacao = computed(() => buscarSolicitacaoPorId(props.id))
const protocolo = computed(() => String(props.id).padStart(6, '0')) // mostra sempre com 6 dígitos
</script>

<template>
  <div class="caixa-resumo-marrom">
    <!-- div em vez de <p>: a regra global de "p" deixa o texto cinza com !important e trocaria a cor marrom -->
    <div class="tag-resumo">RESUMO DA PROPOSTA</div>
    <div class="titulo-resumo">
      Protocolo: #{{ protocolo }} | Doador: {{ solicitacao ? solicitacao.donor : 'Não encontrado' }}
    </div>
    <div class="texto-resumo">Item: Provável fragmento de carapaça de dinossauro saurópode (Formação Marília).</div>
  </div>
</template>

<style scoped>
.caixa-resumo-marrom {
  background-color: #FAF4F0;
  border: 1px solid #5D372E;
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  max-width: 800px; /* mesma largura máxima do formulário logo abaixo */
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 1.4;
}

.tag-resumo {
  font-size: 11px;
  font-weight: bold;
  color: #5D372E;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.titulo-resumo {
  font-size: 16px;
  font-weight: 600;
  color: #5D372E;
  margin: 0 0 6px 0;
}

.texto-resumo {
  font-size: 14px;
  color: #5D372E;
}
</style>
