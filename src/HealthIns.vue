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

      <div class="section">
        <h2 class="text-left">Health Insurance (Krankenversicherung)</h2>
        <p class="definition-item text-left">In order to enrol in their selected course of study, prospective students require statutory health insurance provider. Enrolment is only possible when a notification regarding your insurance status has been received from a statutory health insurance provider.
        </p>
        <div class="definition-item">
          <span class="term text-left">Staturory Health Insurance</span>
          <span class="description text-left">You can find list of insurance <a href="https://www.gkv-spitzenverband.de/service/krankenkassenliste/krankenkassen.jsp" target="_blank">here.</a> 
          Most used by students are TK, AOK Rheinland/Hamburg - Die Gesundheitskasse, DAK-Gesundheit.
          </span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Cost Estimate</span>
          <span class="description text-left">≈ €110-120/month for students under 30 with public insurance</span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Liability Insurance (optional)</span>
          <span class="description text-left">Liability insurance Haftpflichtversicherung pays if you damage or destroy another person's belongings. For example, if you break a vase or spill coffee on a friend's smartphone. Most Germans have that kind of insurance because it is inexpensive and protects you from having to pay for the damage with your own money.
            There are many options to choose from the Internet.
          </span>
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
