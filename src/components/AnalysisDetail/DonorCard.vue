<script setup>
defineProps({
    donor: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="card-doador mb-4">
            <h2>Dados do Doador</h2>
            <div class="card p-3 rounded-0">
                <ul class="navbar-nav">
                    <li class="mb-2">
                        <strong>Nome:</strong>
                        <span>{{ donor.name }}</span>
                    </li>
                    <li class="mb-2">
                        <strong>CPF:</strong>
                        <span>{{ donor.cpf }}</span>
                    </li>
                    <li class="mb-2">
                        <strong>Telefone:</strong>
                        <span>{{ donor.phone }}</span>
                    </li>
                    <li class="mb-2">
                        <strong>E-mail:</strong>
                        <span>{{ donor.email }}</span>
                    </li>
                    <li>
                        <strong>Endereço:</strong>
                        <span>{{ donor.address }}</span>
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