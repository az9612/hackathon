import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
import VisaApplication from '../VisaApplication.vue'
import ResidenceReg from '../ResidenceReg.vue'
import HealthIns from '../HealthIns.vue'
import BankAcc from '../BankAcc.vue'
import EnrolUni from '../EnrolUni.vue' 
import OnlineSer from '../OnlineSer.vue'
import ExamInf from '../ExamInf.vue'
import UseLink from '../UseLink.vue'
import HouseStud from '../HouseStud.vue'
import SocMed from '../SocMed.vue'
import LivCit from '../LivCit.vue'
import FindJob from '../FindJob.vue'

const routes = [
  { path: '/', component: Home },
  { name: 'Visa Application', path: '/visa', content: 'Apply for visa, documents, process', component: VisaApplication },
  { name: 'Residence Registration', path: '/resireg', component: ResidenceReg, },
  { name: 'Health Insurance' ,path: '/health', component: HealthIns},
  { name: 'Bank Account', path: '/bank', component: BankAcc},
  { name: 'Enrollment ',path: '/enrol', component: EnrolUni},
  { name: 'Online Services ',path:'/service', component: OnlineSer},
  {path:'/exam', component: ExamInf},
  {path:'/link', component: UseLink},
  {path:'/house', component: HouseStud},
  {path:'/social', component: SocMed},
  {path:'/living', component: LivCit},
  {path:'/job', component: FindJob}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

