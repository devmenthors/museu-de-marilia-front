<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

import { useAnalysisData } from "../../composables/useAnalysisData"
import DonorCard from "./DonorCard.vue"
import ItemInfo from "./ItemInfo.vue"
import PhotoGallery from "./PhotoGallery.vue"
import Timeline from "./Timeline.vue"
import ActionButtons from "./ActionButtons.vue"
import Modal from "./Modal.vue"

const route = useRoute()
const router = useRouter()
const showForwardModal = ref(false)

const {
    loading,
    fetchAnalysisData,
    getScreenData
} = useAnalysisData()

const statusMap = {
    "Incorporar": "incorporation",
    "Não Incorporar": "rejected",
    "Encaminhar": "forwarded"
}

onMounted(() => {
    fetchAnalysisData(route.query.status || "analysis")
})

const handleAction = async (actionName) => {
    if (["Cancelar", "Cancelar Análise", "Voltar"].includes(actionName)) {
        router.back()
        return
    }

    if (actionName === "Confirmar Encaminhamento") {
        showForwardModal.value = true
        return
    }

    if (statusMap[actionName]) {
        await fetchAnalysisData(statusMap[actionName])
    }

}

async function handleIncorporation(){
    showForwardModal.value = false
    await fetchAnalysisData("incorporation")
}

async function handleReject(){
    showForwardModal.value = false
    await fetchAnalysisData("rejected")
}

function confirmForwarding() {
    showForwardModal.value = false
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

        <Timeline />
        <ActionButtons :buttons="getScreenData.buttons" :primary-button="getScreenData.primaryButton"
            @action="handleAction" />

        <Modal 
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