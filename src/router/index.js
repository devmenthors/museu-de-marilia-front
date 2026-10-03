import { createRouter, createWebHistory } from 'vue-router'
import AnalysisView from '../views/AnalysisView.vue'
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/analysis/:id',
      name: 'analysis',
      component: AnalysisView,
    }
  ],
})

export default router
