<script setup>
import Cards from './Cards.vue';
import Filters from './Filters.vue';
</script>

<template>
    <div>
        <div class="py-4 container px-0 d-flex justify-content-between align-items-center">
            <div>
                <h1>Painel de Controle</h1>
                <p>Monitore e gerencie novas propostas de doações de acervo paleontológico.</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm">Formulário de Doação</button>
        </div>
        <Cards />
        <Filters />
    </div>
</template>

