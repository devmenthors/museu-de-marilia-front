<script setup>
const donations = [
    { id: '000012', donor: 'Maria Oliveira', date: '15/03/2025', type: 'Item Único', status: 'Incorporado', statusParam: 'incorporation' },
    { id: '000011', donor: 'Carlos Eduardo Santos', date: '14/03/2025', type: 'Coleção', status: 'Em Análise', statusParam: 'analysis' },
    { id: '000010', donor: 'Roberto de Souza', date: '10/03/2025', type: 'Item Único', status: 'Analisado', statusParam: 'analysis' },
    { id: '000009', donor: 'Juliana Andrade', date: '08/03/2025', type: 'Coleção', status: 'Não Incorporada', statusParam: 'rejected' },
    { id: '000008', donor: 'Fernando Costa Prado', date: '05/03/2025', type: 'Item Único', status: 'Encaminhado', statusParam: 'forwarded' }
]

import NavigationTable from './NavigationTable.vue';
</script>

<template>
    <div>
        <div class="container-sm p-0 mb-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Protocolo</th>
                        <th scope="col">Doador</th>
                        <th scope="col">Data de Envio</th>
                        <th scope="col">Tipo de Acervo</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="donation in donations" :key="donation.id">
                        <th scope="row" class="id-column">#{{ donation.id }}</th>
                        <th scope="row">{{ donation.donor }}</th>
                        <th scope="row">{{ donation.date }}</th>
                        <th scope="row">{{ donation.type }}</th>
                        <th scope="row" class="status-column">
                            <span>{{ donation.status }} </span>
                        </th>
                        <td>
                            <div class="actions-column">
                                <RouterLink :to="`/analysis/${donation.id}?status=${donation.statusParam}`"
                                    class="action-link">
                                    Ver Detalhes
                                </RouterLink>

                                <RouterLink v-if="donation.status === 'Em Análise'"
                                    :to="`/analysis/${donation.id}?status=${donation.statusParam}`"
                                    class="btn btn-primary btn-sm">
                                    Analisar
                                </RouterLink>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <NavigationTable />
        </div>
    </div>
</template>

<style scoped>

table th {
    color: var(--bs-secondary);
    font-size: 14px;
}

table tr {
    border-bottom: 1px solid var(--bs-secondary);
}

thead th {
    text-transform: uppercase;
    background-color: #F2F2F7;
    color: var(--bs-secondary);
    font-size: 12px;
    font-weight: 700;
}

.id-column {
    color: var(--bs-secondary);
    font-weight: 500;
}

.status-column span {
    border: 1px solid var(--bs-secondary);
    padding: 3px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    max-width: 125px;
}

.action-link {
    color: var(--bs-secondary);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 550;
}

.actions-column {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
}
</style>