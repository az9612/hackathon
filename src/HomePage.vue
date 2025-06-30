<template>
  <div id="app">
    <AppNavbar/>
    <ChatbotPopup/>
    <RegistrationBar/>

  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
// import JumboTron from './components/JumboTron.vue';
import ChatbotPopup from './components/ChatbotPopup.vue';
import RegistrationBar from './components/RegistrationBar.vue';

export default {
  name: 'HomePage',
  components: {
    AppNavbar,
    ChatbotPopup,
    RegistrationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>