<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showDonationInfo = computed(() => {
    return route.name === "analysis"
})

const showCuradorInfo = computed(() => {
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

</script>

<template>
    <nav class="navbar navbar-expand-lg shadow-sm text-dark">
        <div class="container">

            <div class="navbar-brand d-flex align-items-center">
                <p class="m-0">[LOGO]</p>
            </div>

            <div v-if="!showCuradorInfo" class="d-flex align-items-center text-muted">
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
          

            <div v-if="!showCuradorInfo"  class="navbar-nav ms-auto gap-3">
                <RouterLink class="nav-link px-0">
                    {{ curador.cargo }}: {{ curador.nome }}
                    <i class="ri-notification-line me-1 p-1"></i>
                </RouterLink>
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