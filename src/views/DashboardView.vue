<script setup>
import Table from "../components/Dashboard/Table.vue";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard.vue";
import appFooter from "@/components/appFooter.vue";
</script>


<template>
    <div>
        <HeaderDashboard />
        <div class="container-sm p-0">
            <Table />
        </div>
        <appFooter />
    </div>
</template>

<style scoped>
.container-sm {
    min-height: 55vh;
}
</style>