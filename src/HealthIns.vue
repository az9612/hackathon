<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          Health Insurance
        </template>
        <template #description>
          In order to enrol in their selected course of study, prospective students require a statutory health insurance provider. 
          Enrolment is only possible when a notification regarding your insurance status has been received from a statutory health insurance provider.
        </template>
      </BannerGermany>
    </div>

    <div class="container-fluid">
      <div class="requirements-container">
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

        <section class="d-flex justify-content-between py-4 mb-4">
          <router-link to="/resireg" class="btn btn-outline-secondary">
            &lt; Residence Registration
          </router-link>
          <router-link to="/bank" class="btn btn-outline-secondary">
            Bank Account &gt;
          </router-link>
        </section>
      </div>
    </div>

    <section class="contacts-section py-5">
      <UniversityContacts />
    </section>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import BannerGermany from './components/BannerGermany.vue'
import UniversityContacts from './components/UniversityContacts.vue'

export default {
  components: { 
    AppNavbar,
    BannerGermany,
    UniversityContacts
  }
}
</script>

<style scoped>
.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contacts-section {
  background-color: #005293;
  margin-top: 2rem;
}

.btn-outline-secondary {
  border-color: #005293;
  color: #005293;
}

.btn-outline-secondary:hover {
  background-color: #005293;
  color: white;
}

dl {
  margin-top: 2rem;
}

dt {
  font-weight: 600;
  color: #2c3e50;
}

dd {
  margin-bottom: 1rem;
}
</style>
