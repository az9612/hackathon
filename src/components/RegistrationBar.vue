<template>
  <div class="container mt-4">
    <div class="card" @click="toggleDropdown" style="cursor: pointer;">
      <div class="card-body">
        <h5 class="card-title">Dropdown Card</h5>
        <p class="card-text">Click me to show options</p>
      </div>
    </div>

    <ul v-if="dropdownOpen" class="dropdown-menu show w-75">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RegistrationBar',
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
