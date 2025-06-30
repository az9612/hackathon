<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <!-- Page Header -->
      <div class="row mb-4">
        <h1 class="display-5 text-start">Health Insurance (Krankenversicherung)</h1>
        <div class="col-6 mx-auto">
        <router-link to="/" class="btn btn-outline-secondary ">
          ← Back to Homepage
        </router-link>
        </div>

      </div>

      <!-- Info Introduction -->
      <div class="row mb-5">
        <!-- <h2 class="fw-bold">Health Insurance</h2> -->
        <h5 class="text-start">
          In order to enrol in their selected course of study, prospective students require a statutory health insurance provider. 
          Enrolment is only possible when a notification regarding your insurance status has been received from a statutory health insurance provider.
        </h5>
      </div>

      <!-- Description List -->
      <dl class="row">
        <dt class="col-sm-3 text-start">Statutory Health Insurance</dt>
        <dd class="col-sm-9 text-start">
          You can find a list of insurance providers 
          <a href="https://www.gkv-spitzenverband.de/service/krankenkassenliste/krankenkassen.jsp" target="_blank">here</a>. 
          Most used by students are TK, AOK Rheinland/Hamburg - Die Gesundheitskasse, and DAK-Gesundheit.
        </dd>

        <dt class="col-sm-3 text-start">Cost Estimate</dt>
        <dd class="col-sm-9 text-start">
          ≈ €110–120/month for students under 30 with public insurance.
        </dd>

        <dt class="col-sm-3 text-start">Liability Insurance (optional)</dt>
        <dd class="col-sm-9 text-start">
          Liability insurance (Haftpflichtversicherung) pays if you damage or destroy another person's belongings. 
          For example, if you break a vase or spill coffee on a friend's smartphone. 
          Most Germans have this kind of insurance because it is inexpensive and protects you from having to pay for the damage with your own money.
          There are many options available online.
        </dd>
      </dl>
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
