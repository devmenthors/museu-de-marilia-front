import { ref, computed } from "vue"

// Título e botões de cada "estado" da tela de análise.
// (antes se chamava ButtonsInTelas; virou buttonsInTelas para seguir o padrão camelCase)
const buttonsInTelas = {
    analysis: {
        title: "Análise da Doação",
        buttons: ["Cancelar Análise", "Encaminhar", "Não Incorporar", "Incorporar"],
        primaryButton: "Incorporar"
    },
    analyzed: {
        title: "Detalhes da Análise", // corrigido o erro de digitação "Detaalhes"
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

// Confere se o status que veio na URL (?status=...) é um dos conhecidos.
// Assim, um valor digitado à mão na URL nunca vira estado da tela.
export function statusValido(status) {
    return Object.hasOwn(buttonsInTelas, status) // hasOwn ignora chaves herdadas como "toString"
}

export function useAnalysisData(status = "analysis") {
    const currentStatus = ref(status)
    const loading = ref(false)

    const fetchAnalysisData = async (actionStatus) => {
        loading.value = true
        try {
            await new Promise(resolve => setTimeout(resolve, 500)) // simula o tempo de resposta da API
            currentStatus.value = statusValido(actionStatus) ? actionStatus : "analysis" // valor desconhecido volta para "analysis"
        } finally {
            loading.value = false // finally garante que o "carregando" some mesmo se der erro
        }
    }

    const getScreenData = computed(() => {
        return buttonsInTelas[currentStatus.value] || buttonsInTelas.analysis
    })

    return {
        loading,
        fetchAnalysisData,
        getScreenData
    }
}
