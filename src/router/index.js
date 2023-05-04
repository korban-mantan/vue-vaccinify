import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/vaccination',
      name: 'vaccination',
      component: () => import('../views/VaccineView.vue')
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: () => import('../views/HospitalView.vue')
    },
    {
      path: '/consult',
      name: 'consult',
      component: () => import('../views/ConsultView.vue')
    }
  ]
})

export default router
