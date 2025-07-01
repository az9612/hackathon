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

  <div class="app">
    <AppNavbar />
    <div class="container-sm w-75 h-75% my-5">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Bank Account</h1>
        </div>
      </div>

      <div class="row mb-4">
        <h5 class="text-start">
          If you plan on living in Germany long term, you require a German bank account (current account) (Girokonto) to rent a flat or to receive your salary via bank transfer, for instance. 
          But you will also be able to use your debit card (EC-karte) in your day-to-day life, for example, 
          to pay at the supermarket. You can use your debit card in other countries in Europe which use the euro as currency as well.
        </h5>
      </div>

      <dl class="row">
        <dt class="col-sm-3 text-start">Suggested Banks</dt>
        <dd class="col-sm-9 text-start">Commerzbank, Deutsche Bank, Postbank, Sparkasse</dd>

        <dt class="col-sm-3 text-start">Common Required Documents</dt>
        <dd class="col-sm-9 text-start">
          valid passport<br>
          residence permit (Aufenthaltserlaubnis)<br>
          registration certificate (Meldebescheinigung)<br>
          payslip (depending on the account type)
        </dd>
      </dl>
    </div>
    <UniversityContacts />

  </div>
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

