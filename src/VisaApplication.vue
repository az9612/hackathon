<template>
  <div class="app">
    <AppNavbar />
    <div class="container-sm w-75 h-75% my-5">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Visa Application</h1>
        </div>
      </div>

      <div class="row mb-4">
        <h5 class="text-start">
          International students are required to apply for a visa/residence permit after arrival. Below are important contacts and procedures depending on your city of residence.
        </h5>
      </div>

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
    <UniversityContacts />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import UniversityContacts from './components/UniversityContacts.vue';

export default {
  components: {
    AppNavbar,
    UniversityContacts
  }
}
</script>

<style scoped>
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
