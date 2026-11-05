<template>
    <div>
        <div class="filters-container">
            <div class="row g-3">
                <div class="col-12 col-md-6">
                    <input type="text" name="search" id="search" class="form-control"
                        placeholder="⌕ Buscar por protocolo ou doador">
                </div>
                <div class="col-12 col-md-3">
                    <select name="status" id="status" class="form-select">
                        <option value="todos">Todos os status</option>
                        <option value="analise">Em análise</option>
                        <option value="aguardando">Aguardando documentação</option>
                        <option value="aprovado">Aprovadas</option>
                        <option value="nao-incorporado">Não incorporadas</option>
                        <option value="encaminhado">Encaminhadas</option>
                    </select>
                </div>
                <div class="col-12 col-md-3">
                    <select name="periodo" id="periodo" class="form-select">
                        <option value="7">Últimos 7 dias</option>
                        <option value="30">Últimos 30 dias</option>
                        <option value="90">Últimos 90 dias</option>
                        <option value="todos">Todo o período</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filters-container {
    border: 1px solid var(--bs-secondary);
    padding: 12px;
    margin-bottom: 24px;
}

.form-control,
.form-select {
    border: 1px solid var(--bs-secondary);
    border-radius: 0;
    font-size: 13px;
    height: 38px;
    box-shadow: none;
}

.form-control:focus,
.form-select:focus {
    border-color: var(--bs-primary);
    box-shadow: none;
}

.form-select:hover {
    cursor: pointer;
}
</style>
