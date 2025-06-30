<template>
  <div class="container-fluid">
    <AppNavbar />
    <section class="page-header text-center py-4 mb-4">
      <h1 class="display-5 text-left"></h1>
      <router-link to="/" class="btn btn-outline-secondary">
        ← Back to Homepage
      </router-link>
    </section>

    <div class="requirements-container">
      <!-- University Admission Section -->
      <div class="section">
        <h2 class="text-left">Residence Registration</h2>
        <h5 class="definition-item text-left">Everyone who moves to Germany must register at their new place of residence within 14 days. If the city administration does not provide any appointments within 14 days, please schedule the earliest possible appointment. </h5>
        <div class="definition-item">
          <span class="term text-left">Duisburg</span>
          <span class="description text-left">All international students can register with the Citizens' Service (Bürgeramt) of the City of Duisburg. Please schedule an appointment   
            <a href="http://www.duisburg.de/allgemein/fachbereiche/90/terminvereinbarung-buergerservice.php" target="_blank">here</a> (see "Anmeldung von ausländischen Staatsangehörigen").
            </span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Essen</span>
          <span class="description text-left">Citizens of EU and EEA member states can schedule their appointments 
            <a href="https://termine.essen.de/?link=3211" target="_blank">here</a> (see "Anmeldung in Essen") and go to the so-called Bürgeramt. Citizens of other states need to contact the Immigration Office via email.  
            <span class="text-primary">studententermine@abh.essen.de</span></span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Mülheim an der Ruhr</span>
          <span class="description text-left">Please schedule appointments
            <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9 " target="_blank">online</a></span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Typical documents needed</span>
          <span class="description text-left">Passport</span>
          <span class="description text-left">Letter of tenancy (Wohnungsgeberbescheinigung)</span>
          <span class="description text-left">Current certificate of enrolment</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import VisaInfoSection from './components/VisaInfoSection.vue'
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { 
    //VisaInfoSection,
    AppNavbar
   }
}
</script>

=======

<style scoped>
.container-fluid {
  background-color: #fffefe;
}

.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: left;
}

.section {
  margin-bottom: 2.5rem;
}

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

.definition-item {
  display: flex;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.term {
  font-weight: 500;
  min-width: 160px;
  color: #34495e;
  padding-right: 1rem;
  text-align: left;
}

.description {
  color: #7f8c8d;
  flex: 1;
  text-align: left;
}

@media (max-width: 768px) {
  .page-header {
    border-radius: 0;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .definition-item {
    flex-direction: column;
  }
  
  .term {
    margin-bottom: 0.3rem;
    min-width: auto;
  }
}

/* Force all text to align left */
.text-left {
  text-align: left !important;
}
</style>
