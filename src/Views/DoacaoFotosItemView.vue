<script setup>
import { useRouter } from 'vue-router'
import { useDoacao } from '@/Composables/useDoacao'
// Antes importava '@/components/formularios/FormsImagens.vue', que não existia
import FormFotosItem from '@/Components/Formularios/FormFotosItem.vue'

const router = useRouter()
const { finalizarDoacao } = useDoacao()

function finalizar(fotos) {
  finalizarDoacao(fotos)
  router.push({ name: 'doacaoSucesso' })
}
</script>

<template>
  <div class="py-3">
    <h1>Documentação Fotográfica</h1>
    <p class="subtitulo-cinza">Adicione imagens detalhadas do item sob diferentes ângulos para a análise da curadoria</p>

    <!-- Componente interno com as caixas de fotos da Etapa 3 -->
    <FormFotosItem @finalizar="finalizar" @voltar="router.push({ name: 'doacaoInformacoesItem' })" />
  </div>
</template>
