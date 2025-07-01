<template>
  <div class="app">
    <AppNavbar />
    <div class="container-sm w-75">
      <div class="row mb-4">
        <div class="col-9">
          <h1 class="display-5 text-start">University Online Services</h1>
        </div>
      </div>
  <div class="row mb-4">
  <h5 class="text-start"></h5>
  </div>
  <dl class="row">
    <dt class="col-sm-3 text-start">HisInOne</dt>
    <dd class="col-sm-9 text-start">
      It is the student and examination administration center.
      You can register examinations and courses according to your module.
      You can also find your certificates, personal dta and payment informations here.
      It can be accessed
      <a href="https://www.uni-due.de/studierendensekretariat/einschreibungsfristen.php" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-3 text-start">LSF</dt>
    <dd class="col-sm-9 text-start">
      It is the UDE's online course catalogue with time and location plan. It is used to manage courses, people and rooms.
      It can be accessed
      <a href="https://www.uni-due.de/studierendensekretariat/einschreibungsfristen.php" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-3 text-start">Moodle</dt>
    <dd class="col-sm-9 text-start">
      It is a learning platform that offers virtual seminar rooms where lecturers can distribute materials, provide organisational
      information and set tasks. Students can use a variety of tools to become active and interact with each other,from contributing to chats and forum discussions to answering quizzes and tests.      It can be accessed
      You can log in to Moodle using your university ID and password. No additional registration is required. 
      It can be accessed
      <a href="https://lehre.moodle.uni-due.de" target="_blank">here.</a>
    </dd>

    <dt class="col-sm-3 text-start">myUDE-Apps</dt>
    <dd class="col-sm-9 text-start">
      You can find <br>
        &#x2022; Library catalogue search <br>
        &#x2022; Germany semester ticket <br>
        &#x2022; Menus for the canteens and cafeterias <br>
        &#x2022; News from the university <br>
      <a href="https://apps.apple.com/de/app/myude/id6469146657" target="_blank">For IOS</a> <br>
      <a href="https://play.google.com/store/apps/details?id=de.uni_due.myude&pli=1" target="_blank">For Android</a> <br>
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