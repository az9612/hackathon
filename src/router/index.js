import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../Register.vue'
import Home from '../Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: RegisterPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
