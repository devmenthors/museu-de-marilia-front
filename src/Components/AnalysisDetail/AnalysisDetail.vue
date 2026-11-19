<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

import { useAnalysisData } from "@/Composables/useAnalysisData"
import DonorCard from "./DonorCard.vue"
import ItemInfo from "./ItemInfo.vue"
import PhotoGallery from "./PhotoGallery.vue"
import RequestTimeline from "./RequestTimeline.vue"
import ActionButtons from "./ActionButtons.vue"
import ForwardModal from "./ForwardModal.vue"

const route = useRoute()
const router = useRouter()
const showForwardModal = ref(false)

const {
    loading,
    fetchAnalysisData,
    getScreenData
} = useAnalysisData()

// Cada botão de decisão agora abre o formulário correspondente (telas que vieram do projeto "d").
// Ao confirmar o formulário, ele volta para esta tela já com o novo status.
const formMap = {
    "Incorporar": "aprovarIncorporacao",
    "Não Incorporar": "justificarIncorporacao",
    "Encaminhar": "encaminharIncorporacao"
}

onMounted(() => {
    fetchAnalysisData(route.query.status || "analysis") // o status é validado dentro do composable
})

// Abre um dos formulários mantendo o mesmo protocolo (id) da URL
function openForm(routeName) {
    router.push({ name: routeName, params: { id: route.params.id } })
}

const handleAction = async (actionName) => {
    if (["Cancelar", "Cancelar Análise", "Voltar"].includes(actionName)) {
        router.push({ name: "dashboard" }) // antes era router.back(), que saía do sistema se a página fosse aberta direto pelo link
        return
    }

    if (actionName === "Confirmar Encaminhamento") {
        showForwardModal.value = true
        return
    }

    if (formMap[actionName]) {
        openForm(formMap[actionName])
    }

}

// Botões do modal "Confirmar Encaminhamento"
function handleIncorporation(){
    showForwardModal.value = false
    openForm("aprovarIncorporacao")
}

function handleReject(){
    showForwardModal.value = false
    openForm("justificarIncorporacao")
}
</script>

<template>
    <div v-if="!loading">
        <h1>{{ getScreenData.title }} #{{ route.params.id }}</h1>
        <p>
            Enviada em 15 de Março de 2025 às 14:32
        </p>
        <section class="row mb-5">
            <div class="col-md-7">
                <DonorCard />
                <ItemInfo />
            </div>
            <div class="col-md-5 d-flex flex-column align-items-end">
                <PhotoGallery />
            </div>
        </section>

        <RequestTimeline />
        <ActionButtons :buttons="getScreenData.buttons" :primary-button="getScreenData.primaryButton"
            @action="handleAction" />

        <ForwardModal 
            :show="showForwardModal" title="Confirmar Encaminhamento"
            message="Para onde deseja encaminhar esta doação?" 
            confirm-text="Confirmar Encaminhamento"
            @incorporate="handleIncorporation" 
            @reject="handleReject" 
            @cancel="showForwardModal = false" />

    </div>

    <div v-else class="text-center py-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    </div>
</template>
