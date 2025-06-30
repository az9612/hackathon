<template>
  <div class="container-fluid">
      <AppNavbar/>
  <div class="container-fluid px-3 py-4">
    <!-- Hero Section -->
    <section class="hero-banner text-center py-5">
      <h1 class="display-4">Welcome to Germany</h1>
      <p class="lead">Essential information for your first weeks</p>
    </section>

    <!-- Accordion Container -->
    <div class="accordion w-75 mx-auto" id="infoAccordion">
      <InfoCard 
        title="Visa Application"
        :steps="visaSteps"
        linkPath="/visa-Application"
      />
      <InfoCard 
        title="Residence Registration"
        :steps="registrationSteps"
        linkPath="/residence-Registration"
      />
      <InfoCard 
        title="Health Insurance"
        :steps="insuranceSteps"
        linkPath="/health-insurance"
      />
      <InfoCard 
        title="Bank Account"
        :steps="bankSteps"
        linkPath="/bank-Account"
      />
    </div>

    <!-- Emergency Contacts -->
    <section class="emergency-contacts p-4 w-75 mx-auto mt-4">
      <h2 class="text-center mb-3">Important Contacts</h2>
      <ul class="list-unstyled text-center">
        <li><strong>Police:</strong> 110</li>
        <li><strong>Fire/Ambulance:</strong> 112</li>
        <li><strong>Medical on-call service:</strong> 116 117</li>
      </ul>
    </section>
  </div>
  </div>

</template>

<script>
import InfoCard from './components/InfoCard.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {

    name: 'FirstStep',
    components: { 
        InfoCard,
        AppNavbar
     },
    data() {
        return {
        visaSteps: [
        'Determine which visa type you need',
        'Gather required documents',
        'Schedule an appointment at the embassy',
        'Attend visa interview',
        'Wait for processing'
      ],
      registrationSteps: [
        'Find accommodation',
        'Book Anmeldung appointment',
        'Bring passport and rental contract',
        'Receive Meldebescheinigung'
      ],
      insuranceSteps: [
        'Choose between public or private insurance',
        'Compare providers (TK, AOK, etc.)',
        'Sign up within first 3 months',
        'Receive your insurance card'
      ],
      bankSteps: [
        'Choose a bank (Sparkasse, Deutsche Bank, etc.)',
        'Prepare passport and Anmeldung',
        'Open account (often free for students)',
        'Set up online banking'
      ]
        }
    }
}
</script>

<style scoped>
.hero-banner {
  background: #6097d6;
  border-radius: 20px;
  margin-bottom: 2rem;
  padding: 2rem;
  color: white;
}

.emergency-contacts {
  background: #fff8f8;
  border-radius: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-banner {
    padding: 1.5rem !important;
    border-radius: 0 0 20px 20px;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  
  .accordion, .emergency-contacts {
    width: 95% !important;
  }
  
  h1.display-4 {
    font-size: 2rem;
  }
}
</style>
