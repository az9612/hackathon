<template>
  <div id="app">
    <AppNavbar />
    
    <div class="hero-section">
      <img src="@/assets/UDE.jpg" alt="UDE Campus" class="hero-image">
      <div class="hero-overlay">
        <h1>Welcome to Germany & UDE!</h1>
        <p>Your complete guide for studying and living in Germany</p>
      </div>
    </div>
    
    <EssentialInfoSection />
    <UniversityContacts />
    <ChatbotPopup />

  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import EssentialInfoSection from './components/EssentialInfoSection.vue';
import UniversityContacts from './components/UniversityContacts.vue';
import ChatbotPopup from './components/ChatbotPopup.vue';

export default {
  name: 'HomePage',
  components: {
    AppNavbar,
    EssentialInfoSection,
    UniversityContacts,
    ChatbotPopup
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.hero-section {
  position: relative;
  height: 400px;
  margin-bottom: 2rem;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
  padding: 0 20px;
}

.hero-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.hero-overlay p {
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
  .hero-section {
    height: 300px;
  }
  
  .hero-overlay h1 {
    font-size: 2rem;
  }
  
  .hero-overlay p {
    font-size: 1rem;
  }
}

</style>


