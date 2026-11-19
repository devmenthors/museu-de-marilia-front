<script setup>
import DashboardCards from './DashboardCards.vue';
import DashboardFilters from './DashboardFilters.vue';
</script>

<template>
    <div>
        <div class="py-4 container px-0 d-flex justify-content-between align-items-center">
            <div>
                <h1>Painel de Controle</h1>
                <p>Monitore e gerencie novas propostas de doações de acervo paleontológico.</p>
            </div>
            <!-- Antes o botão não levava a lugar nenhum; agora abre a etapa 1 do formulário de doação -->
            <RouterLink :to="{ name: 'doacaoDadosPessoais' }" class="btn btn-primary btn-sm">Formulário de Doação</RouterLink>
        </div>
        <DashboardCards />
        <DashboardFilters />
    </div>
</template>
