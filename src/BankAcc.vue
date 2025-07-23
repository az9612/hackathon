<template>
  <div>
    <AppNavbar />
    <BannerGermany>
      <template #title>
        OPEN A BANK ACCOUNT!
      </template>
      <template #description>
        If you plan on living in Germany long term, you'll need a German bank account (Girokonto) for renting a flat,
        receiving salaries, and daily transactions. Your debit card (EC-Karte) can be used throughout the eurozone.
      </template>
    </BannerGermany>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-md-7">
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
                <li>Proof of income or enrollment</li>
                <li>German tax ID (Steueridentifikationsnummer)</li>
              </ul>
            </dd>
          </dl>

          <section class="d-flex justify-content-between py-4 mb-4">
            <router-link to="/health" class="btn btn-outline-ude">
              &lt; Health Insurance
            </router-link>
            <router-link to="/enrol" class="btn btn-outline-ude">
              Enrollment &gt;
            </router-link>
          </section>
        </div>
      </div>
    </div>
      <UniversityContacts />
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
dl {
  margin-top: 2rem;
}

dt {
  font-weight: 600;
  color: #2c3e50;
  padding-top: 0.5rem;
}

dd {
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

</style>
