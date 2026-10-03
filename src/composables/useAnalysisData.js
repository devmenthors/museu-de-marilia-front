import {ref, computed} from "vue";

const mockApiData = {
    "analysis": {
        title: 'Análise da Doação',
        heading: 'Análise',
        buttons: ['Cancelar Análise', 'Encaminhar', 'Não Incorporar', 'Incorporar']
    },
    "incorporation": {
        title: 'Detalhes da Incorporação',
        heading: 'Detalhes da Incorporação',
        buttons: ['Cancelar', 'Incorporar']
    },
    "rejected": {
        title: 'Detalhes da Não Incorporação',
        heading: 'Detalhes da Não Incorporação',
        buttons: ['Cancelar', 'Incorporar', 'Encaminhar']
    },
    "forwarded": {
        title: 'Detalhes do Encaminhamento',
        heading: 'Detalhes do Encaminhamento',
        buttons: ['Cancelar', 'Confirmar Encaminhamento']
    }
}

const donorData = {
    name: "Isabela Lima de Oliveira",
    cpf: "123.456.789-00",
    phone: "(14) 99000-1234",
    email: "isabela@gmail.com",
    address: "Rua das Flores, 123 - Centro - Marília/SP"
}

const itemData = {
    type: "Item Único",
    history: "Fóssil encontrado em escavação na região de Marília em 1998, sob sedimentos da Formação Marília (Grupo Bauru). Provável fragmento de carapaça de dinossauro saurópode. Preservado desde então em ambiente seco.",
    justification: "Desejo contribuir para o acervo paleontológico do município, possibilitando que estudantes, pesquisadores e o público em geral tenham acesso científico ao material de forma pública e protegida."
}

const timeline = [
    { status: "Solicitação recebida", date: "15/03/2025", time: "14:32" },
    { status: "Em análise pelo curador", date: "18/03/2025", time: "10:15" },
]

export function useAnalysisData(status = "analysis") {
    const currentStatus = ref(status)
    const loading = ref(false)
    const error = ref(null)

    const fetchAnalysisData = async (donationId, actionStatus)  => {
        loading.value = true
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            currentStatus.value = actionStatus
        } catch(err) {
            error.value = err.value
        } finally {
            loading.value = false
        }
    }

    const getScreenData = computed(() => {
        return mockApiData[currentStatus.value] || mockApiData["analysis"]
    })

    return {
        currentStatus,
        loading,
        error,
        fetchAnalysisData,
        getScreenData,
        donorData,
        itemData,
        timeline
    }
    
}