<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          OPEN A BANK ACCOUNT!
        </template>
        <template #description>
          If you plan on living in Germany long term, you'll need a German bank account (Girokonto) for renting a flat, receiving salaries, and daily transactions. Your debit card (EC-Karte) can be used throughout the eurozone.
        </template>
      </BannerGermany>
    </div>

    <div class="container-fluid">
      <div class="requirements-container">
        <dl class="row">
          <dt class="col-sm-3 text-start">Suggested Banks</dt>
          <dd class="col-sm-9 text-start">
            <ul class="list-unstyled">
              <li>Commerzbank</li>
              <li>Deutsche Bank</li>
              <li>Postbank</li>
              <li>Sparkasse</li>
              <li>Online banks: N26, Revolut</li>
            </ul>
          </dd>

          <dt class="col-sm-3 text-start">Required Documents</dt>
          <dd class="col-sm-9 text-start">
            <ul>
              <li>Valid passport</li>
              <li>Residence permit (Aufenthaltserlaubnis)</li>
              <li>Registration certificate (Meldebescheinigung)</li>
              <li>Proof of income or enrollment (depending on account type)</li>
              <li>German tax ID (Steueridentifikationsnummer)</li>
            </ul>
          </dd>
        </dl>

        <section class="d-flex justify-content-between py-4 mb-4">
          <router-link to="/health" class="btn btn-outline-secondary">
            &lt; Health Insurance
          </router-link>
          <router-link to="/enrol" class="btn btn-outline-secondary">
            Enrollment &gt;
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
  background-color: #fffefe;
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

ul {
  padding-left: 1rem;
}
</style>