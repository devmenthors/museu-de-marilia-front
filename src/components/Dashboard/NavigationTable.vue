<template>
    <div>
        <div class="col-12 d-flex justify-content-between align-items-center mt-4">
            <p class="m-0">
                Exibindo 5 de 12 solicitações pendentes
            </p>
            <nav class="pagination-nav d-flex align-items-center gap-3" aria-label="Navegação de páginas">
                <button type="button" class="page-btn" disabled>← Anterior</button>
                <button type="button" class="page-btn page-number active">1</button>
                <button type="button" class="page-btn page-number">2</button>
                <button type="button" class="page-btn page-number">3</button>
                <button type="button" class="page-btn">Próximo →</button>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.page-btn {
    background: transparent;
    border: 1px solid var(--bs-secondary);
    border-radius: 0;
    color: var(--bs-secondary);
    font-size: 14px;
    height: 28px;
    padding: 0 12px;
    cursor: pointer;
}

.page-number {
    min-width: 28px;
    padding: 0 8px;
}

.page-btn.active {
    background-color: var(--bs-secondary);
    color: #fff;
}

.page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>