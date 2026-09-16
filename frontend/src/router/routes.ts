import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MemberView from '../views/MemberView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/member', name: 'member', component: MemberView, meta: { requiresAuth: true } }
]

export default routes