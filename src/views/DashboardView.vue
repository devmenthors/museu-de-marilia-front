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
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Incorporado</th>
                        <td><a href="thRef">Ver Detalhes</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Em Análise</th>
                        <td><a href="">Ver Detalhes</a></td>

                    </tr>
                    <tr>
                        <th scope="row">Analisado</th>
                        <td><a href="">Ver Detalhes</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Não Incoporado</th>
                        <td><a href="tdRef">Ver Detalhes</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Encaminhado</th>
                        <td><a href="">Ver Detalhes</a></td>
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
a {
    color: var(--bs-secondary);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 550;
}
</style>