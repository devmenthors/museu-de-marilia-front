<script setup>
defineProps({
    photos: {
        type: Array,
        default: () => [1, 2, 3, 4, 5]
    }
})
</script>

<template>
    <div>
        <div class="container-image">
            <h2>Fotos do Item</h2>
            <div class="row gap-2 justify-content-between">
                <div v-for="photo in photos" :key="photo" class="image border">
                    <i class="ri-file-image-line"></i>
                    <p>Foto #{{ photo }}</p>
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