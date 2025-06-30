<template>
  <div class="container-fluid px-3 py-4">
    <section class="page-header text-center py-4 mb-4">
      <h1 class="display-5">Visa Application Requirements</h1>
      <router-link to="/" class="btn btn-outline-secondary">
        ← Back to First Steps
      </router-link>
    </section>

    <div class="requirements-container">
      <VisaInfoSection 
        title="University Admission (Zulassung)"
        :items="[
          { 
            title: 'Official Admission Letter', 
            description: 'Your original Zulassungsbescheid from the German university' 
          },
          { 
            title: 'Why needed', 
            description: 'Proves you have been accepted to a recognized educational institution' 
          }
        ]"
      />
      
      <!-- Add more sections as needed -->
    </div>
  </div>
</template>

<script>
import VisaInfoSection from './components/VisaInfoSection.vue'

export default {
  components: { VisaInfoSection }
}
</script>

<style scoped>
.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .page-header {
    border-radius: 0;
    margin-left: -1rem;
    margin-right: -1rem;
  }
}
</style>
