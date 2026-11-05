<script setup>
    import Navbar from "./components/Navbar.vue";
    import Footer from "./components/Footer.vue";
</script>

<template>
    <Navbar />
    <main class="container my-4">
        <RouterView />
    </main>
    <Footer />
</template>
