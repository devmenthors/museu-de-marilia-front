<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

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

    router.push({name: "dashboard"})
}
</script>

<template>
    <div>
        <section class="container d-flex align-items-center justify-content-center">
            <form  @submit.prevent="validarForm" class="col-md-5 p-4">
                <h1 class="text-center">Acesso ao Sistema</h1>
                <p class="text-center">Entre com suas credenciais para acessar o sistema</p>
                <div class="mb-3">
                    <label for="email-cpf" class="form-label">E-mail ou CPF</label>
                    <input 
                        v-model="identificador"

                        type="text" 
                        name="email-cpf" 
                        id="email-cpf" 
                        class="form-control" 
                        placeholder="Digite seu e-mail ou CPF"
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
                        placeholder="Digite seu senha"
                        :class="{ 'is-invalid': erros.senha }"
                        >
                    <div class="invalid-feedback">
                        {{ erros.senha }}
                    </div>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <a href="#" class="text-muted">Esqueceu sua senha?</a>
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