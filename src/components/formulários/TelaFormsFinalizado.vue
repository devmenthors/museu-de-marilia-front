<template>
  <div class="formulario-registro centralizado">

    <div class="box-icone-sucesso">✓</div>

    <h2 class="titulo-sucesso">Solicitação enviada</h2>
    <span class="aviso-campo text-center">Sua solicitação foi registrada com sucesso.</span>

    <div class="grupo-campo bloco-protocolo">
      <label class="label-laranja text-center">Nº DO PROTOCOLO</label>
      <div class="caixa-protocolo">
        <span class="num-protocolo">000001</span>
        <span class="status-tag">Registrado</span>
      </div>
    </div>

    <span class="aviso-campo text-center">Uma confirmação foi enviada para o e-mail informado.</span>

    <div class="grupo-botoes full-width">
      <button type="button" class="btn btn-cancelar-laranja flex-btn" @click="home">VOLTAR PARA O INÍCIO</button>
      <button type="button" class="btn btn-confirmar-laranja flex-btn" @click="verTermo">VISUALIZAR TERMO</button>
    </div>

  </div>
</template>

<script setup>
const emit = defineEmits(['home', 'verTermo'])
const home = () => emit('home')
const verTermo = () => emit('verTermo')
</script>

<style scoped>
.formulario-registro.centralizado {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
}

.box-icone-sucesso {
  width: 44px;
  height: 44px;
  background-color: #B53C02;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.titulo-sucesso {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #4A2312;
}

.bloco-protocolo {
  align-items: center;
}

.caixa-protocolo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  background: white;
}

.num-protocolo {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #4A2312;
}

.status-tag {
  font-size: 11px;
  background: #FFF5F0;
  color: #B53C02;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.text-center { text-align: center; }
.full-width { width: 100%; }

.grupo-botoes .flex-btn {
  flex: 1;
}

.label-laranja {
  font-size: 11px;
  font-weight: bold;
  color: #B53C02;
  letter-spacing: 0.5px;
}

.aviso-campo {
  font-size: 14px;
  color: #8c8c8c;
}

.grupo-botoes {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
}

.btn-cancelar-laranja, .btn-confirmar-laranja {
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.btn-cancelar-laranja {
  background-color: transparent;
  border: 1px solid #B53C02;
  color: #B53C02;
}

.btn-confirmar-laranja {
  background-color: #B53C02;
  border: 1px solid #B53C02;
  color: #ffffff;
}
</style>
