<script setup>
import { useRouter } from 'vue-router'
import { useDoacao } from '@/Composables/useDoacao'
// Antes importava '@/components/formularios/FormsItem.vue', que não existia (a pasta era "formulários",
// com acento, e o arquivo se chamava FormsInfoItem) — por isso a tela quebrava
import FormInformacoesItem from '@/Components/Formularios/FormInformacoesItem.vue'

const router = useRouter()
const { salvarInformacoesItem } = useDoacao()

function proximo(dados) {
  salvarInformacoesItem(dados)
  router.push({ name: 'doacaoFotosItem' })
}

// VOLTAR: guarda o rascunho (sem concluir a etapa) e retorna para a etapa 1
function voltar(dados) {
  salvarInformacoesItem(dados, false)
  router.push({ name: 'doacaoDadosPessoais' })
}
</script>

<template>
  <div class="py-3">
    <h1>Informações do Item</h1>
    <p class="subtitulo-cinza">Insira os dados técnicos e a procedência do item que está sendo submetido para incorporação</p>

    <!-- Componente interno com o formulário da Etapa 2 -->
    <FormInformacoesItem @proximo="proximo" @voltar="voltar" />
  </div>
</template>
