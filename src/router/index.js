import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Justificar',
      name: 'JustificarIncorpo',
      component: () => import('../views/JustificarIncorpoView.vue')
    },
    {
      path: '/Aprovar',
      name: 'AprovarIncorpo',
      component: () => import('../views/AprovarIncorpoView.vue')
    },
    {
      path: '/Encaminhar',
      name: 'EncaminharIncorpo',
      component: () => import('../views/EncaminharIncorpoView.vue')
    },
    {
      path: '/Header',
      name: 'AppHeader',
      component: () => import('../views/AppHeader.vue')
    },
    // ================= FLUXO DE DOAÇÃO DE ITENS =================
    {
      path: '/doacao',
      name: 'DadosPessoais',
      component: () => import('../views/DadosPessoais.vue') // Tela 1
    },
    {
      path: '/InformacoesItem',
      name: 'InformacoesItem',
      component: () => import('../views/InformacoesItemView.vue') // Tela 2
    },
    {
      path: '/FotosItem',
      name: 'FotosItem',
      component: () => import('../views/FotosItemView.vue') // Tela 3
    },
    {
      path: '/Sucesso',
      name: 'Sucesso',
      component: () => import('../views/SucessoView.vue') // Tela 4
    }
  ],
})

export default router
