<script setup>
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

import { useAnalysisData } from "../../composables/useAnalysisData"
import DonorCard from "./DonorCard.vue"
import ItemInfo from "./ItemInfo.vue"
import PhotoGallery from "./PhotoGallery.vue"
import Timeline from "./Timeline.vue"
import ActionButtons from "./ActionButtons.vue"

const route = useRoute()
const router = useRouter()

const {
    currentStatus,
    loading,
    fetchAnalysisData,
    getScreenData,
    donorData,
    itemData,
    timeline
} = useAnalysisData()

onMounted(async () => {
    const status = route.query.status || "analysis"
    const donationId = route.params.id || "000012"

    await fetchAnalysisData(donationId, status)
})

const handleAction = async (actionName) => {
    console.log("Ação clicada: ", actionName)

    if (actionName.includes("Cancelar")) {
        router.back()
        return
    }

    const statusMap = {
        "Incorporar": "incorporation",
        "Não Incorporar": "rejected",
        "Encaminhar": "forwarded",
        "Analisar": "analysis"
    }

    if (statusMap[actionName]) {
        await fetchAnalysisData("000012", statusMap[actionName])
    }
}
</script>

<template>
    <div v-if="!loading">
        <h1>{{ getScreenData.title }}</h1>
        <p>
            Enviada em 15 de Março de 2025 às 14:32
        </p>
        <section class="row mb-5">
            <div class="col-md-7">
                <DonorCard :donor="donorData" />
                <ItemInfo :item="itemData" />
            </div>
            <div class="col-md-5 d-flex flex-column align-items-end">
                <PhotoGallery :photos="[1, 2, 3, 4, 5]" />
            </div>
        </section>

        <Timeline :event="timeline" />
        <ActionButtons :buttons="getScreenData.buttons" @action="handleAction" />
    </div>

    <div v-else class="text-center py-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    </div>
</template>