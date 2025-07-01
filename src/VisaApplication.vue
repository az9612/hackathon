<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          ALL QUESTIONS ABOUT THE GERMAN VISA, ANSWERED!
        </template>
        <template #description>
          We're sure you'd love to explore this beautiful country. However, you'll need a 
          <strong>German visa</strong> to enter. Below, we've answered some of the most common questions 
          to guide you through the process.
        </template>
      </BannerGermany>
    </div>

    <div class="container-fluid">
      <div class="requirements-container">
        <InfoSection :title="'Visa Appointment Information'" :items="visaItems" />

        <section class="d-flex justify-content-between py-4 mb-4">
          <router-link to="/resireg" class="btn btn-outline-secondary">
            Residence Registration &gt;
          </router-link>
        </section>
      </div>
    </div>
    
    <section class="contacts-section py-5">
      <UniversityContacts />
    </section>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import BannerGermany from './components/BannerGermany.vue'
import InfoSection from './components/InfoSection.vue'
import UniversityContacts from './components/UniversityContacts.vue'

export default {
  components: {
    AppNavbar,
    BannerGermany,
    InfoSection,
    UniversityContacts
  },
  data() {
    return {
      visaItems: [
        {
          title: 'Duisburg',
          description: `Fill in online application at the
            <a href="https://www.duisburg.de/allgemein/fachbereiche/33/online-antraege-der-auslaenderbehoerde.php#/#bueOverview" target="_blank">Foreigner's Office website</a>.
            UDE students can also contact the Immigration Office Duisburg every 2nd Tuesday via
            <a href="https://teams.microsoft.com/l/meetup-join/..." target="_blank">this Teams link</a>.
            Email: <span class="text-primary">talent-center@stadt-duisburg.de</span>.`
        },
        {
          title: 'Essen',
          description: `Please schedule appointments via email:
            <span class="text-primary">studententermine@abh.essen.de</span>`
        },
        {
          title: 'Mülheim an der Ruhr',
          description: `Please schedule appointments 
            <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9" target="_blank">online</a>.`
        },
        {
          title: 'Required Documents',
          description: `
            <ul class="document-list">
              <li>Letter of Admission</li>
              <li>Proof of Financing (approx. €11,208 per year)</li>
              <li>Proof of Health Insurance</li>
              <li>Rental Agreement (if available)</li>
              <li>Letter of tenancy (Wohnungsgeberbescheinigung)</li>
              <li>Valid Passport</li>
              <li>Biometric Passport Photos (35x45mm)</li>
              <li>Completed Visa Application Form</li>
            </ul>
          `
        }
      ]
    }
  }
}
</script>

<style scoped>
.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: #fffefe;
}

.text-primary {
  color: #007bff;
}

.contacts-section {
  background-color: #005293;
  margin-top: 2rem;
}

.btn-outline-secondary {
  border-color: #005293;
  color: #005293;
}

.btn-outline-secondary:hover {
  background-color: #005293;
  color: white;
}

.document-list {
  padding-left: 1.5rem;
}

.document-list li {
  margin-bottom: 0.5rem;
}
</style>

