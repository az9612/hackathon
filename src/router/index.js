import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import FirstStep from '../FirstStep.vue'
import StudyPage from '@/StudyPage.vue'
import VisaApplication from '../VisaApplication.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/first', component: FirstStep },
  {path: '/study', component: StudyPage },
  {path: '/visa', component: VisaApplication}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
