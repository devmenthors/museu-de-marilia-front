<script setup>
defineProps({
    event: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <section class="container mb-5">
            <h2>Histórico da Solicitação</h2>
            <ul class="border py-3">
                <li v-for="(event, index) in event" :key="index" class="mb-2">
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