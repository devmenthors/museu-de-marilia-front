<script setup>
// Os dados de teste saíram daqui e foram para Services/solicitacoes.js,
// para que o "Resumo da Proposta" dos formulários use exatamente a mesma lista.
import { listaSolicitacoes } from '@/Services/solicitacoes';
import TableNavigation from './TableNavigation.vue';

const donations = listaSolicitacoes

// Decide qual "modo" a tela de análise abre em "Ver Detalhes"
// (solicitação em análise abre só para visualizar; as outras abrem no próprio status)
function statusDetalhes(donation) {
    return donation.status === 'Em Análise' ? 'viewAnalysis' : donation.statusParam
}
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
                        <th scope="col">Ações</th>
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
                                <!-- Rota pelo "name" + params/query: o vue-router monta e codifica a URL sozinho -->
                                <RouterLink
                                    :to="{ name: 'analysis', params: { id: donation.id }, query: { status: statusDetalhes(donation) } }"
                                    class="action-link">
                                    Ver Detalhes
                                </RouterLink>

                                <RouterLink 
                                    v-if="donation.status === 'Em Análise'"
                                    :to="{ name: 'analysis', params: { id: donation.id }, query: { status: 'analysis' } }"
                                    class="btn btn-primary btn-sm">
                                    Analisar
                                </RouterLink>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <TableNavigation />
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
    gap: 24px;
}
</style>
