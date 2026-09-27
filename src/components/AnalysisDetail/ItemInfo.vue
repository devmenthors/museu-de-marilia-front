<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="card-item">
            <h2>Informações do Item</h2>
            <div class="card p-3 rounded-0">
                <div class="item-text">
                    <h3 class="mb-0">Tipo de Acervo</h3>
                    <p>{{ item.type }}</p>
                </div>
                <div class="item-text">
                    <h3 class="mb-0">Histórico e Procedencia</h3>
                    <p>{{ item.history }}</p>
                </div>
                <div class="item-text">
                    <h3 class="mb-0">Justificativa da Doação</h3>
                    <p>{{ item.justification }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-color: var(--bs-primary) !important;
}
</style>