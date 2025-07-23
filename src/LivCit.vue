<template>
  <div>
    <AppNavbar />
    <div class="container-fluid mb-3">
      <BannerGermany>
        <template #title>
          Culture
        </template>
        <template #description>
        From traditional festivals and food markets to concerts, 
        museums, and neighborhood gatherings, there’s always something exciting to explore. This page will help you discover the best of local life and feel right at home in your new community.         </template>
      </BannerGermany>
    </div>

    <div class="container-fluid">
      <div class="requirements-container">
        <!-- University Section with Image -->
        <div class="row align-items-center mb-5 g-4">
          <div class="col-md-6">
            <div class="social-section p-4 h-100">
              <h3 class="social-header">
                <i class="bi bi-building"></i> Duisburg
              </h3>
              <p class="social-description">
                Duisburg is a vibrant city with a rich industrial heritage and a diverse cultural scene. From its lively harbor district and street festivals to museums, theaters, and a strong international community, the city offers a unique blend of tradition and modern urban life.
              </p>
              <div class="social-links">
                <a href="https://www.uni-due.de/erstsemester/leben_in_duisburg.php" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i> Interesting Locations and Attractions 
                  <span class="link-description"></span>
                </a>
                <a href="https://www.duisburgkontor.de/events/veranstaltungskalender/" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i> Event Calender 
                  <span class="link-description"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/campus-event1.jpg" alt="University campus event" class="img-fluid rounded shadow activity-image">
          </div>
        </div>

        <!-- Faculty Section with Image -->
        <div class="row align-items-center mb-5 g-4 flex-md-row-reverse">
          <div class="col-md-6">
            <div class="social-section p-4 h-100">
              <h3 class="social-header">
                <i class="bi bi-cpu"></i> Essen
              </h3>
              <p class="social-description">
                Essen is a dynamic city known for its transformation from an industrial hub to a center of arts and culture. Home to renowned institutions like the Zollverein UNESCO World Heritage Site and the Museum Folkwang, Essen offers a vibrant mix of history, creativity, and modern urban living.
              </p>
              <div class="social-links">
                <a href="https://www.uni-due.de/erstsemester/leben_in_essen.php" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i> Interesting Locations and Attractions 
                  <span class="link-description"></span>
                </a>
                <a href="https://pages.visitessen.de/de/visitessen/streaming_event/search/Event/mode:next_months,3/sort:chronological" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i> Event Calender 
                  <span class="link-description"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/engineering-activities.jpg" alt="Students working in engineering lab" class="img-fluid rounded shadow activity-image">
          </div>
        </div>

        <!-- Student Council Section with Image Grid -->
        <div class="row mb-5">
          <div class="col-12">
        </div>

        <!-- Campus Highlights Carousel -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="social-section p-4">
              <h3 class="social-header text-center mb-4">
                <i class="bi bi-stars"></i> Ruhrpott Highlights
              </h3>
              <div class="row g-3">
                <div class="col-md-3 col-6">
                  <img src="@/assets/tiger.jpg"  class="img-fluid rounded shadow-sm highlight-image">
                </div>
                <div class="col-md-3 col-6">
                  <img src="@/assets/zoll.jpg" class="img-fluid rounded shadow-sm highlight-image">
                </div>
                <div class="col-md-3 col-6">
                  <img src="@/assets/innenhafen.jpg" class="img-fluid rounded shadow-sm highlight-image">
                </div>
                <div class="col-md-3 col-6">
                  <img src="@/assets/library.jpg" class="img-fluid rounded shadow-sm highlight-image">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/social" class="btn btn-primary">
            <i class="bi bi-arrow-left"></i> Back to Social Media Page
          </router-link>
        </div>
      </div>
    </div>

    <section class="contacts-section py-5">
      <UniversityContacts />
    </section>
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
.requirements-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
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

.gallery-image, .highlight-image {
  height: 180px;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
}

.gallery-image:hover, .highlight-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
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

.bi {
  font-size: 1.2rem;
  color: #005293;
}

.contacts-section {
  background-color: #005293;
  margin-top: 2rem;
}

.btn-primary {
  background-color: #005293;
  border-color: #005293;
}
</style>
