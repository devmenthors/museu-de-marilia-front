// ============================================================================
// Sessão do curador (TEMPORÁRIO, até a API de login existir)
// ----------------------------------------------------------------------------
// IMPORTANTE (segurança): isto só controla a NAVEGAÇÃO no front-end.
// A proteção de verdade precisa ficar na API (Laravel + JWT): toda rota da API
// deve validar o token. Qualquer pessoa consegue alterar o que está no navegador.
//
// Quando a API existir, a ideia é:
//   POST /api/login  -> a API devolve o JWT num cookie httpOnly + Secure + SameSite
//   POST /api/logout -> a API invalida o token
// Não guarde o JWT em localStorage/sessionStorage: um script malicioso (XSS) conseguiria lê-lo.
// ============================================================================

const chaveSessao = 'museuSessaoAtiva' // nome da chave no sessionStorage

// Lê a sessão com try/catch porque o sessionStorage pode estar bloqueado (ex.: modo privado restrito)
export function estaAutenticado() {
  try {
    return sessionStorage.getItem(chaveSessao) === 'true' // só existe enquanto a aba estiver aberta
  } catch {
    return false // sem acesso ao storage = trata como não logado
  }
}

// Marca a sessão como iniciada. Repare que NÃO guardamos e-mail, CPF nem senha.
export function iniciarSessao() {
  try {
    sessionStorage.setItem(chaveSessao, 'true')
  } catch {
    // se não der para gravar, o usuário só vai precisar logar de novo
  }
}

// Encerra a sessão (botão "Sair" da navbar)
export function encerrarSessao() {
  try {
    sessionStorage.removeItem(chaveSessao)
  } catch {
    // nada a fazer
  }
}

// Evita "open redirect": só aceita voltar para um caminho interno do próprio sistema.
// Ex.: "/dashboard" passa; "https://site-falso.com" ou "//site-falso.com" não passam.
export function caminhoInternoSeguro(caminho) {
  return typeof caminho === 'string' && caminho.startsWith('/') && !caminho.startsWith('//')
}
