<template>
  <div class="app">
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          Useful Links
        </template>
      <template #description>
        As an international student in Germany, having the right resources at your fingertips
        can make all the difference. We've put together a collection of helpful links to guide you through student life.      </template>
      </BannerGermany>
    </div>
    <div class="container-sm w-50 my-5">
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
