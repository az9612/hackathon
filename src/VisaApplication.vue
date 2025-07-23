<template>
  <div class="app">
    <AppNavbar />
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
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-md-7">
          <dl class="row">
            <dt class="col-sm-3 text-start">Duisburg</dt>
            <dd class="col-sm-9 text-start">
              Fill in the online application at the
              <a href="https://www.duisburg.de/allgemein/fachbereiche/33/online-antraege-der-auslaenderbehoerde.php#/#bueOverview"
                target="_blank">
                Foreign's office website
              </a>. UDE students can also contact the Immigration Office Duisburg directly every second Tuesday via this
              <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzAwNzQ0NGItMDY5Yi00YmUxLWE1MTUtMTMwYjQxYjY3NjE3%40thread.v2/0?context=%7b%22Tid%22%3a%221fe81f8a-14a2-4f29-a738-2f3ffcb77915%22%2c%22Oid%22%3a%22d6cbd25d-e7c0-47f9-840d-98c68132ce64%22%7d"
                target="_blank">link</a>.
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
          <section class="text-center py-4 mb-4">
            <router-link to="/resireg" class="btn btn-outline-ude">
              Residence Registration ->
            </router-link>
          </section>
        </div>
      </div>

    </div>

    <UniversityContacts />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import UniversityContacts from './components/UniversityContacts.vue';
import BannerGermany from './components/BannerGermany.vue';

export default {
  components: {
    AppNavbar,
    UniversityContacts,
    BannerGermany
  }
}
</script>

<style scoped>
dl {
  margin-top: 2rem;
}

dt {
  font-weight: 600;
  color: #2c3e50;
  padding-top: 0.5rem;
}

dd {
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}
</style>
