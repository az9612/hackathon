import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import FirstStep from '../FirstStep.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/first', component: FirstStep }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
