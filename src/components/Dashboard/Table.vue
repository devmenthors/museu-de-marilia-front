<script setup>
const donations = [
    { id: '000012', donor: 'Maria Oliveira', date: '15/03/2025', type: 'Item Único', status: 'Incorporado', statusParam: 'incorporation' },
    { id: '000011', donor: 'Carlos Eduardo Santos', date: '14/03/2025', type: 'Coleção', status: 'Em Análise', statusParam: 'analysis' },
    { id: '000010', donor: 'Roberto de Souza', date: '10/03/2025', type: 'Item Único', status: 'Analisado', statusParam: 'analysis' },
    { id: '000009', donor: 'Juliana Andrade', date: '08/03/2025', type: 'Coleção', status: 'Não Incorporada', statusParam: 'rejected' },
    { id: '000008', donor: 'Fernando Costa Prado', date: '05/03/2025', type: 'Item Único', status: 'Encaminhado', statusParam: 'forwarded' }
]
</script>

<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Protocolo</th>
                    <th scope="col">Doador</th>
                    <th scope="col">Data de Envio</th>
                    <th scope="col">Tipo de Acervo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="donation in donations" :key="donation.id">
                    <th scope="row">#{{ donation.id }}</th>
                    <th scope="row">{{ donation.donor }}</th>
                    <th scope="row">{{ donation.date }}</th>
                    <th scope="row">{{ donation.type }}</th>
                    <th scope="row">{{ donation.status }}</th>
                    <td>
                        <RouterLink 
                            :to="`/analysis/${donation.id}?status=${donation.statusParam}`"
                            class="action-link"
                        >
                            Ver Detalhes
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.action-link {
    color: var(--bs-secondary);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 550;
}

thead {
    background-color: red !important;
}

thead th {
    text-transform: uppercase;
    font-weight: 500;
    color: var(--bs-secondary);
}
</style>