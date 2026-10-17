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
    if (actionName === "Cancelar") {
        router.back()
        return
    }

    if (statusMap[actionName]) {
        await fetchAnalysisData(statusMap[actionName])
    }
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
        <ActionButtons :buttons="getScreenData.buttons" @action="handleAction" />
    </div>

    <div v-else class="text-center py-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    </div>
</template>