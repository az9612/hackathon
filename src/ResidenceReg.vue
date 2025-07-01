<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          RESIDENCE REGISTRATION
        </template>
        <template #description>
          Everyone who moves to Germany must register at their new place of residence within 14 days.
          If appointments aren't available within this period, schedule the earliest possible one.
        </template>
      </BannerGermany>
    </div>


    <div class="container-sm w-50 my-5">
        <dl class="row">
          <dt class="col-sm-3 text-start">Duisburg</dt>
          <dd class="col-sm-9 text-start">
            Register with the Citizens' Service (Bürgeramt). Schedule appointment 
            <a href="http://www.duisburg.de/allgemein/fachbereiche/90/terminvereinbarung-buergerservice.php" 
              target="_blank">here</a> (select "Anmeldung von ausländischen Staatsangehörigen").
          </dd>

          <dt class="col-sm-3 text-start">Essen</dt>
          <dd class="col-sm-9 text-start">
            EU/EEA citizens: Schedule 
            <a href="https://termine.essen.de/?link=3211" target="_blank">here</a> ("Anmeldung in Essen").<br>
            Others email: <span class="text-primary">studententermine@abh.essen.de</span>
          </dd>

          <dt class="col-sm-3 text-start">Mülheim an der Ruhr</dt>
          <dd class="col-sm-9 text-start">
            Schedule <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9" target="_blank">online</a>
          </dd>

          <dt class="col-sm-3 text-start">Required Documents</dt>
          <dd class="col-sm-9 text-start">
            <ul>
              <li>Valid passport</li>
              <li>Letter of tenancy (Wohnungsgeberbescheinigung)</li>
              <li>Current certificate of enrolment</li>
              <li>Completed registration form</li>
            </ul>
          </dd>
        </dl>
      </div>

        <section class="d-flex justify-content-between py-4 mb-4">
          <router-link to="/visa" class="btn btn-outline-secondary">
            &lt; Visa Application
          </router-link>
          <router-link to="/health" class="btn btn-outline-secondary">
            Health Insurance &gt;
          </router-link>
        </section>

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

.text-primary {
  color: #007bff;
}
</style>