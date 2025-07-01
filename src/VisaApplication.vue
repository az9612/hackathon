<template>
<<<<<<< HEAD
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
=======
  <div class="app">
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
    <div class="container-sm w-50 my-5">
      <dl class="row">
        <dt class="col-sm-3 text-start">Duisburg</dt>
        <dd class="col-sm-9 text-start">
          Fill in the online application at the 
          <a href="https://www.duisburg.de/allgemein/fachbereiche/33/online-antraege-der-auslaenderbehoerde.php#/#bueOverview" target="_blank">
            Foreign's office website
          </a>. UDE students can also contact the Immigration Office Duisburg directly every second Tuesday via this 
          <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzAwNzQ0NGItMDY5Yi00YmUxLWE1MTUtMTMwYjQxYjY3NjE3%40thread.v2/0?context=%7b%22Tid%22%3a%221fe81f8a-14a2-4f29-a738-2f3ffcb77915%22%2c%22Oid%22%3a%22d6cbd25d-e7c0-47f9-840d-98c68132ce64%22%7d" target="_blank">link</a>.
          Contact Talent Center via: <span class="text-primary">talent-center@stadt-duisburg.de</span>
        </dd>

        <dt class="col-sm-3 text-start">Essen</dt>
        <dd class="col-sm-9 text-start">
          Please schedule appointments via email: 
          <span class="text-primary">studententermine@abh.essen.de</span>
        </dd>

        <dt class="col-sm-3 text-start">Mülheim an der Ruhr</dt>
        <dd class="col-sm-9 text-start">
          Please schedule appointments 
          <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9" target="_blank">online</a>
        </dd>

        <dt class="col-sm-3 text-start">Typical Documents Needed</dt>
        <dd class="col-sm-9 text-start">
          Letter of Admission<br>
          Proof of Financing<br>
          Proof of Health Insurance<br>
          Rental Agreement<br>
          Letter of Tenancy (Wohnungsgeberbescheinigung)<br>
          Passport<br>
          Passport Photo
        </dd>
      </dl>
    </div>
        <section class="text-center py-4 mb-4">
          <router-link to="/resireg" class="btn btn-outline-secondary">
            Residence Registration ->
          </router-link>
        </section>
    <UniversityContacts />
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
  </div>
</template>

<script>
<<<<<<< HEAD
import AppNavbar from './components/AppNavbar.vue'
import BannerGermany from './components/BannerGermany.vue'
import InfoSection from './components/InfoSection.vue'
import UniversityContacts from './components/UniversityContacts.vue'
=======
import AppNavbar from './components/AppNavbar.vue';
import UniversityContacts from './components/UniversityContacts.vue';
import BannerGermany from './components/BannerGermany.vue';
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0

export default {
  components: {
    AppNavbar,
<<<<<<< HEAD
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
=======
    UniversityContacts,
    BannerGermany
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
  }
}
</script>

<style scoped>
<<<<<<< HEAD
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

=======
h1, h2 {
  font-weight: 600;
  color: #2c3e50;
  text-align: left;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.4rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}
</style>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
