import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/Views/LoginView.vue'
import { estaAutenticado } from '@/Services/autenticacao'
import { useDoacao } from '@/Composables/useDoacao'

// ============================================================================
// ROTAS DO SISTEMA
// - path (URL) e name em camelCase
// - meta.requiresAuth: true  -> só abre com sessão iniciada (senão vai para o login)
// - meta.etapaDoacao: N      -> etapa do formulário de doação (impede pular etapas pela URL)
// - :id(\\d{1,6})            -> o protocolo só aceita números (até 6 dígitos); qualquer outra coisa cai no "não encontrado"
// As telas (exceto o login) usam "() => import(...)" para só baixar o código quando forem abertas.
// ============================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ================= ACESSO =================
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },

    // ================= PAINEL DO CURADOR =================
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/Views/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/analysis/:id(\\d{1,6})',
      name: 'analysis',
      component: () => import('@/Views/AnalysisView.vue'),
      meta: { requiresAuth: true },
    },
    // Formulários das ações da análise (botões Incorporar / Não Incorporar / Encaminhar)
    {
      path: '/analysis/:id(\\d{1,6})/aprovarIncorporacao',
      name: 'aprovarIncorporacao',
      component: () => import('@/Views/AprovarIncorporacaoView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/analysis/:id(\\d{1,6})/justificarIncorporacao',
      name: 'justificarIncorporacao',
      component: () => import('@/Views/JustificarIncorporacaoView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/analysis/:id(\\d{1,6})/encaminharIncorporacao',
      name: 'encaminharIncorporacao',
      component: () => import('@/Views/EncaminharIncorporacaoView.vue'),
      meta: { requiresAuth: true },
    },

    // ================= FLUXO DE DOAÇÃO DE ITENS =================
    {
      path: '/doacao',
      redirect: { name: 'doacaoDadosPessoais' }, // "/doacao" sozinho abre a primeira etapa
    },
    {
      path: '/doacao/dadosPessoais',
      name: 'doacaoDadosPessoais',
      component: () => import('@/Views/DoacaoDadosPessoaisView.vue'), // Tela 1
      meta: { requiresAuth: true, etapaDoacao: 1 },
    },
    {
      path: '/doacao/informacoesItem',
      name: 'doacaoInformacoesItem',
      component: () => import('@/Views/DoacaoInformacoesItemView.vue'), // Tela 2
      meta: { requiresAuth: true, etapaDoacao: 2 },
    },
    {
      path: '/doacao/fotosItem',
      name: 'doacaoFotosItem',
      component: () => import('@/Views/DoacaoFotosItemView.vue'), // Tela 3
      meta: { requiresAuth: true, etapaDoacao: 3 },
    },
    {
      path: '/doacao/sucesso',
      name: 'doacaoSucesso',
      component: () => import('@/Views/DoacaoSucessoView.vue'), // Tela 4
      meta: { requiresAuth: true, etapaDoacao: 4 },
    },

    // ================= QUALQUER OUTRA URL =================
    {
      path: '/:pathMatch(.*)*',
      name: 'naoEncontrado',
      redirect: { name: 'dashboard' }, // se não estiver logado, o guard abaixo leva para o login
    },
  ],
  // Sempre abre a nova tela do topo (antes ela podia abrir rolada para baixo)
  scrollBehavior() {
    return { top: 0 }
  },
})

// Guard global: roda antes de CADA troca de tela
router.beforeEach((to) => {
  const logado = estaAutenticado()

  // 1) Tela protegida sem sessão -> login, guardando para onde a pessoa queria ir
  if (to.meta.requiresAuth && !logado) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  // 2) Já logado tentando abrir o login -> vai direto para o painel
  if (to.name === 'login' && logado) {
    return { name: 'dashboard' }
  }

  // 3) Formulário de doação: não deixa abrir uma etapa sem ter concluído a anterior
  //    (ex.: digitar /doacao/fotosItem direto na barra de endereço)
  if (to.meta.etapaDoacao) {
    const { estadoDoacao } = useDoacao()
    if (to.meta.etapaDoacao - 1 > estadoDoacao.etapaConcluida) {
      return { name: 'doacaoDadosPessoais' }
    }
  }

  return true // libera a navegação
})

export default router
