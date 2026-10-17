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
const dadosDoador = [
    { label: "Nome", value: "Isabela Oliveira" },
    { label: "CPF", value: "123.456.789-00" },
    { label: "Telefone", value: "(14) 99000-1234" },
    { label: "E-mail", value: "isabela@email.com" },
    { label: "Endereço", value: "Rua das Flores, 123 - Centro - Marília/SP" }
]
</script>

<template>
    <div>
        <div class="card-doador mb-4">
            <h2>Dados do Doador</h2>
            <div class="card p-3 rounded-0">
                <ul class="navbar-nav">
                    <li
                        v-for="dado in dadosDoador"
                        :key="dado.label"
                        class="mb-2"
                    >
                        <strong>{{ dado.label }}:</strong> <span>{{ dado.value }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-color: var(--bs-primary) !important;
}

li {
    display: flex;
    align-items: flex-start;
}

strong {
    width: 100%;
    max-width: 100px;
    color: var(--bs-primary) !important;
}
</style>