<!-- Chamadas de API com componentes, se é possível fazer chamadas diferentes de API encima de um único componente, composable -->
<template>
    <div>
        <h1>Análise da Doação #000012</h1>
        <p>
            Enviada em 15 de Março de 2025 às 14:32
        </p>
        <section class="row mb-5">
            <div class="col-md-7">
                <div class="card-doador mb-4">
                    <h2>Dados do Doador</h2>
                    <div class="card p-3 rounded-0">
                        <ul class="navbar-nav">
                            <li class="mb-2">
                                <strong>Nome:</strong> 
                                <span>Isabela Oliveira</span>
                            </li>
                            <li class="mb-2">
                                <strong>CPF:</strong> 
                                <span>123.456.789-00</span>
                            </li>
                            <li class="mb-2">
                                <strong>Telefone:</strong> 
                                <span>(14) 99000-1234</span>
                            </li>
                            <li class="mb-2">
                                <strong>E-mail:</strong> 
                                <span>isabela@email.com</span>
                            </li>
                            <li>
                                <strong>Endereço:</strong> 
                                <span>Rua das Flores, 123 - Centro - Marília/SP</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-item">
                    <h2>Informações do Item</h2>
                    <div class="card p-3 rounded-0">
                        <div class="item-text">
                            <h3 class="mb-0">Tipo de Acervo</h3>
                            <p>Item único</p>
                        </div>
                        <div class="item-text">
                            <h3 class="mb-0">Histórico e Procedencia</h3>
                            <p>Fóssil encontrado em escavação na região de Marília em 1998, sob sedimentos da Formação
                                Marília (Grupo Bauru). Provável fragmento de carapaça de dinossauro saurópode. Preservado
                                desde então em ambiente seco.</p>
                        </div>
                        <div class="item-text">
                            <h3 class="mb-0">Justificativa da Doação</h3>
                            <p>Desejo contribuir para o acervo paleontológico do município, possibilitando que estudantes,
                                pesquisadores e o público em geral tenham acesso científico ao material de forma pública e
                                protegida.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 d-flex flex-column align-items-end">
                <div class="container-image">
                    <h2>Fotos do Item</h2>
                    <div class="row gap-2 justify-content-between">
                        <div class="image border">
                            <i class="ri-file-image-line"></i>
                            <p>Foto #1</p>
                        </div>
                        <div class="image border">
                            <i class="ri-file-image-line"></i>
                            <p>Foto #2</p>
                        </div>
                        <div class="image border">
                            <i class="ri-file-image-line"></i>
                            <p>Foto #3</p>
                        </div>
                        <div class="image border">
                            <i class="ri-file-image-line"></i>
                            <p>Foto #4</p>
                        </div>
                        <div class="image border">
                            <i class="ri-file-image-line"></i>
                            <p>Foto #5</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mb-5">
            <h2>Histórico da Solicitação</h2>
            <ul class="border py-3">
                <li class="mb-2">
                    <strong>Solitcitação recebida</strong> - 15/03/2025 às 14:32
                </li>
                <li>
                    <strong>Em análise pelo curador</strong> - 18/03/2025 às 10:15
                </li>
            </ul>
        </section>
        <section class="container d-flex justify-content-between">
            <button type="button" class="btn btn-secondary px-4">Cancelar Análise</button>
            <div class="buttons d-flex gap-3">
                <button type="button" class="btn btn-secondary px-4">Encaminhar</button>
                <button type="button" class="btn btn-secondary px-4">Não Incorporar</button>
                <button type="button" class="btn btn-primary px-5">Incorporar</button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.row .card,
ul.border {
    border-color: var(--bs-primary) !important;
}

ul.navbar-nav li {
    display: flex;
    align-items: flex-start;
}

ul.navbar-nav li strong {
    width: 100%;
    max-width: 100px;
}

ul.border li::marker {
    color: var(--bs-secondary);
    font-size: 1.2rem;
}

ul.border strong {
    color: var(--bs-secondary) !important;
}

.container-image .row {
    padding-left: 12px;
}

.image {
    width: 100%;
    height: 192px;
    max-width: 192px;
    border-color: var(--bs-primary) !important;
    color: var(--bs-primary) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image p {
    color: var(--bs-primary);
}


</style>
