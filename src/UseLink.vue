<template>
  <div class="app">
    <AppNavbar />
    <BannerGermany>
      <template #title>
        Useful Links
      </template>
      <template #description>
        As an international student in Germany, having the right resources at your fingertips
        can make all the difference. We've put together a collection of helpful links to guide you through student
        life. </template>
    </BannerGermany>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-md-7">
          <dl class="row">
            <dt class="col-sm-5 text-start"><a href="https://www.studydrive.net/de/" target="_blank">Studydrive</a></dt>
            <dd class="col-sm-7 text-start">
              A collaborative online platform where students from various universities can exchange study materials,
              including
              lecture notes, summaries, past exams, and assignments. It also offers community forums, career advice, and
              access
              to internship or job postings, making it a valuable academic and professional resource for university
              students.
            </dd>

            <dt class="col-sm-5 text-start"><a href="https://www.uni-due.de/hochschulsport/"
                target="_blank">Hochschulsport</a>
            </dt>
            <dd class="col-sm-7 text-start">
              The university sports portal that provides access to a wide range of athletic and fitness activities.
              These
              programs often include team sports, fitness classes, martial arts, outdoor adventures, and wellness
              events.
              It's a
              great way for students to stay active, meet peers, and balance academic life with physical well-being.
            </dd>

            <dt class="col-sm-5 text-start"><a href="https://www.make-it-in-germany.com/de/" target="_blank">Make it in
                Germany</a></dt>
            <dd class="col-sm-7 text-start">
              An official government portal that offers comprehensive information for skilled professionals from abroad
              who
              wish
              to work, study, or live in Germany. It includes detailed guidance on visa requirements, job opportunities,
              recognition of foreign qualifications, living conditions, and integration support.
            </dd>

            <dt class="col-sm-5 text-start"><a href="https://anabin.kmk.org/cms/public/startseite"
                target="_blank">Anabin
                Portal</a></dt>
            <dd class="col-sm-7 text-start">An official database maintained by the German government to assess and
              verify
              the
              equivalency of foreign educational qualifications. It helps individuals determine whether their university
              degrees
              are recognized in Germany, which is essential for employment, further study, or visa applications.
            </dd>

            <dt class="col-sm-5 text-start"><a href="https://bamf-navi.bamf.de/de/" target="_blank">BAMF-Navi</a></dt>
            <dd class="col-sm-7 text-start">
              A location-based tool provided by the Federal Office for Migration and Refugees (BAMF) to help users find
              the
              appropriate foreigner authorities ("Ausländerbehörde") and integration services in their region. It also
              provides
              contact information and directions, making it easier for international residents to access important
              administrative support.
            </dd>
          </dl>
          <section class="d-flex justify-content-between py-4 mb-4">
            <router-link to="/exam" class="btn btn-outline-secondary">
              &lt; Exam Information
            </router-link>
            <router-link to="/house" class="btn btn-outline-secondary">
              Housing and Dormitories &gt;
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

    AppNavbar,
    UniversityContacts,
    BannerGermany
  }
}
</script>


<style scoped>
.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contacts-section {
  background-color: #005293;
  margin-top: 2rem;
}

.btn-outline-secondary {
  border-color: #005293;
  color: #005293;
}

.btn-outline-secondary:hover {
  background-color: #005293;
  color: white;
}

h1,
h2 {
  font-weight: 600;
  color: #2c3e50;
  text-align: left;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

dl {
  margin-top: 1rem;
}

dt {
  font-weight: 600;
  padding-top: 0.5rem;
}

ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}
</style>