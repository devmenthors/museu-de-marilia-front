<script setup></script>

<template>
    <div>
        <section class="container d-flex align-items-center justify-content-center">
            <form action="" class="col-md-5 p-4">
                <h1 class="text-center">Acesso ao Sistema</h1>
                <p class="text-center">Entre com suas credenciais para acessar o sistema</p>
                <div class="mb-3">
                    <label for="email-cpf" class="form-label">E-mail ou CPF</label>
                    <input type="text" name="email-cpf" id="email-cpf" class="form-control" placeholder="Digite seu e-mail ou CPF">
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Senha</label>
                    <input name="password" id="password" class="form-control" placeholder="Digite seu senha">
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <a href="#" class="text-muted">Esqueceu sua senha?</a>
                </div>
                <div>
                    <button class="btn btn-primary" type="button">Entrar no Sistema</button>     
                </div>
            </form>
        </section>
    </div>
</template>

<style scoped>
section {
    min-height: 75vh;
}
.form-label {
    color: var(--bs-secondary) !important;
    font-weight: 550;
}
</style>