<script setup>
import { RouterLink } from "vue-router";
import { donationsList } from "../composables/donationList";
</script>


<template>
    <div>
        <div class="text-center py-4">
            <h1>Aqui será a tela do Dashboard</h1>
            <p>Tela criada para testar os botões de ações que levam para as telas de análises.</p>
        </div>
        <div class="container-sm">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="donation in donationsList" :key="donation.id">
                        <th scope="row">{{ donation.id }}</th>
                        <th scope="row">{{ donation.status }}</th>
                        <td>
                            <RouterLink 
                                :to="`/analysis/${donation.id}?status=${donation.statusParam}`"
                                class="action-link"
                            >Ver Detalhes</RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container-sm {
    max-width: 750px;
}
.action-link {
    color: var(--bs-secondary);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 550;
}
</style>