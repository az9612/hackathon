<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
    <BannerGermany>
      <template #title>
        ALL QUESTIONS ABOUT THE GERMANY VISA, ANSWERED!
      </template>
      <template #description>
        We're sure you'd love to explore this beautiful country. However, you'll need a 
        <strong>Germany visa</strong> to enter. Below, we've answered some of the most common questions 
        to guide you through the process.
      </template>
    </BannerGermany>
    </div>

    <div class="container-fluid">
      <div class="requirements-container">
        <InfoSection :title="'Visa Appointment'" :items="visaItems" />

        <section class="text-center py-4 mb-4">
          <router-link to="/resireg" class="btn btn-outline-secondary">
            Residence Registration ->
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
          description: `
            Fill in online application at the
            <a href="https://www.duisburg.de/allgemein/fachbereiche/33/online-antraege-der-auslaenderbehoerde.php#/#bueOverview" target="_blank">Foreign's office website</a>.
            UDE students can also contact the Immigration Office Duisburg every 2nd Tuesday via
            <a href="https://teams.microsoft.com/l/meetup-join/..." target="_blank">this Teams link</a>.
            Email: <span class="text-primary">talent-center@stadt-duisburg.de</span>.
          `
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
          title: 'Typical documents needed',
          description: `
            <ul>
              <li>Letter of Admission</li>
              <li>Proof of Financing</li>
              <li>Proof of Health Insurance</li>
              <li>Rental Agreement</li>
              <li>Letter of tenancy (Wohnungsgeberbescheinigung)</li>
              <li>Passport</li>
              <li>Passport Photo</li>
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
  background-color: #fffefe; /* Only the content area should be white */
}

.text-primary {
  color: #007bff;
}

.contacts-section {
  background-color: #005293; /* Ensure the contacts section has the blue background */
  margin-top: 2rem; /* Add some space between content and footer */
}
</style>
