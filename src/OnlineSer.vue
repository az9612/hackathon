<template>
  <div class="app">
    <AppNavbar />
    <BannerGermany>
      <template #title>
        University Online Services
      </template>
      <template #description>
        Welcome to your digital hub for learning and student life!
        From accessing course materials on Moodle to registering for exams and managing your student account, everything
        you need is just a few clicks away.
      </template>
    </BannerGermany>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-md-7">
          <dl class="row">
            <dt class="col-sm-3 text-start">HisInOne</dt>
            <dd class="col-sm-9 text-start">
              It is the student and examination administration center.
              You can register examinations and courses according to your module.
              You can also find your certificates, personal dta and payment informations here.
              It can be accessed
              <a href="https://www.uni-due.de/studierendensekretariat/einschreibungsfristen.php"
                target="_blank">here.</a>
            </dd>

            <dt class="col-sm-3 text-start">LSF</dt>
            <dd class="col-sm-9 text-start">
              It is the UDE's online course catalogue with time and location plan. It is used to manage courses, people
              and
              rooms.
              It can be accessed
              <a href="https://www.uni-due.de/studierendensekretariat/einschreibungsfristen.php"
                target="_blank">here.</a>
            </dd>

            <dt class="col-sm-3 text-start">Moodle</dt>
            <dd class="col-sm-9 text-start">
              It is a learning platform that offers virtual seminar rooms where lecturers can distribute materials,
              provide
              organisational
              information and set tasks. Students can use a variety of tools to become active and interact with each
              other,from
              contributing to chats and forum discussions to answering quizzes and tests. It can be accessed
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
              <a href="https://plagity.google.com/store/apps/details?id=de.uni_due.myude&pli=1" target="_blank">For
                Android</a>
              <br>
            </dd>
          </dl>
          <section class="d-flex justify-content-between py-4 mb-4">
            <router-link to="/enrol" class="btn btn-outline-ude">
              &lt; Enrollment
            </router-link>
            <router-link to="/exam" class="btn btn-outline-ude">
              Exam Information &gt;
            </router-link>
          </section>
        </div>
      </div>
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
    //VisaInfoSection,
    AppNavbar,
    UniversityContacts,
    BannerGermany
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
