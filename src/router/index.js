import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../HomePage.vue'
<<<<<<< HEAD
=======
import FirstStep from '../FirstStep.vue'
import StudyPage from '../StudyPage.vue'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
import VisaApplication from '../VisaApplication.vue'
import ResidenceReg from '../ResidenceReg.vue'
import HealthIns from '../HealthIns.vue'
import BankAcc from '../BankAcc.vue'
<<<<<<< HEAD
import EnrolUni from '../EnrolUni.vue' import OnlineSer from '../OnlineSer.vue'
=======
import EnrolUni from '../EnrolUni.vue' 
import OnlineSer from '../OnlineSer.vue'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
import ExamInf from '../ExamInf.vue'
import UseLink from '../UseLink.vue'
import HouseStud from '../HouseStud.vue'
import SocMed from '../SocMed.vue'
import LivCit from '../LivCit.vue'
import FindJob from '../FindJob.vue'

const routes = [
  { path: '/', component: Home },
  { name: 'Visa Application', path: '/visa', content: 'Apply for visa, documents, process', component: VisaApplication },
<<<<<<< HEAD
  { name: 'Residence Registration', path: '/resireg', component: ResidenceReg, },
  { name: 'Health Insurance' ,path: '/health', component: HealthIns},
  { name: 'Bank Account', path: '/bank', component: BankAcc},
  { name: 'Enrollment ',path: '/enrol', component: EnrolUni},
=======
  { name: 'Study in Germany', path: '/study', content: 'Study programs, universities, application', component: StudyPage },
  { name: 'First Steps', path: '/first', content: 'Registration, apartment, insurance', component: FirstStep },
  { name: 'Residence Registration' ,path: '/resireg', component: ResidenceReg },
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
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

