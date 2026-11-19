// ============================================================================
// Dados de TESTE das solicitações de doação (antes ficavam dentro da tabela do Dashboard).
// Ficam aqui para que a tabela e o "Resumo da Proposta" usem a mesma fonte.
// Quando a API existir, trocar por algo como:
//   GET /api/solicitacoes       -> lista da tabela
//   GET /api/solicitacoes/{id}  -> detalhes de uma solicitação
// ============================================================================

export const listaSolicitacoes = [
  { id: '000012', donor: 'Maria Oliveira', date: '15/03/2025', type: 'Item Único', status: 'Incorporado', statusParam: 'incorporation' },
  { id: '000011', donor: 'Carlos Eduardo Santos', date: '14/03/2025', type: 'Coleção', status: 'Em Análise', statusParam: 'analysis' },
  { id: '000010', donor: 'Roberto de Souza', date: '10/03/2025', type: 'Item Único', status: 'Analisado', statusParam: 'analyzed' },
  { id: '000009', donor: 'Juliana Andrade', date: '08/03/2025', type: 'Coleção', status: 'Não Incorporada', statusParam: 'rejected' },
  { id: '000008', donor: 'Fernando Costa Prado', date: '05/03/2025', type: 'Item Único', status: 'Encaminhado', statusParam: 'forwarded' },
]

// Procura uma solicitação pelo protocolo. padStart garante o formato "000012" mesmo se vier "12".
export function buscarSolicitacaoPorId(id) {
  const idFormatado = String(id).padStart(6, '0')
  return listaSolicitacoes.find((solicitacao) => solicitacao.id === idFormatado) || null // null = não encontrada
}
