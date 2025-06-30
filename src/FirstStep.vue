<template>
  <div class="container-fluid">
    <AppNavbar />
    <!-- Hero Section -->
    <section class="hero-banner text-center text-white  py-5">
      <h1 class="display-1">Welcome to Germany!</h1>
      <p class="lead">Essential information for your first weeks</p>
    </section>

    <!-- Accordion Container -->
    <div class="accordion-container">
      <InfoCard 
        title="Visa Application"
        :steps="visaSteps"
        linkPath="/visa"
      />
      <InfoCard 
        title="Residence Registration"
        :steps="registrationSteps"
        linkPath="/resireg"
      />
      <InfoCard 
        title="Health Insurance"
        :steps="insuranceSteps"
        linkPath="/health"
      />
      <InfoCard 
        title="Bank Account"
        :steps="bankSteps"
        linkPath="/bank"
      />
    </div>

    <!-- Emergency Contacts -->
    <section class="emergency-contacts">
      <h2 class="text-center mb-3">Important Contacts</h2>
      <ul class="list-unstyled text-center">
        <li><strong>Police:</strong> 110</li>
        <li><strong>Fire/Ambulance:</strong> 112</li>
        <li><strong>Medical on-call service:</strong> 116 117</li>
      </ul>
    </section>
  </div>
</template>

<script>
import InfoCard from './components/InfoCard.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { 
    InfoCard,
    AppNavbar
    },
  data() {
    return {
      visaSteps: [
        'Gather the required documents',
        'Schedule an appointment at the local foreign`s office ',
        'Attend visa appointment',
        'Wait for processing'
      ],
      registrationSteps: [
        'Find accommodation',
        'Book appointment with Resident`s Registration Office',
        'Prepare the documentation',
        'Attend the appointment',
        'Receive the proof of residence Meldebescheinigung'
      ],
      insuranceSteps: [
        'Choose between public or private insurance',
        'Compare providers (TK, AOK, etc.)',
        'Sign up within first 3 months',
        'Receive your insurance card'
      ],
      bankSteps: [
        'Choose a bank (Sparkasse, Deutsche Bank, etc.)',
        'Prepare the documents',
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

.accordion-container {
  max-width: 700px;
  margin: 0 auto 2rem;
}

.emergency-contacts {
  background: #fff8f8;
  border-radius: 20px;
  padding: 1.5rem;
  max-width: 500px;
  margin: 2rem auto 0;
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 1.5rem !important;
    border-radius: 0 0 20px 20px;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  
  .accordion-container,
  .emergency-contacts {
    width: 95% !important;
  }
}
</style>
