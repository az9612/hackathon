<template>
  <div class="app">
    <AppNavbar />
<<<<<<< HEAD
    <div class="container-fluid mb-3">
=======
    <div class="container-fluid mx-0 mb-3">
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
    <BannerGermany>
      <template #title>
        Residence Registration
      </template>
      <template #description>
      Everyone who moves to Germany must register at their new place of residence within 14 days.<br>
      If the city administration does not provide any appointments within 14 days, please schedule the earliest possible appointment
      </template>
    </BannerGermany>
    </div>

<<<<<<< HEAD
    <div class="container-sm w-75 h-75% my-5">
=======
    <div class="container-sm w-50 my-5">
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      <!-- <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Residence Registration (Anmeldung)</h1>
        </div>
      </div>
  <div class="row mb-4">
  <h5 class="text-start">Everyone who moves to Germany must register at their new place of residence within 14 days. If the city administration does not provide any appointments within 14 days, please schedule the earliest possible appointment. </h5>
  </div> -->
  <dl class="row">
    <dt class="col-sm-3 text-start">Duisburg</dt>
    <dd class="col-sm-9 text-start">
      All international students can register with the Citizens' Service (Bürgeramt) of the City of Duisburg. Please schedule an appointment 
      <a href="http://www.duisburg.de/allgemein/fachbereiche/90/terminvereinbarung-buergerservice.php" target="_blank">here</a> (see "Anmeldung von ausländischen Staatsangehörigen").
    </dd>

    <dt class="col-sm-3 text-start">Essen</dt>
    <dd class="col-sm-9 text-start">
      Citizens of EU and EEA member states can schedule their appointments 
      <a href="https://termine.essen.de/?link=3211" target="_blank">here</a> (see "Anmeldung in Essen") and go to the so-called Bürgeramt. Citizens of other states need to contact the Immigration Office via email: 
      <span class="text-primary">studententermine@abh.essen.de</span>
    </dd>

    <dt class="col-sm-3 text-start">Mülheim an der Ruhr</dt>
    <dd class="col-sm-9 text-start">
      Please schedule appointments 
      <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9" target="_blank">online</a>
    </dd>

    <dt class="col-sm-3 text-start">Typical documents needed</dt>
    <dd class="col-sm-9 text-start">
        Passport<br>
        Letter of tenancy (Wohnungsgeberbescheinigung)<br>
        Current certificate of enrolment <br>
    </dd>
  </dl> 
<<<<<<< HEAD

     <section class="d-flex justify-content-between py-4 mb-4">
        <router-link to="/visa" class="btn btn-outline-secondary">
          &lt; Visa Application
        </router-link>
        <router-link to="/health" class="btn btn-outline-secondary">
          Health Insurance &gt;
        </router-link>
      </section>

=======
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
    </div>
    <UniversityContacts />
  </div>
</template>

<script>
//import VisaInfoSection from './components/VisaInfoSection.vue'
import AppNavbar from './components/AppNavbar.vue';
import UniversityContacts from './components/UniversityContacts.vue';
import BannerGermany from './components/BannerGermany.vue';

export default {
  components: { 
    //VisaInfoSection,
    AppNavbar,
    UniversityContacts,
    BannerGermany
   }
}
</script>


<style scoped>
/* .container-fluid {
  background-color: #fffefe;
} */

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

<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
