import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/loginIndex.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    // components: () => import('@/views/login/LoginIndex.vue')
    components: Login
  },
  {
    path: '/main',
    components: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
