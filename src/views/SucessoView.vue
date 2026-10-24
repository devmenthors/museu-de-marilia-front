<script setup>
import AppHeader from '@/views/AppHeader.vue'
import FormsSucesso from '@/components/formularios/FormsSucesso.vue' // Ajuste o nome do seu forms aqui se necessário
</script>

<template>
  <AppHeader></AppHeader>
  <main class="conteudo-container container-fluid">
    <div class="row">
      <div class="col-12 conteudo centralizado">

       
        <FormsSucesso></FormsSucesso>

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
  padding: 40px 0;
  margin-left: 160px;
  font-family: 'Inter', sans-serif;
}

.centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
