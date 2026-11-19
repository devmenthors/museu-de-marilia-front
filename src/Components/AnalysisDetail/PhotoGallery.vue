<script setup>
/*
const itemInfo = ref([]);
async function getItemInfo(id) {
    try {
        const response = await getInformationItem(id)
        iteminfo.value = response.data
        notify.success(menssage)
    } catch (err) {
        console.error(err.response?.data)
    }
}
*/

// Trazido de composables/useAnalysisData para teste
const photos = [
    { id: 1, url: "" },
    { id: 2, url: "" },
    { id: 3, url: "" },
    { id: 4, url: "" },
    { id: 5, url: "" }
]
</script>

<template>
    <div>
        <div class="container-image">
            <h2>Fotos do Item</h2>
            <div class="row gap-2 justify-content-between">
                <div v-for="photo in photos" :key="photo.id" class="image border">
                    <i class="ri-file-image-line"></i>
                    <p>Foto #{{ photo.id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-image .row {
    padding-left: 12px;
}

.image {
    width: 100%;
    height: 192px;
    max-width: 192px;
    border-color: var(--bs-primary) !important;
    color: var(--bs-primary) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image p {
    color: var(--bs-primary);
}
</style>