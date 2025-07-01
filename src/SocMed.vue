<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Social Media</h1>
        </div>
        <div class="col-3">
        <router-link to="/study" class="btn btn-outline-secondary ">
          ← Back to Previous Page
        </router-link>
        </div>
      </div>
  <div class="row mb-5">
  <h5 class="text-start"></h5>
  </div>
  <dl class="row">
    <dt class="col-sm-3 text-start">University</dt>
    <dd class="col-sm-9 text-start">
      &#x2022; <a href="https://www.instagram.com/uni_duisburg_essen?igsh=MWFmNHFndW15ZTNmMA==" target="_blank">Instagram</a> <br>
      &#x2022; <a href="https://www.tiktok.com/@unidue?_t=ZN-8xdiZNsGLKg&_r=1" target="_blank">TikTok</a> <br>
    </dd>

    <dt class="col-sm-3 text-start">Faculty of Engineering</dt>
    <dd class="col-sm-9 text-start">
      &#x2022; <a href="http://www.instagram.com/fiw.ude/" target="_blank">Instagram</a> <br>
      &#x2022; <a href="https://www.tiktok.com/@iw_ude" target="_blank">TikTok</a> <br>
    </dd>

    <dt class="col-sm-3 text-start">ISE Student Council</dt>
    <dd class="col-sm-9 text-start">
      &#x2022; <a href="http://www.instagram.com/fachschaft.ise/" target="_blank">Instagram</a> <br>
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
