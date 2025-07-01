<template>
  <div class="app">
    <AppNavbar />
    <div class="container-fluid mb-3">
    <BannerGermany>
      <template #title>
        Jobs
      </template>
      <template #description>
        Looking to earn some extra money, gain work experience,
        or meet new people? Many international students in Germany take on part-time jobs during their studies.On this page, you’ll find helpful helpful link to find student jobs.      </template>
    </BannerGermany>
    </div>




    <div class="container-sm w-50 my-5">
      <!-- <div class="row">
        <div class="col-9">
          <h1 class="display-5 text-start">Job Listings</h1>
        </div>
        <div class="col-3">
        <router-link to="/study" class="btn btn-outline-secondary ">
          ← Back to Previous Page
        </router-link>
        </div>
      </div> -->
  <!-- <div class="row mb-5">
  <h5 class="text-start">In general, students are allowed to work up to 20 hours per week. Students can find various type of jobs online.</h5>
  </div> -->
  <dl class="row">

    <dt class="col-sm-12 text-start">&#x2022; <a href="https://www.uni-due.de/stellenmarkt/" target="_blank">Jobs at the University</a> <br></dt>
    <dt class="col-sm-12 text-start">&#x2022; <a href="https://www.zenjob.com/de/" target="_blank">Zenjob-Flexible daily student jobs</a> <br></dt>
    <dt class="col-sm-12 text-start">&#x2022; <a href="https://jobvalley.com/en-de/" target="_blank">Jobvalley-Flexible daily or long-term student jobs</a> <br></dt>


  </dl>
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

</style>


