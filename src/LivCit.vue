<template>
  <div class="container-fluid">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">Living</h1>
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

    <dt class="col-sm-3 text-start">Duisburg</dt>
    <dd class="col-sm-9 text-start">
      &#x2022; <a href="https://www.uni-due.de/erstsemester/leben_in_duisburg.php" target="_blank">Interesting Locations and Attractions</a> <br>
      &#x2022; <a href="https://www.duisburgkontor.de/events/veranstaltungskalender/" target="_blank">Event Calender</a> <br>
      &#x2022; <a href="https://www.dvg-duisburg.de" target="_blank">Public Transport</a> <br>
    </dd>

    <dt class="col-sm-3 text-start">Essen</dt>
    <dd class="col-sm-9 text-start">
      &#x2022; <a href="https://www.uni-due.de/erstsemester/leben_in_essen.php" target="_blank">Interesting Locations and Attractions</a> <br>
      &#x2022; <a href="https://pages.visitessen.de/de/visitessen/streaming_event/search/Event/mode:next_months,3/sort:chronological" target="_blank">Event Calender</a> <br>
      &#x2022; <a href="https://www.ruhrbahn.de" target="_blank">Public Transport</a> <br>
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
