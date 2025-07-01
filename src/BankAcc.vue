<template>
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
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import UniversityContacts from './components/UniversityContacts.vue';

export default {
  components: { 
    AppNavbar,
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
