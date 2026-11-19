<template>
  <form class="formulario-registro" @submit.prevent="finalizar">

    <div class="grupo-campo">
      <span class="label-laranja">ADICIONE 5 FOTOGRAFIAS DO ITEM OFERECIDO</span>

      <div class="grid-arquivos-fotos">
        <!-- v-for="index in 5" gera os 5 quadrados; index começa em 0 -->
        <div v-for="(foto, index) in 5" :key="index" class="box-upload-foto">
          <label class="area-clique-foto">
            <!-- accept limita o seletor de arquivos aos formatos permitidos (a checagem real está no handleUpload) -->
            <input type="file" class="input-file-oculto" :accept="tiposPermitidos.join(',')"
              :aria-label="`Adicionar foto ${index + 1}`" @change="handleUpload($event, index)">
            <div class="placeholder-foto" v-if="!listaFotos[index]">
              <span class="sinal-mais">+</span>
              <span class="texto-upload">Adicionar foto</span>
            </div>
            <div class="preview-foto" v-else>
              <img :src="listaFotos[index].preview" :alt="`Foto ${index + 1} do item`">
              <!-- .prevent evita que o clique no "x" também abra o seletor de arquivos do label -->
              <button type="button" class="btn-deletar-foto" :aria-label="`Remover foto ${index + 1}`"
                @click.prevent="removerFoto(index)">x</button>
            </div>
          </label>
        </div>
      </div>

      <!-- Antes o contador era fixo em "0/5"; agora mostra a quantidade real -->
      <span class="aviso-campo">{{ quantidadeFotos }}/5 de imagens selecionadas</span>
      <span v-if="erroFoto" class="erro-campo" role="alert">{{ erroFoto }}</span>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="voltar">VOLTAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">FINALIZAR</button>
    </div>

  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDoacao } from '@/Composables/useDoacao'

const emit = defineEmits(['finalizar', 'voltar'])
const { estadoDoacao } = useDoacao()

// As fotos ficam direto no estado compartilhado: se a pessoa voltar para a etapa 2 e depois
// avançar de novo, as fotos escolhidas continuam lá
const listaFotos = computed(() => estadoDoacao.fotos)
const quantidadeFotos = computed(() => listaFotos.value.filter(Boolean).length) // conta só as posições preenchidas
const erroFoto = ref('')

// ===== Regras de segurança do upload =====
const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'] // só imagens comuns (SVG fica de fora: pode conter script)
const tamanhoMaximoMb = 5
const tamanhoMaximoBytes = tamanhoMaximoMb * 1024 * 1024 // 5 MB em bytes

const handleUpload = (e, index) => {
  erroFoto.value = ''
  const file = e.target.files[0]
  e.target.value = '' // limpa o input para permitir escolher o mesmo arquivo de novo depois
  if (!file) return

  // Confere o tipo real informado pelo navegador (o "accept" do input pode ser burlado)
  if (!tiposPermitidos.includes(file.type)) {
    erroFoto.value = 'Formato não permitido. Envie fotos JPG, PNG ou WEBP.'
    return
  }
  if (file.size > tamanhoMaximoBytes) {
    erroFoto.value = `Cada foto pode ter no máximo ${tamanhoMaximoMb} MB.`
    return
  }
  // Obs.: a API também PRECISA validar tipo e tamanho; a checagem no navegador é só para ajudar o usuário

  removerFoto(index) // se já havia uma foto nessa posição, libera a anterior da memória
  // createObjectURL gera um endereço temporário (blob:) para mostrar a prévia sem enviar nada ainda
  estadoDoacao.fotos[index] = { file, preview: URL.createObjectURL(file) }
}

const removerFoto = (index) => {
  const fotoAtual = estadoDoacao.fotos[index]
  if (fotoAtual) URL.revokeObjectURL(fotoAtual.preview) // libera a memória usada pela prévia
  estadoDoacao.fotos[index] = null
}

const finalizar = () => {
  // O cadastro exige 5 fotografias (regra do README do projeto)
  if (quantidadeFotos.value < 5) {
    erroFoto.value = 'Adicione as 5 fotografias do item para finalizar.'
    return
  }
  emit('finalizar', listaFotos.value)
}
const voltar = () => emit('voltar')
</script>

<style scoped>
/* Os 5 quadrados lado a lado, dividindo a largura igualmente */
.grid-arquivos-fotos {
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: stretch; /* antes estava "stroke" (valor inválido, o navegador ignorava) */
}

.box-upload-foto {
  flex: 1;
  aspect-ratio: 1 / 1; /* mantém cada caixa quadrada, seja qual for a largura */
}

.area-clique-foto {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px dashed #B53C02;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  position: relative; /* referência para o botão "x" (position: absolute) ficar no canto desta caixa */
}

/* O input de arquivo fica escondido: quem abre o seletor é o clique no label inteiro */
.input-file-oculto {
  display: none;
}

.placeholder-foto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: 'Inter', sans-serif;
  color: #8c8c8c;
}

.sinal-mais {
  font-size: 20px;
}

.texto-upload {
  font-size: 12px;
  margin-top: 4px;
}

.preview-foto, .preview-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* preenche o quadrado cortando as sobras, sem distorcer a foto */
  border-radius: 4px;
}

.btn-deletar-foto {
  position: absolute; /* fica "flutuando" no canto superior direito da caixa */
  top: 4px;
  right: 4px;
  background: #B53C02;
  color: white;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  cursor: pointer;
}

.aviso-campo {
  margin-top: 4px;
}
</style>
