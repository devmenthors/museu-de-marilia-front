import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import HomeView from '@/views/AppHeader.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/Justificar',
      name:'JustificarIncorpo',
      component:()=>import('../views/JustificarIncorpoView.vue')
    },
     {
      path:'/Aprovar',
      name:'AprovarIncorpo',
      component:()=>import('../views/AprovarIncorpoView.vue')
    },
     {
      path:'/Encaminhar',
      name:'AprovarIncorpo',
      component:()=>import('../views/EncaminharIncorpoView.vue')
    },


  ],
})

export default router
