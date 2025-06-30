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
        <h2 class="text-left">Bank Account</h2>
        <p class="definition-item text-left">If you plan on living in Germany long term, you require a German bank account (current account) (Girokonto) to rent a flat or to receive your salary via bank transfer, for instance. 
          But you will also be able to use your debit card (EC-karte) in your day-to-day life, for example, 
          to pay at the supermarket. You can use you debit card in other countries in Europe which use the euro as currency as well.
        </p>
        <div class="definition-item">
          <span class="term text-left">Suggestion Banks</span>
          <span class="description text-left">Commerzbank, Deutsche Bank, Postbank, Sparkasse 
          </span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Common Required Documents</span>
          <span class="description text-left">valid passport, residence permit (aufenthaltserlaubnis), registration certificate (Meldebschenigung), payslip (depending on the account type) 

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
