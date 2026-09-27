<script setup>
import { computed } from 'vue'

defineProps({
    buttons: {
        type: Array,
        required: true
    },
    primaryButton: {
        type: String,
        default: "Incorporar"
    }
})

const emit = defineEmits(["action"])

const handleAction = (buttonText) => {
    emit("action", buttonText)
}

</script>

<template>
    <div>
        <section class="container d-flex justify-content-between">
            <button
                v-if="buttons.includes('Cancelar Análise') || buttons.includes('Cancelar')" 
                type="button" 
                class="btn btn-secondary px-4"
                @click="handleAction('Cancelar')"
                > 
                {{ buttons.includes("Cancelar Análise") ? "Cancelar Análise" : "Cancelar" }}
            </button>
            <div class="buttons d-flex gap-3">
                <button 
                    v-for="btn in buttons.filter(b => !b.includes('Cancelar'))"
                    :key="btn"
                    type="button" 
                    :class="['btn', 'px-4', btn === primaryButton ? 'btn-primary' : 'btn-secondary']"
                    @click="handleAction(btn)"
                    >
                    {{ btn }}
                </button>
            </div>
        </section>
    </div>
</template>