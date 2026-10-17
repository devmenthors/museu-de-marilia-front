<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const showDonationInfo = computed(() => {
        return route.name === "analysis"
    })

    const donationId = computed(() => {
        return route.params.id || "000012"
    })
</script>

<template>
    <nav class="navbar navbar-expand-lg shadow-sm text-dark">
        <div class="container">
            <RouterLink class="navbar-brand d-flex align-items-center fw-bold" to="/">
                <p class="m-0">[LOGO]</p>
                <p class="mb-0 mx-4 fs-5">
                    Painel do Curador
                    <span v-if="showDonationInfo">
                        > Solicitação #{{ String(donationId).padStart(6, "0") }}
                    </span>
                </p>
            </RouterLink>

            <div class="navbar-nav ms-auto gap-3">
                <RouterLink to="/" class="nav-link px-0">
                    Curador: Dev. João Pedro
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
</style>