<template>
  <main class="conteudo-container container-fluid">
    <div class="row">
      <div class="col-12 conteudo">

        <h2 class="titulo-laranja">Justificativa de Não Incorporação</h2>
        <h3 class="subtitulo-cinza">Forneça o parecer oficial justificando o motivo para o item não ser incorporado ao acervo do museu</h3>

        <div class="caixa-resumo-marrom">
          <p class="tag-resumo">RESUMO DA PROPOSTA</p>
          <h4 class="titulo-resumo">Protocolo: #000012 | Doador: Maria Oliveira</h4>
          <p class="texto-resumo">Item: Provável fragmento de carapaça de dinossauro saurópode (Formação Marília).</p>
        </div>

        <FormsJustificarView></FormsJustificarView>
      </div>
    </div>
  </main>
</template>

<script setup>
import FormsJustificarView from '@/components/formulários/FormsJustificarView.vue';

</script>

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

.caixa-resumo-marrom {
  background-color: #FAF4F0;
  border: 1px solid #5D372E;
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  max-width: 800px;
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
