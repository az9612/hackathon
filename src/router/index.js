import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import FirstStep from '../FirstStep.vue'
import StudyPage from '@/StudyPage.vue'
import VisaApplication from '../VisaApplication.vue'
import ResidenceReg from '../ResidenceReg.vue'
import HealthIns from '../HealthIns.vue'
import BankAcc from '../BankAcc.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/first', component: FirstStep },
  {path: '/study', component: StudyPage },
  {path: '/visa', component: VisaApplication},
  {path: '/resireg', component: ResidenceReg },
  {path: '/health', component: HealthIns},
  {path: '/bank', component: BankAcc}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
