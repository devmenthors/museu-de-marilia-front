<template>
    <div>
        <div class="py-4">
            <h1>Painel de Controle</h1>
            <p>Monitore e gerencie novas propostas de doações de acervo paleontológico.</p>
        </div>
        <div class="row gap-3 mb-5 px-2">
            <div class="col">
                <p>Total de Solicitações</p>
                <span>24</span>
            </div>
            <div class="col">
                <p>Pendentes</p>
                <span>12</span>
            </div>
            <div class="col">
                <p>Incorporadas</p>
                <span>8</span>
            </div>
            <div class="col">
                <p>Não Incorporadas</p>
                <span>4</span>
            </div>
            <div class="col">
                <p>Encaminhados</p>
                <span>4</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col {
    border: 1px solid  var(--bs-secondary);
    background-color: #F7F1E8;
    padding: 15px ;
}

.col p{
    font-size: 14px;
    text-transform: uppercase;
    color: var(--bs-secondary);
    margin: 0;
    font-weight: 600;
}

.col span{
    font-size: 32px;
    color: var(--bs-primary);
    font-weight: 600;

}
</style>