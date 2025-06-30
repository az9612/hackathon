<template>
  <div class="container-fluid">
    <AppNavbar />
    <section class="page-header text-center py-4 mb-4">
      <h1 class="display-5 text-left">Visa Application</h1>
      <router-link to="/" class="btn btn-outline-secondary">
        ← Back to Homepage
      </router-link>
    </section>

    <div class="requirements-container">
      <!-- University Admission Section -->
      <div class="section">
        <h2 class="text-left">Visa Appointment</h2>
        <div class="definition-item">
          <span class="term text-left">Duisburg</span>
          <span class="description text-left">Fill in online application at the
            <a href="https://www.duisburg.de/allgemein/fachbereiche/33/online-antraege-der-auslaenderbehoerde.php#/#bueOverview" target="_blank"> Foreign's office website</a>. UDE students can also contact the Immigration Office Duisburg directly on Tuesday every 2 weeks via this 
            <a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzAwNzQ0NGItMDY5Yi00YmUxLWE1MTUtMTMwYjQxYjY3NjE3%40thread.v2/0?context=%7b%22Tid%22%3a%221fe81f8a-14a2-4f29-a738-2f3ffcb77915%22%2c%22Oid%22%3a%22d6cbd25d-e7c0-47f9-840d-98c68132ce64%22%7d" target="_blank">link.</a> You can contact the Talent Center of the City of Duisburg via the following email address: 
            <span class="text-primary">talent-center@stadt-duisburg.de</span></span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Essen</span>
          <span class="description text-left">Please schedule appointments via email: 
            <span class="text-primary">studententermine@abh.essen.de</span></span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Mülhein an der Ruhr</span>
          <span class="description text-left">Please schedule appointments
            <a href="https://terminvergabe.muelheim-ruhr.de/select2?md=9">online</a></span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Typical documents needed</span>
          <span class="description text-left">Letter of Admission </span>
          <span class="description text-left">Proof of Financing</span>
          <span class="description text-left">Proof of Health Insurance </span>
          <span class="description text-left">Rental Agreement</span>
          <span class="description text-left">Letter of tenancy (Wohnungsgeberbescheinigung)</span>
          <span class="description text-left">Passport</span>
          <span class="description text-left">Passport Photo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { 
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
    /* min-width: auto; */
  }
}

/* Force all text to align left */
.text-left {
  text-align: left !important;
}
</style>
