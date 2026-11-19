<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { iniciarSessao, caminhoInternoSeguro } from "@/Services/autenticacao";

const router = useRouter()
const route = useRoute()

const identificador = ref('')
const senha = ref('')

const erros = ref({
    identificador: '',
    senha: ''
})

function validarForm() {
    erros.value.identificador = ''
    erros.value.senha = ''

    const valor = identificador.value.trim()
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
    const cpfValido = /^\d{11}$/.test(valor.replace(/\D/g, ''))

    if (!valor) {
        erros.value.identificador = "Informe seu e-mail ou CPF."
    } else if (!emailValido && !cpfValido) {
        erros.value.identificador = "Informe um e-mail ou CPF válido."
    }

    if (!senha.value) {
        erros.value.senha = 'Informe sua senha.'
    } else if (senha.value.length < 6) {
        erros.value.senha = 'A senha deve ter pelo menos 6 caracteres.'
    }

    if (erros.value.identificador || erros.value.senha) {    
        return
    }

    // Quando a API existir: POST /api/login enviando { identificador, senha } por HTTPS
    // e só chamar iniciarSessao() se a API responder que as credenciais estão corretas.
    iniciarSessao()

    senha.value = '' // tira a senha da memória assim que ela não é mais necessária

    // Se a pessoa foi mandada para o login vindo de outra tela, volta para ela.
    // caminhoInternoSeguro impede que um link malicioso use ?redirect= para levar a um site externo.
    const destino = route.query.redirect
    if (caminhoInternoSeguro(destino)) {
        router.push(destino)
    } else {
        router.push({ name: "dashboard" })
    }
}
</script>

<template>
    <div>
        <section class="container d-flex align-items-center justify-content-center">
            <!-- novalidate: a validação é feita pelo validarForm, com as mensagens do próprio sistema -->
            <form @submit.prevent="validarForm" class="col-md-5 p-4" novalidate>
                <h1 class="text-center">Acesso ao Sistema</h1>
                <p class="text-center">Entre com suas credenciais para acessar o sistema</p>
                <div class="mb-3">
                    <label for="emailCpf" class="form-label">E-mail ou CPF</label>
                    <!-- maxlength limita o tamanho do que é digitado; autocomplete ajuda o gerenciador de senhas -->
                    <input 
                        v-model="identificador"
                        type="text" 
                        name="emailCpf" 
                        id="emailCpf" 
                        class="form-control" 
                        placeholder="Digite seu e-mail ou CPF"
                        maxlength="120"
                        autocomplete="username"
                        :class="{'is-invalid': erros.identificador}"
                        >
                        <div class="invalid-feedback">
                            {{ erros.identificador }}
                        </div>
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Senha</label>
                    <input 
                        v-model="senha"
                        type="password"
                        name="password" 
                        id="password" 
                        class="form-control" 
                        placeholder="Digite sua senha"
                        maxlength="128"
                        autocomplete="current-password"
                        :class="{ 'is-invalid': erros.senha }"
                        >
                    <div class="invalid-feedback">
                        {{ erros.senha }}
                    </div>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <!-- Ainda não existe tela de recuperação de senha; .prevent evita pular para o topo -->
                    <a href="#" class="text-muted" @click.prevent>Esqueceu sua senha?</a>
                </div>
                <div>
                    <button class="btn btn-primary" type="submit">Entrar no Sistema</button>     
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
