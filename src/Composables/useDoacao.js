import { reactive } from 'vue'

// ============================================================================
// Dados do formulário de doação, compartilhados entre as 4 etapas.
// Ficam fora da função (no "módulo") para que todas as telas leiam o MESMO objeto:
// assim, ao clicar em VOLTAR, o que já foi digitado continua lá.
//
// Segurança: os dados pessoais (CPF, e-mail...) ficam SÓ na memória da aba.
// Não usamos localStorage para não deixar dados pessoais gravados no computador (LGPD).
// Ao recarregar a página, os dados somem e o fluxo recomeça da etapa 1.
// ============================================================================

// Valores iniciais de cada etapa (função para sempre gerar um objeto novo, sem reaproveitar referência)
function criarEstadoInicial() {
  return {
    dadosPessoais: { nomeCompleto: '', cpf: '', email: '', telefone: '', endereco: '' },
    informacoesItem: { tipoAcervo: 'unico', categoria: '', historicoProcedencia: '', justificativaDoacao: '' },
    fotos: [null, null, null, null, null], // 5 posições, uma para cada foto
    etapaConcluida: 0, // até qual etapa a pessoa já chegou (usado para bloquear pular etapas pela URL)
    protocolo: '', // preenchido ao finalizar
  }
}

const estadoDoacao = reactive(criarEstadoInicial()) // reactive: qualquer alteração atualiza as telas

export function useDoacao() {
  // Salva a etapa 1 e libera a etapa 2
  function salvarDadosPessoais(dados) {
    Object.assign(estadoDoacao.dadosPessoais, dados) // copia campo a campo para dentro do objeto existente
    estadoDoacao.etapaConcluida = Math.max(estadoDoacao.etapaConcluida, 1)
  }

  // Salva a etapa 2. "concluir = false" é usado no VOLTAR: guarda o que foi digitado,
  // mas não libera a etapa 3 (os campos ainda podem estar incompletos)
  function salvarInformacoesItem(dados, concluir = true) {
    Object.assign(estadoDoacao.informacoesItem, dados)
    if (concluir) estadoDoacao.etapaConcluida = Math.max(estadoDoacao.etapaConcluida, 2)
  }

  // Salva as fotos e gera um protocolo provisório
  function finalizarDoacao(fotos) {
    estadoDoacao.fotos = fotos
    // Quando a API existir: POST /api/doacoes (multipart/form-data) e o protocolo vem na resposta
    estadoDoacao.protocolo = '000001' // valor de teste, igual ao que já aparecia na tela de sucesso
    estadoDoacao.etapaConcluida = 3
  }

  // Limpa tudo (ao sair da tela de sucesso ou ao fazer logout)
  function limparDoacao() {
    estadoDoacao.fotos.forEach((foto) => foto && URL.revokeObjectURL(foto.preview)) // libera da memória as prévias das fotos
    Object.assign(estadoDoacao, criarEstadoInicial())
  }

  return { estadoDoacao, salvarDadosPessoais, salvarInformacoesItem, finalizarDoacao, limparDoacao }
}
