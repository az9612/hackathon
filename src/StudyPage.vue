<template>
<<<<<<< HEAD
  <div class="container-fluid">
    <AppNavbar />
    <!-- Hero Section -->
    <section class="hero-banner text-center py-5">
      <h1 class="display-4">Welcome to Universtiy Duisburg-Essen</h1>
=======
  <div id="app">
    <AppNavbar />
    <!-- Hero Section -->

    <section class="hero-banner text-center text-dark py-5">
      <h1 class="display-4">Welcome to University Duisburg-Essen</h1>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      <p class="lead">Essential information for your first Semester</p>
    </section>

    <!-- Accordion Container -->
    <div class="accordion-container">
      <InfoCard 
        title="Einschreibung (Enrollment)"
        :steps="einschreibenSteps"
<<<<<<< HEAD
        linkPath="/einschreibungPage"
=======
        linkPath="/enrol"
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      />
      <InfoCard 
        title="Uni DUE Online Services"
        :steps="onlineServicesSteps"
<<<<<<< HEAD
        linkPath="/onlineServicesPage"
=======
        linkPath="/service"
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      />
      <InfoCard 
        title="Exams"
        :steps="examsSteps"
        linkPath="/examsPage"
      />
      <InfoCard 
        title="Relevant Links"
        :steps="linkSteps"
        linkPath="/linksPage"
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
<<<<<<< HEAD
=======
    <UniversityContacts />
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
  </div>
</template>

<script>
import InfoCard from './components/InfoCard.vue';
import AppNavbar from './components/AppNavbar.vue';
<<<<<<< HEAD
=======
import UniversityContacts from './components/UniversityContacts.vue';
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0

export default {
  components: { 
    InfoCard,
<<<<<<< HEAD
    AppNavbar
=======
    AppNavbar,
    UniversityContacts
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
    },
  data() {
    return {
      einschreibenSteps: [
<<<<<<< HEAD
        'Documents - Insurance',
        'Languangue Certificate (English or German)',
        'Registration office in SG Building',
=======
        'Prepare the documents',
        'Email the enrollment office with attachments',
        'Pay semester fee after being officially enrolled',
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        'Attend O-Woche (Orientation Week)',
        
      ],
      onlineServicesSteps: [
        'HisInOne',
        'LSF',
        'Moodle',
        'Webmail',
        'myUDE App'
      ],
      examsSteps: [
<<<<<<< HEAD
        'Where to find exam dates',
        'How to register for exams',
        'German language course',
        'module handbook and exam regulations',
        'ECTS credits and grading system'
=======
        'How to register for exams',
        'Where to find exam dates',
        'German language course',
        'Module handbook and exam regulations'
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      ],
      linkSteps: [
        'link 1',
        'Link 2',
        'Link 3',
        'Link 4'
      ]
    }
  }
}
</script>

<style scoped>
.hero-banner {
<<<<<<< HEAD
  background: #6097d6;
  border-radius: 20px;
  margin-bottom: 2rem;
=======
  background: powderblue;
  border-radius: 20px;
  margin: 1rem;
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
