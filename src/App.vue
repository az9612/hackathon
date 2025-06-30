<template>
  <div id="app">
    <AppNavbar/>
    <JumboTron/>
    <ChatbotPopup/>

  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import JumboTron from './components/JumboTron.vue';
import ChatbotPopup from './components/ChatbotPopup.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    JumboTron,
    ChatbotPopup
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
