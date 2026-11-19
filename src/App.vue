<script setup>
// Cabeçalho e rodapé únicos, usados em todas as telas do sistema
import AppNavbar from './Components/Layout/AppNavbar.vue'
import AppFooter from './Components/Layout/AppFooter.vue'
</script>

<template>
  <AppNavbar />
  <!-- "container" do Bootstrap centraliza e limita a largura de todas as páginas do mesmo jeito -->
  <main class="container my-4">
    <!-- Aqui o vue-router desenha a tela da rota atual -->
    <RouterView />
  </main>
  <AppFooter />
</template>
