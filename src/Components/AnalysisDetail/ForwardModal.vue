<script setup>
// Modal do "Confirmar Encaminhamento" (antes se chamava Modal.vue; o nome mudou porque o Vue
// recomenda nomes de componente com duas palavras, para não confundir com tags HTML)
defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: "Confirmar ação"
    },
    message: {
        type: String,
        required: true
    },
    confirmText: {
        type: String,
        default: "Confirmar"
    }
})

const emit = defineEmits(["incorporate", "reject", "cancel"])
</script>

<template>
    <div v-if="show">
        <div class="modal-backdrop fade show"></div>

        <div
            class="modal fade show d-block rounded-0"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ title }}
                        </h5>

                        <!-- aria-label: o botão só tem um "X", então o leitor de tela precisa de um texto -->
                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Fechar"
                            @click="emit('cancel')"
                        ></button>
                    </div>

                    <div class="modal-body">
                        <p class="mb-3">{{ message }}</p>
                        <button
                            type="button"
                            class="btn btn-primary w-100 mb-3"
                            @click="emit('incorporate')"
                        >
                            Incorporar
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary w-100"
                            @click="emit('reject')"
                        >
                            Não Incorporar
                        </button>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="emit('cancel')"
                        >
                            Cancelar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
