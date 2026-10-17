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
const itemData = [
    {
        label: "Tipo de Acervo",
        value: "Item Único"
    },
    {
        label: "Histórico e Procedência",
        value: "Fóssil encontrado em escavação na região de Marília em 1998, sob sedimentos da Formação Marília (Grupo Bauru). Provável fragmento de carapaça de dinossauro saurópode. Preservado desde então em ambiente seco."
    },
    {
        label: "Justificativa da Doação",
        value: "Desejo contribuir para o acervo paleontológico do município, possibilitando que estudantes, pesquisadores e o público em geral tenham acesso científico ao material de forma pública e protegida."
    }
]
</script>

<template>
    <div>
        <div class="card-item">
            <h2>Informações do Item</h2>
            <div class="card p-3 rounded-0">
                <div
                    v-for="data in itemData"
                    :key="data.label"
                    class="item-text"
                >
                    <h3 class="mb-0">{{ data.label }}</h3>
                    <p>{{ data.value }}</p>
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