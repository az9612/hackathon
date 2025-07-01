<template>
  <div class="quick-links">
    <h2>ESSENTIAL INFORMATION</h2>
    <div class="link-sections">
      <InfoColumn 
        title="Living in Germany"
        :links="livingLinks"
      />
      <InfoColumn 
        title="Study in UDE"
        :links="studyLinks"
      />
      <InfoColumn 
        title="Accomodation"
        :links="accomodationLinks"
      />
      <InfoColumn 
        title="Fun and Social Life"
        :links="lifeLinks"
      />
    </div>
  </div>
</template>

<script>
import InfoColumn from './InfoColumn.vue';

export default {
  name: 'EssentialInfoSection',
  components: { InfoColumn },
  data() {
    return {
      livingLinks: [
        { 
          title: 'Visa Application Requirements', 
          desc: 'All requirements for student visa',
          to: '/visa'
        },
        { 
          title: 'Residence Registration', 
          desc: 'Anmeldung process explained',
<<<<<<< HEAD
          to: '/registration'
=======
          to: '/resireg'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        },
        { 
          title: 'Health Insurance', 
          desc: 'Mandatory for all students',
<<<<<<< HEAD
          to: '/insurance'
=======
          to: '/health'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        },
        { 
          title: 'Bank Account', 
          desc: 'Opening a German account',
<<<<<<< HEAD
          to: '/bank-account'
=======
          to: '/bank'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        }
      ],
      studyLinks: [
        { 
          title: 'Einschreiben', 
<<<<<<< HEAD
          desc: 'Find student dorms and apartments',
          to: '/accommodation'
        },
        { 
          title: 'Online Services', 
          desc: 'How to enroll in classes',
          to: '/courses'
        },
        { 
          title: 'University Services', 
          desc: 'Library, IT, and other resources',
          to: '/university-services'
        },
        {
          title: 'Exams', 
          desc: 'Library, IT, and other resources',
          to: '/university-services'
=======
          desc: 'Enrollment process for new students',
          to: '/enrol'
        },
        { 
          title: 'Online Services', 
          desc: 'Official university online websites',
          to: '/service'
        },
        {
          title: 'Exams', 
          desc: 'Exam schedules, rules and regulations',
          to: '/university-services'
        },
        { 
          title: 'Relevant Links', 
          desc: 'Useful links for students',
          to: '/links'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        }
      ],
      accomodationLinks: [
        { 
          title: 'Exams', 
          desc: 'Semester tickets and routes',
          to: '/transport'
        },
        { 
          title: 'Local Culture', 
          desc: 'Customs and etiquette',
          to: '/culture'
        },
        { 
          title: 'Fun & Social Life', 
          desc: 'Student clubs and activities',
          to: '/fun'
        }
      ],
      lifeLinks: [
        { 
          title: 'Exams', 
          desc: 'Semester tickets and routes',
          to: '/transport'
        },
        { 
          title: 'Local Culture', 
          desc: 'Customs and etiquette',
          to: '/culture'
        },
        { 
          title: 'Fun & Social Life', 
          desc: 'Student clubs and activities',
          to: '/fun'
        }
      ]
    }
  }
}
</script>

<style scoped>
.quick-links {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.quick-links h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #0066cc;
  text-transform: uppercase;
}

.link-sections {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .link-sections {
    flex-direction: column;
    gap: 1rem;
  }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
