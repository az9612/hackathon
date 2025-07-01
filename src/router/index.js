import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import FirstStep from '../FirstStep.vue'
import StudyPage from '../StudyPage.vue'
import VisaApplication from '../VisaApplication.vue'
import ResidenceReg from '../ResidenceReg.vue'
import HealthIns from '../HealthIns.vue'
import BankAcc from '../BankAcc.vue'
import EnrolUni from '../EnrolUni.vue' 
import OnlineSer from '../OnlineSer.vue'


const routes = [
  { path: '/', component: Home },
  { name: 'Visa Application', path: '/visa', content: 'Apply for visa, documents, process', component: VisaApplication },
  { name: 'Study in Germany', path: '/study', content: 'Study programs, universities, application', component: StudyPage },
  { name: 'First Steps', path: '/first', content: 'Registration, apartment, insurance', component: FirstStep },
  {path: '/resireg', component: ResidenceReg },
  {path: '/health', component: HealthIns},
  {path: '/bank', component: BankAcc},
  {path: '/enrol', component: EnrolUni},
  {path:'/service', component: OnlineSer}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
