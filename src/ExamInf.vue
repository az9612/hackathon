<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Examination Information</h1>
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
    <dt class="col-sm-3 text-start">Registration</dt>
    <dd class="col-sm-9 text-start">
      You can find the steps to register an exam
      <a href="https://opencast.uni-due.de/paella/ui/watch.html?id=3630878e-9ec9-4be1-b46a-fd35a3792d3d" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-3 text-start">Dates</dt>
    <dd class="col-sm-9 text-start">
        Examination dates are usually published 2 months before the examination.
        You can find the dates in your     
      <a href="https://campus.uni-due.de/cm/pages/cs/sys/portal/hisinoneStartPage.faces" target="_blank">HisInOne portal.</a>
    </dd>

    <dt class="col-sm-3 text-start">Module Handbook</dt>
    <dd class="col-sm-9 text-start">
      It is useful to read the module handbook for your degree.
      It contains list of examination and regulations to pass your
      subjects and examinations
      It can be accessed
      <a href="https://www.uni-due.de/iw/de/studium/modulhandbuch24.php" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-3 text-start">Institutes</dt>
    <dd class="col-sm-9 text-start">
      To learn more about each institutes in Faculty of Engineering,
      you can watch the video of our professors, where they introduce their institutes 
      <a href="https://www.uni-due.de/iw/en/study/freshmen.php" target="_blank">here.</a>
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
