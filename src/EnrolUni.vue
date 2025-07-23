<template>
  <div class="app">
    <AppNavbar />

    <BannerGermany>
      <template #title>
        Enrollment Process
      </template>
      <template #description>
        Enrolling as an international student
        is an exciting step toward starting your studies.
        This guide will walk you through the enrollment process,
        helping you prepare the necessary documents and meet all requirements to officially join your university.
      </template>
    </BannerGermany>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-11 col-md-7">
          <dl class="row">
            <dt class="col-sm-3 text-start">Email</dt>
            <dd class="col-sm-9 text-start">
              Write an Email to <span class="text-primary">einschreibung-io@uni-due.de</span>
              with subject line: Your application number and/or student ID number (if available)
            </dd>

            <dt class="col-sm-3"></dt>
            <dt class="col-sm-3 text-start">Include the Information (Zulassung)</dt>
            <dd class="col-sm-6 text-start">
              &#x2022; Full name<br>
              &#x2022; Date of birth <br>
              &#x2022; Place of birth <br>
              &#x2022; Nationality <br>
              &#x2022; Address in Germany <br>
              &#x2022; Degree you want to enrol to <br>
            </dd>

            <dt class="col-sm-3"></dt>
            <dt class="col-sm-3 text-start">Attachments</dt>
            <dd class="col-sm-6 text-start">
              &#x2022; Letter of admission<br>
              &#x2022; Passport picture (JPG) for the student ID card <br>
              &#x2022; Passport copy <br>
              &#x2022; Highest school leaving certificate or bachelor's degree certificate <br>
              &#x2022; Language certificates (German, English if applicable) <br>
              &#x2022; APS certificate for China, India and Vietnam <br>
            </dd>

            <dt class="col-sm-3 text-start">Enrollment Deadlines</dt>
            <dd class="col-sm-9 text-start">
              Please visit the
              <a href="https://www.uni-due.de/studierendensekretariat/einschreibungsfristen.php"
                target="_blank">Registrar
                Office page.</a>
            </dd>

            <dt class="col-sm-3 text-start">Semester fee</dt>
            <dd class="col-sm-9 text-start">
              The semester fee can only be paid after enrollment.
              You will receive all necessary information. Do not send any money beforehand!
              Further information about the
              <a href="https://www.uni-due.de/studierendensekretariat/sozial_studierendenschaftsbeitrag.shtml"
                target="_blank">semester fee</a>
              can be found here.
            </dd>

            <dt class="col-sm-3 text-start">Semester Ticket</dt>
            <dd class="col-sm-9 text-start">
              After enrolment, and once the semester fee has been received by the University (please allow 3 working
              days)
              you
              can use the Semester Ticket
              (Deutschlandsemesterticket) by downloading the
              <a href="https://www.uni-due.de/myude/" target="_blank">campus app.</a>
              Further information about the
              <a href="https://www.uni-due.de/faq-studium/semesterticket_en.php" target="_blank">semester ticket</a>
              can be found here.
            </dd>

            <dt class="col-sm-3 text-start">Student Identity Card</dt>
            <dd class="col-sm-9 text-start">
              All students are issued a student identity card, which can be collected from the Front Office after
              enrolment.
              The
              student identity card doubles as your library card and Mensa card with payment chip. You can use the
              identity
              card
              at the self-service stations (to print student certificates, make changes to your address, print bank
              transfer
              slips).
              The card is the property of the University of Duisburg-Essen. As a student identity card it is personal to
              you
              and
              cannot be used by anybody else.
              Further information about the
              <a href="https://www.uni-due.de/studierendensekretariat/studierendenausweis.shtml" target="_blank">student
                identity card</a>
              can be found here.
            </dd>

            <dt class="col-sm-3 text-start">User ID (Uni Kennung)</dt>
            <dd class="col-sm-9 text-start">
              All students newly enrolled at the University of Duisburg-Essen are issued a personal user identification
              and
              password after enrolment. The user ID allows you to use the University’s IT services, for example for
              access
              to
              the internet (WLAN, PC workstations, LSF electronic lecture schedule, exam registration).
              Please contact the
              <a href="https://www.uni-due.de/zim/soforthilfe/e-point/en_index.shtml" target="_blank">E-Point</a>
              if you have any questions about your user identification and the IT services, or if you have forgotten
              your
              password.
              Further information about the
              <a href="https://www.uni-due.de/studierendensekretariat/studierendenausweis.shtml" target="_blank">User
                ID</a>
              can be found here.
            </dd>
          </dl>

          <section class="d-flex justify-content-between py-4 mb-4">
            <router-link to="/bank" class="btn btn-outline-ude">
              &lt; Bank Account
            </router-link>
            <router-link to="/service" class="btn btn-outline-ude">
              Online Services &gt;
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
