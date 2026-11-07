<script setup>
import { computed } from 'vue'

defineProps({
    buttons: {
        type: Array,
        required: true
    },
    primaryButton: {
        type: String
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

            <button v-if="buttons.some(b => ['Voltar', 'Cancelar', 'Cancelar Análise'].includes(b))" type="button"
                class="btn btn-secondary px-4" @click="handleAction(
                    buttons.includes('Voltar') ? 'Voltar' :
                    buttons.includes('Cancelar Análise') ? 'Cancelar Análise' : 'Cancelar'
                )"
                >
                    {{ 
                        buttons.includes('Voltar') ? 'Voltar' : buttons.includes('Cancelar Análise') ? 'Cancelar Análise' : 'Cancelar' 
                    }}
            </button>
            <div class="buttons d-flex gap-3">
                <button 
                    v-for="btn in buttons.filter(b => !['Voltar', 'Cancelar', 'Cancelar Análise'].includes(b))"
                    :key="btn" 
                    type="button"
                    :class="['btn', 'px-4', btn === primaryButton ? 'btn-primary' : 'btn-secondary']"
                    @click="handleAction(btn)">
                    {{ btn }}
                </button>
            </div>
        </section>
    </div>
</template>