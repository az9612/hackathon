import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import FirstStep from '../FirstStep.vue'
import StudyPage from '@/StudyPage.vue'
import VisaApplication from '../VisaApplication.vue'

const routes = [
  { path: '/', component: Home },
  { name: 'Visa Application', path: '/visa', content: 'Apply for visa, documents, process', component: VisaApplication },
  { name: 'Study in Germany', path: '/study', content: 'Study programs, universities, application', component: StudyPage },
  { name: 'First Steps', path: '/first', content: 'Registration, apartment, insurance', component: FirstStep },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
