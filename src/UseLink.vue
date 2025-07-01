<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Useful Links</h1>
        </div>
        <div class="col-3">
        <router-link to="/study" class="btn btn-outline-secondary ">
          ← Back to Previous Page
        </router-link>
        </div>
      </div>
  <div class="row mb-5">
  <h5 class="text-start">These are some useful links for international students in Germany.</h5>
  </div>
  <dl class="row">

    <dt class="col-sm-5 text-start"><a href="https://www.studydrive.net/de/" target="_blank">Studydrive</a></dt>
    <dd class="col-sm-7 text-start">
      Forum and share documents with other students
    </dd>

    <dt class="col-sm-5 text-start"><a href="https://www.uni-due.de/hochschulsport/" target="_blank">Hochschulsport</a></dt>
    <dd class="col-sm-7 text-start">
      University sport clubs and offers
    </dd>

    <dt class="col-sm-5 text-start"><a href="https://www.make-it-in-germany.com/de/" target="_blank">Make it in Germany</a></dt>
    <dd class="col-sm-7 text-start">
      Official information for international people
    </dd>

    <dt class="col-sm-5 text-start"><a href="https://anabin.kmk.org/cms/public/startseite" target="_blank">Anabin Portal</a></dt>
    <dd class="col-sm-7 text-start">
      Information portals for certificates recognition
    </dd>

    <dt class="col-sm-5 text-start"><a href="https://bamf-navi.bamf.de/de/" target="_blank">BAMF-Navi</a></dt>
    <dd class="col-sm-7 text-start">
      Foreign authority location finder
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
