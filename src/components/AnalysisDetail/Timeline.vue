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
const timelineEvents = [
    { status: "Solicitação recebida", date: "15/03/2025", time: "14:32" },
    { status: "Em análise pelo curador", date: "18/03/2025", time: "10:15" }
]
</script>

<template>
    <div>
        <section class="container mb-5">
            <h2>Histórico da Solicitação</h2>
            <ul class="border py-3">
                <li v-for="event in timelineEvents" :key="event.status" class="mb-2">
                    <strong>{{ event.status }}</strong> - {{ event.date }} às {{ event.time }}
                </li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
ul.border {
    border-color: var(--bs-primary) !important;
}

ul.border li::marker {
    color: var(--bs-secondary);
    font-size: 1.2rem;
}


ul.border strong {
    color: var(--bs-secondary) !important;
}
</style>