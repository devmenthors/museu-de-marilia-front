<script setup>
import { ref } from 'vue'

const indicadores = ref([
    {
        titulo: 'Total de Solicitações',
        valor: 24
    },
    {
        titulo: 'Pendentes',
        valor: 12
    },
    {
        titulo: 'Incorporadas',
        valor: 8
    },
    {
        titulo: 'Não Incorporadas',
        valor: 4
    },
    {
        titulo: 'Encaminhados',
        valor: 4
    }
])

/* 
onMounted(async () => {
    const response = await fetch('/api/indicadores')

    indicadores.value = await response.json()
})
*/
</script>

<template>
    <div>
        <div class="row gap-3 mb-5 px-2">
            <div 
                v-for="(indicador, index) in indicadores" 
                :key="index" 
                class="col"
            >
                <p>{{ indicador.titulo }}</p>
                <span>{{ indicador.valor }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col {
    border: 1px solid var(--bs-secondary);
    background-color: #F7F1E8;
    padding: 15px;
}

.col p {
    font-size: 14px;
    text-transform: uppercase;
    color: var(--bs-secondary);
    margin: 0;
    font-weight: 600;
}

.col span {
    font-size: 32px;
    color: var(--bs-primary);
    font-weight: 600;

}
</style>