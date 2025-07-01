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
  { name: 'Residence Registration' ,path: '/resireg', component: ResidenceReg },
  { name: 'Health Insurance' ,path: '/health', component: HealthIns},
  { name: 'Bank Account', path: '/bank', component: BankAcc},
  { name: 'Enrollment ',path: '/enrol', component: EnrolUni},
  { name: 'Online Services ',path:'/service', component: OnlineSer}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
