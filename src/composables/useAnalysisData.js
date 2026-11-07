import { ref, computed } from "vue"

const ButtonsInTelas = {
    analysis: {
        title: "Análise da Doação",
        buttons: ["Cancelar Análise", "Encaminhar", "Não Incorporar", "Incorporar"],
        primaryButton: "Incorporar"
    },
    analyzed: {
        title: "Detaalhes da Análise",
        buttons: ["Voltar", "Confirmar Análise"],
        primaryButton: "Confirmar Análise"
    },
    viewAnalysis: {
        title: "Detalhes da Doação",
        buttons: ["Voltar"],
        primaryButton: "Voltar"
    },
    incorporation: {
        title: "Detalhes da Incorporação",
        buttons: ["Cancelar", "Não Incorporar"],
        primaryButton: "Não Incorporar"

    },
    rejected: {
        title: "Detalhes da Não Incorporação",
        buttons: ["Cancelar", "Incorporar", "Encaminhar"],
        primaryButton: "Encaminhar"

    },
    forwarded: {
        title: "Detalhes do Encaminhamento",
        buttons: ["Cancelar", "Fazer Devolução", "Confirmar Encaminhamento"],
        primaryButton: "Confirmar Encaminhamento"
    }
}

export function useAnalysisData(status = "analysis") {
    const currentStatus = ref(status)
    const loading = ref(false)

    const fetchAnalysisData = async (actionStatus) => {
        loading.value = true
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            currentStatus.value = actionStatus
        } finally {
            loading.value = false
        }
    }

    const getScreenData = computed(() => {
        return ButtonsInTelas[currentStatus.value] || ButtonsInTelas.analysis
    })

    return {
        loading,
        fetchAnalysisData,
        getScreenData
    }
}