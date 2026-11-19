<template>
  <!-- Sem "novalidate": o próprio navegador bloqueia o envio se algum campo obrigatório estiver inválido -->
  <form class="formulario-registro" @submit.prevent="proximo">

    <div class="grupo-campo">
      <label class="label-laranja" for="nomeCompleto">NOME COMPLETO</label>
      <!-- maxlength limita o tamanho; autocomplete deixa o navegador sugerir os dados -->
      <input id="nomeCompleto" type="text" class="campo-laranja" v-model.trim="dados.nomeCompleto"
        placeholder="Digite seu nome completo" maxlength="120" autocomplete="name" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="cpf">CPF</label>
      <!-- inputmode="numeric" abre o teclado numérico no celular -->
      <input id="cpf" type="text" class="campo-laranja" v-model.trim="dados.cpf" placeholder="000.000.000-00"
        maxlength="14" inputmode="numeric" required>
      <!-- Só aparece quando o CPF não passa na conta dos dígitos verificadores -->
      <span v-if="erroCpf" class="erro-campo">{{ erroCpf }}</span>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="email">E-MAIL</label>
      <!-- type="email" (antes era "text") faz o navegador validar o formato do e-mail -->
      <input id="email" type="email" class="campo-laranja" v-model.trim="dados.email" placeholder="nome@exemplo.com"
        maxlength="120" autocomplete="email" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="telefone">TELEFONE</label>
      <!-- pattern aceita (00) 00000-0000, (00) 0000-0000 ou só números -->
      <input id="telefone" type="tel" class="campo-laranja" v-model.trim="dados.telefone" placeholder="(00) 00000-0000"
        maxlength="15" pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}" title="Informe DDD + número, ex.: (14) 99000-1234"
        autocomplete="tel" required>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja" for="endereco">ENDEREÇO</label>
      <input id="endereco" type="text" class="campo-laranja" v-model.trim="dados.endereco"
        placeholder="Digite seu endereço completo" maxlength="200" autocomplete="street-address" required>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="voltar">VOLTAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">PRÓXIMO</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useDoacao } from '@/Composables/useDoacao'

const emit = defineEmits(['proximo', 'voltar'])
const { estadoDoacao } = useDoacao()

// Começa com o que já foi digitado antes (se a pessoa voltou de outra etapa)
// O "..." cria uma cópia: assim só gravamos no estado compartilhado ao clicar em PRÓXIMO
const dados = ref({ ...estadoDoacao.dadosPessoais })
const erroCpf = ref('')

// Confere os 2 dígitos verificadores do CPF (a regra oficial da Receita Federal)
function cpfValido(cpf) {
  const numeros = cpf.replace(/\D/g, '') // tira pontos e traço
  if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) return false // 11 dígitos e não pode ser tudo igual (111.111.111-11)

  // calcula um dígito verificador a partir dos "tamanho" primeiros números
  const calcularDigito = (tamanho) => {
    let soma = 0
    for (let i = 0; i < tamanho; i++) {
      soma += Number(numeros[i]) * (tamanho + 1 - i) // pesos decrescentes: 10, 9, 8... (ou 11, 10, 9...)
    }
    const resto = (soma * 10) % 11
    return resto === 10 ? 0 : resto
  }

  return calcularDigito(9) === Number(numeros[9]) && calcularDigito(10) === Number(numeros[10])
}

const proximo = () => {
  erroCpf.value = ''
  if (!cpfValido(dados.value.cpf)) {
    erroCpf.value = 'Informe um CPF válido.'
    return // não avança enquanto o CPF estiver errado
  }
  emit('proximo', { ...dados.value }) // envia uma cópia dos dados para a View
}
const voltar = () => emit('voltar')
</script>
