<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Accomodation</h1>
        </div>
        <div class="col-3">
        <router-link to="/study" class="btn btn-outline-secondary ">
          ← Back to Previous Page
        </router-link>
        </div>
      </div>
  <div class="row mb-5">
  <h5 class="text-start">Most students lives in a shared student housing with 2-3 other people.</h5>
  </div>
  <dl class="row">

    <dt class="col-sm-5 text-start">Student Union Essen-Duisburg (STW Essen-Duisburg)</dt>
    <dd class="col-sm-7 text-start">
      A lot of student lives here, as the housings are near campuses. They are 3 locations to choose from,
      Duisburg, Essen and Mülheim an der Ruhr. It is wise to choose the housing locations based on
      your course campus.
      You can find the options
      <a href="https://www.stw-edu.de/en/accommodation/student-residences" target="_blank">here.</a>
      As they are very in demand, make sure you register early. You can register
      <a href="https://www.stw-edu.de/en/accommodation/onlineapplication" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-5 text-start">Apartment Search Portal</dt>
    <dd class="col-sm-7 text-start">
      You can also find other single or shared apartments online.
      These are some of the most used websites: <br>
      &#x2022; <a href="https://www.wg-gesucht.de" target="_blank">wg-gesucht</a> <br>
      &#x2022; <a href="https://www.kleinanzeigen.de/s-wohnung-mieten/duisburg/c203l2131" target="_blank">kleinanzeige</a> <br>
      &#x2022; <a href="https://www.immobilienscout24.de/" target="_blank">immobilien Scout 24</a> <br>
    </dd>

    <dt class="col-sm-5 text-start">TV and radio license fees</dt>
    <dd class="col-sm-7 text-start">
      In Germany, you have to pay a fee (around €18 per month) to the public-law contribution service of ARD, ZDF and Deutschlandradio for radio,
      TV and the internet, known as the “GEZ fee”. All residents must register individually. The fee is charged per flat regardless of the number of occupants. 
      Even if you do not use the services or do not have a TV, you still have to pay the fee.
      After you move in, you will receive a letter from the contribution service containing a declaration of registration.
      You will find more information on registration
      <a href="https://www.rundfunkbeitrag.de/buergerinnen_und_buerger/formulare/index_ger.html" target="_blank">here.</a> <br>
    </dd>
    
  </dl> 
    </div>
  </div>
</template>

<script>
//import VisaInfoSection from './components/VisaInfoSection.vue'
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { 
    //VisaInfoSection,
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
