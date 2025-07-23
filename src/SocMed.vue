<template>
  <div>
    <AppNavbar />
    <BannerGermany>
      <template #title>
        YOUR WINDOW TO CAMPUS LIFE
      </template>
      <template #description>
        Follow our social channels to experience campus events, student stories, and academic highlights!
      </template>
    </BannerGermany>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-sm-10">
          
        <!-- University Section with Image -->
        <div class="row align-items-center mb-5 g-4">
          <div class="col-md-6">
            <div class="social-section p-4 h-100">
              <h3 class="social-header">
                <i class="bi bi-building"></i> University Official
              </h3>
              <p class="social-description">
                Get the big picture of campus life - from graduation ceremonies to international student welcome events.
              </p>
              <div class="social-links">
                <a href="https://www.instagram.com/uni_duisburg_essen" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i> Instagram:
                  <span class="link-description">See campus tours and event highlights</span>
                </a>
                <a href="https://www.tiktok.com/@unidue" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i> TikTok:
                  <span class="link-description">Campus challenges and student takeovers</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/campus-event1.jpg" alt="University campus event"
              class="img-fluid rounded shadow activity-image">
          </div>
        </div>

        <!-- Faculty Section with Image -->
        <div class="row align-items-center mb-5 g-4 flex-md-row-reverse">
          <div class="col-md-6">
            <div class="social-section p-4 h-100">
              <h3 class="social-header">
                <i class="bi bi-cpu"></i> Faculty of Engineering
              </h3>
              <p class="social-description">
                Where innovation comes to life - see robot competitions, lab tours, and student project demos.
              </p>
              <div class="social-links">
                <a href="http://www.instagram.com/fiw.ude/" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i> Instagram:
                  <span class="link-description">Project showcases and achievement highlights</span>
                </a>
                <a href="https://www.tiktok.com/@iw_ude" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i> TikTok:
                  <span class="link-description">60-second engineering marvels</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/engineering-activities.jpg" alt="Students working in engineering lab"
              class="img-fluid rounded shadow activity-image">
          </div>
        </div>

        <!-- Student Council Section with Image Grid -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="social-section p-4">
              <h3 class="social-header">
                <i class="bi bi-people"></i> ISE Student Council
              </h3>
              <p class="social-description">
                The real student experience - from orientation week to late-night study sessions.
              </p>
              <div class="social-links mb-3">
                <a href="http://www.instagram.com/fachschaft.ise/" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i> Instagram:
                  <span class="link-description">Unfiltered campus life and event announcements</span>
                </a>
              </div>

              <!-- Image Grid -->
              <div class="row g-3">
                <div class="col-md-4">
                  <img src="@/assets/university-activities.jpg" alt="Student orientation event"
                    class="img-fluid rounded shadow-sm gallery-image">
                </div>
                <div class="col-md-4">
                  <img src="@/assets/student-council-activities.jpg" alt="Study group session"
                    class="img-fluid rounded shadow-sm gallery-image">
                </div>
                <div class="col-md-4">
                  <img src="@/assets/campus-event3.jpg" alt="Campus festival"
                    class="img-fluid rounded shadow-sm gallery-image">

                </div>
              </div>
            </div>
          </div>

          <!-- Campus Highlights Carousel -->
          <div class="row mb-5">
            <div class="col-12">
              <div class="social-section p-4">
                <h3 class="social-header text-center mb-4">
                  <i class="bi bi-stars"></i> Campus Highlights
                </h3>
                <div class="row g-3">
                  <div class="col-md-3 col-6">
                    <img src="@/assets/campus-event1.jpg" class="img-fluid rounded shadow-sm highlight-image">
                  </div>
                  <div class="col-md-3 col-6">
                    <img src="@/assets/campus-event2.jpg" class="img-fluid rounded shadow-sm highlight-image">
                  </div>
                  <div class="col-md-3 col-6">
                    <img src="@/assets/engineering-activities.jpg" class="img-fluid rounded shadow-sm highlight-image">
                  </div>
                  <div class="col-md-3 col-6">
                    <img src="@/assets/student-council-activities.jpg"
                      class="img-fluid rounded shadow-sm highlight-image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="d-flex justify-content-between py-4 mb-4">
          <router-link to="/house" class="btn btn-outline-ude">
            &lt; Hosuing and Dormitories
          </router-link>
          <router-link to="/living" class="btn btn-outline-ude">
            Culture &gt;
          </router-link>
        </section>
      
        </div>
      </div>
      <UniversityContacts />

    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import BannerGermany from './components/BannerGermany.vue'
import UniversityContacts from './components/UniversityContacts.vue'

export default {
  components: {
    AppNavbar,
    BannerGermany,
    UniversityContacts
  }
}
</script>

<style scoped>
.social-section {
  background-color: #f8f9fa;
  border-left: 4px solid #005293;
  height: 100%;
}

.activity-image {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.activity-image:hover {
  transform: scale(1.02);
}

.gallery-image,
.highlight-image {
  height: 180px;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

.gallery-image:hover,
.highlight-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.social-header {
  color: #005293;
  font-weight: 600;
}

.social-description {
  color: #495057;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #212529;
  text-decoration: none;
}

.social-link:hover {
  color: #005293;
}

.link-description {
  font-size: 0.9rem;
  color: #6c757d;
}

/* .requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
} */

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

.activity-image {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.activity-image:hover {
  transform: scale(1.02);
}

.gallery-image,
.highlight-image {
  height: 180px;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

.gallery-image:hover,
.highlight-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.social-header {
  color: #005293;
  font-weight: 600;
}

.social-description {
  color: #495057;
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
