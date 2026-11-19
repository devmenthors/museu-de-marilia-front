<script setup>
import { useRouter } from 'vue-router'
import { useDoacao } from '@/Composables/useDoacao'
import FormDadosPessoais from '@/Components/Formularios/FormDadosPessoais.vue'

const router = useRouter()
const { salvarDadosPessoais } = useDoacao()

// PRÓXIMO: guarda os dados da etapa 1 e abre a etapa 2
function proximo(dados) {
  salvarDadosPessoais(dados)
  router.push({ name: 'doacaoInformacoesItem' })
}
</script>

<template>
  <div class="py-3">
    <!-- Esta tela não tinha título no projeto original; foi criado no mesmo padrão das outras etapas -->
    <h1>Dados Pessoais</h1>
    <p class="subtitulo-cinza">Informe os dados de contato do doador responsável pelo item</p>

    <!-- Etapa 1 -> VOLTAR leva ao Painel do Curador -->
    <FormDadosPessoais @proximo="proximo" @voltar="router.push({ name: 'dashboard' })" />
  </div>
</template>
