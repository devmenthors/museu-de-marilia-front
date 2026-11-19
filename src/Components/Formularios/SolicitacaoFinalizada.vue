<template>
  <div class="formulario-registro centralizado">

    <!-- aria-hidden: o "✓" é só decorativo, o texto abaixo já diz que deu certo -->
    <div class="box-icone-sucesso" aria-hidden="true">✓</div>

    <!-- div com role="heading" em vez de <h2>: o h2 global fica em maiúsculas/14px/laranja com !important
         e mudaria o visual original deste título -->
    <div class="titulo-sucesso" role="heading" aria-level="2">Solicitação enviada</div>
    <span class="aviso-campo text-center">Sua solicitação foi registrada com sucesso.</span>

    <div class="grupo-campo bloco-protocolo">
      <span class="label-laranja text-center">Nº DO PROTOCOLO</span>
      <div class="caixa-protocolo">
        <!-- Protocolo agora vem por prop (quando a API existir, será o número gerado por ela) -->
        <span class="num-protocolo">{{ protocolo }}</span>
        <span class="status-tag">Registrado</span>
      </div>
    </div>

    <span class="aviso-campo text-center">Uma confirmação foi enviada para o e-mail informado.</span>

    <div class="grupo-botoes full-width">
      <button type="button" class="btn btn-cancelar-laranja flex-btn" @click="home">VOLTAR PARA O INÍCIO</button>
      <!-- A tela do termo de doação ainda não existe; o botão fica desabilitado até ela ser criada -->
      <button type="button" class="btn btn-confirmar-laranja flex-btn" @click="verTermo" disabled
        title="O termo de doação ainda não está disponível">VISUALIZAR TERMO</button>
    </div>

  </div>
</template>

<script setup>
defineProps({
  protocolo: {
    type: String,
    default: '000001',
  },
})

const emit = defineEmits(['home', 'verTermo'])
const home = () => emit('home')
const verTermo = () => emit('verTermo')
</script>

<style scoped>
.formulario-registro.centralizado {
  width: 100%;
  max-width: 500px;
  margin: 0 auto; /* centraliza o bloco na horizontal */
  align-items: center; /* centraliza os itens da coluna (flex-direction: column) */
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
  flex: 1; /* os dois botões dividem a largura igualmente */
}

.aviso-campo {
  font-size: 14px; /* nesta tela o aviso é um pouco maior que o padrão (12px) */
}

.grupo-botoes {
  justify-content: space-between;
}
</style>
