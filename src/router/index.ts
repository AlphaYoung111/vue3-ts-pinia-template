import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { loadView } from './view-import'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: loadView('login/LoginIndex')
  },
  {
    path: '/main',
    component: loadView('main/MainIndex')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
