<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { encerrarSessao } from "@/Services/autenticacao";
import { useDoacao } from "@/Composables/useDoacao";

const route = useRoute();
const router = useRouter();
const { limparDoacao } = useDoacao();

// Mostra "> Solicitação #000012" em qualquer tela que tenha um protocolo na URL
// (análise e os formulários Aprovar / Justificar / Encaminhar)
const showDonationInfo = computed(() => {
    return Boolean(route.params.id)
})

// Na tela de login não existe curador logado, então escondemos o breadcrumb e o nome
const hideCuradorInfo = computed(() => {
    return route.name === "login"
})

const donationId = computed(() => {
    return route.params.id || "000012"
})

const curador = ref({
    nome: "Maria Fernanda",
    cargo: "Curador"
});

function goToDashboard() {
    router.push({ name: "dashboard" });
}

// Botão "Sair": encerra a sessão, apaga dados de doação em andamento e volta para o login
function logout() {
    encerrarSessao();
    limparDoacao();
    router.replace({ name: "login" }); // replace: o "voltar" do navegador não reabre a tela protegida
}

</script>

<template>
    <nav class="navbar navbar-expand-lg shadow-sm text-dark">
        <div class="container">

            <div class="navbar-brand d-flex align-items-center">
                <p class="m-0">[LOGO]</p>
            </div>

            <div v-if="!hideCuradorInfo" class="d-flex align-items-center text-muted">
                <button
                    type="button"
                    class="btn btn-link text-muted text-decoration-none p-0"
                    @click="goToDashboard"
                >
                    Painel do Curador
                </button>

                <span v-if="showDonationInfo" class="mx-2">
                    >
                </span>

                <span v-if="showDonationInfo">
                    Solicitação #{{ String(donationId).padStart(6, "0") }}
                </span>
            </div>
          

            <div v-if="!hideCuradorInfo" class="navbar-nav ms-auto gap-3 align-items-center">
                <!-- Antes era um RouterLink sem destino ("to"), o que gera erro no vue-router; virou um span -->
                <span class="nav-link px-0">
                    {{ curador.cargo }}: {{ curador.nome }}
                    <i class="ri-notification-line me-1 p-1"></i>
                </span>
                <!-- Encerrar a sessão é obrigatório em sistema com login (segurança) -->
                <button type="button" class="btn btn-link text-muted text-decoration-none p-0" @click="logout">
                    Sair
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    height: 56px;
}

.navbar-brand .fs-5,
.navbar-nav {
    font-size: 14px !important;
}

.ri-notification-line {
    background-color: #FFFFE3;
    border-radius: 50%;
}

.btn-link:hover {
    color: var(--bs-primary) !important;
}
</style>
