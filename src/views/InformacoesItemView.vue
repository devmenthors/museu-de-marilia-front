<script setup>
import AppHeader from '@/views/AppHeader.vue'
import FormsItem from '@/components/formularios/FormsItem.vue' // Ajuste o nome do seu forms aqui se necessário
</script>

<template>
  <AppHeader></AppHeader>
  <main class="conteudo-container container-fluid">
    <div class="row">
      <div class="col-12 conteudo">

        <h2 class="titulo-laranja">Informações do Item</h2>
        <h3 class="subtitulo-cinza">Insira os dados técnicos e a procedência do item que está sendo submetido para incorporação</h3>

        <!-- Componente interno com o formulário da Etapa 2 -->
        <FormsItem></FormsItem>

      </div>
    </div>
  </main>
</template>

<style scoped>
.conteudo-container {
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
}
.conteudo {
  width: 100%;
  text-align: left;
  padding: 40px 0;
  margin-left: 160px;
  font-family: 'Inter', sans-serif;
}
.titulo-laranja {
  font-size: 32px;
  font-weight: 600;
  color: #B53C02;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}
.subtitulo-cinza {
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 40px;
  line-height: 1.2;
}
</style>
