import { ref, computed } from "vue"

const mockApiData = {
    analysis: {
        title: "Análise da Doação",
        buttons: ["Cancelar Análise", "Encaminhar", "Não Incorporar", "Incorporar"]
    },
    incorporation: {
        title: "Detalhes da Incorporação",
        buttons: ["Cancelar", "Incorporar"]
    },
    rejected: {
        title: "Detalhes da Não Incorporação",
        buttons: ["Cancelar", "Incorporar", "Encaminhar"]
    },
    forwarded: {
        title: "Detalhes do Encaminhamento",
        buttons: ["Cancelar", "Confirmar Encaminhamento"]
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
        return mockApiData[currentStatus.value] || mockApiData.analysis
    })

    return {
        loading,
        fetchAnalysisData,
        getScreenData
    }
}