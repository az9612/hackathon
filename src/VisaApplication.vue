<template>
  <div class="container-fluid">
    <AppNavbar />
    <section class="page-header text-center py-4 mb-4">
      <h1 class="display-5 text-left">Visa Application Requirements</h1>
      <router-link to="/" class="btn btn-outline-secondary">
        ← Back to First Steps
      </router-link>
    </section>

    <div class="requirements-container">
      <!-- University Admission Section -->
      <div class="section">
        <h2 class="text-left">University Admission (Zulassung)</h2>
        <div class="definition-item">
          <span class="term text-left">Official Admission Letter</span>
          <span class="description text-left">Your original Zulassungsbescheid from the German university</span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Why needed</span>
          <span class="description text-left">Proves you have been accepted to a recognized educational institution</span>
        </div>
      </div>
      
      <!-- Health Insurance Section -->
      <div class="section">
        <h2 class="text-left">Health Insurance (Krankenversicherung)</h2>
        <div class="definition-item">
          <span class="term text-left">Proof of Coverage</span>
          <span class="description text-left">Confirmation letter from a German public health insurer or comparable international coverage</span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Why needed</span>
          <span class="description text-left">German law requires all residents to have health insurance. Without proof, your visa application will be rejected.</span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Types Accepted</span>
          <span class="description text-left">Public (gesetzlich) or private (privat) insurance. Students under 30 typically need public insurance.</span>
        </div>
        <div class="definition-item">
          <span class="term text-left">Cost Estimate</span>
          <span class="description text-left">≈ €110-120/month for students under 30 with public insurance</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisaInfoSection from './components/VisaInfoSection.vue'
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { 
    VisaInfoSection,
    AppNavbar
   }
}
</script>

=======

<style scoped>
.container-fluid {
  background-color: #fff;
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
