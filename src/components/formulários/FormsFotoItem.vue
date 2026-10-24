<template>
  <form class="formulario-registro" @submit.prevent="finalizar">

    <div class="grupo-campo">
      <label class="label-laranja">ADICIONE 5 FOTOGRAFIAS DO ITEM OFERECIDO</label>

      <div class="grid-arquivos-fotos">
        <div v-for="(foto, index) in 5" :key="index" class="box-upload-foto">
          <label class="area-clique-foto">
            <input type="file" class="input-file-oculto" accept="image/*" @change="handleUpload($event, index)">
            <div class="placeholder-foto" v-if="!listaFotos[index]">
              <span class="sinal-mais">+</span>
              <span class="texto-upload">Adicionar foto</span>
            </div>
            <div class="preview-foto" v-else>
              <img :src="listaFotos[index].preview" alt="Preview">
              <button type="button" class="btn-deletar-foto" @click.prevent="removerFoto(index)">x</button>
            </div>
          </label>
        </div>
      </div>

      <span class="aviso-campo">0/5 de imagens selecionadas</span>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja" @click="voltar">VOLTAR</button>
      <button type="submit" class="btn btn-confirmar-laranja">FINALIZAR</button>
    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['finalizar', 'voltar'])
const listaFotos = ref([null, null, null, null, null])

const handleUpload = (e, index) => {
  const file = e.target.files[0]
  if (file) {
    listaFotos.value[index] = { file, preview: URL.createObjectURL(file) }
  }
}

const removerFoto = (index) => {
  listaFotos.value[index] = null
}

const finalizar = () => emit('finalizar', listaFotos.value)
const voltar = () => emit('voltar')
</script>

<style scoped>
.formulario-registro {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-laranja {
  font-size: 11px;
  font-weight: bold;
  color: #B53C02;
  letter-spacing: 0.5px;
}

.grid-arquivos-fotos {
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: stroke;
}

.box-upload-foto {
  flex: 1;
  aspect-ratio: 1 / 1;
}

.area-clique-foto {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px dashed #B53C02;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  position: relative;
}

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
  object-fit: cover;
  border-radius: 4px;
}

.btn-deletar-foto {
  position: absolute;
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
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 4px;
}

.grupo-botoes {
  display: flex;
  justify-content: flex-end;
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
