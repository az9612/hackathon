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
          to: '/resireg'
        },
        { 
          title: 'Health Insurance', 
          desc: 'Mandatory for all students',
          to: '/health'
        },
        { 
          title: 'Bank Account', 
          desc: 'Opening a German account',
          to: '/bank'
        }
      ],
      studyLinks: [
        { 
          title: 'Enrollment', 
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
          to: '/exam'
        },
        { 
          title: 'Relevant Links', 
          desc: 'Useful links for students',
          to: '/link'
        }
      ],
      accomodationLinks: [
        { 
          title: 'Housing and Dormitories', 
          desc: 'Housing options for students',
          to: '/house'
        },

      ],
      lifeLinks: [
        { 
          title: 'Social Media', 
          desc: 'Semester tickets and routes',
          to: '/social'
        },
        { 
          title: 'Culture', 
          desc: 'Events and activities',
          to: '/living'
        },
        { 
          title: 'Jobs', 
          desc: 'Working while studying',
          to: '/job'
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
</style>
