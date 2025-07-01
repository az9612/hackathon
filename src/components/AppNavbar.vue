<template>
<nav class="navbar navbar-expand-lg navbar-light bg-ude">
  <div class="container-fluid">
    <img class="navbar-brand me-3" :src="logoNew" height="50">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
<form class="d-flex position-relative end-0" role="search" @submit.prevent="goToSelectedPage">
  <input
    class="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    v-model="searchQuery"
    @input="filterSuggestions"
    @keydown.down.prevent="highlightNext"
    @keydown.up.prevent="highlightPrev"
    @keydown.enter.prevent="goToHighlightedPage"
  />
  <button class="btn btn-outline-secondary" type="submit">Search</button>

  <!-- Autocomplete suggestions -->
  <ul class="list-group position-absolute mt-5 w-100" style="z-index: 9999;" v-if="filteredPages.length">
    <li
      v-for="(page, index) in filteredPages"
      :key="page.path"
      class="list-group-item list-group-item-action"
      :class="{ active: index === highlightedIndex }"
      @click="goToPage(page.path)"
    >
      {{ page.name }}
    </li>
  </ul>
</form>

    </div>
  </div>
</nav>
</template>

<script>
// import { useRouter } from 'vue-router';
import logoNew from '/src/assets/logonew_transparent.png';
export default {
  name: 'AppNavbar',
    data() {
    return {
      logoNew,
      searchQuery: '',
      filteredPages: [],
      highlightedIndex: -1
    }
  },
  computed: {
    allNamedRoutes() {
      return this.$router.options.routes.filter(route => route.name)
    }
  },
methods: {
  filterSuggestions() {
    const query = this.searchQuery.toLowerCase();
    this.filteredPages = query
    ? this.allNamedRoutes.filter(p =>
        (p.name && p.name.toLowerCase().includes(query)) ||
        (p.content && p.content.toLowerCase().includes(query))
      )
    : [];
    this.highlightedIndex = -1;
  },

  goToPage(path) {
    this.$router.push(path)
    this.searchQuery = ''
    this.filteredPages = []
  },
  goToSelectedPage() {
    if (this.filteredPages.length > 0) {
      this.goToPage(this.filteredPages[0].path)
    }
  },
  highlightNext() {
    if (this.highlightedIndex < this.filteredPages.length - 1) {
      this.highlightedIndex++
    }
  },
  highlightPrev() {
    if (this.highlightedIndex > 0) {
      this.highlightedIndex--
    }
  },
  goToHighlightedPage() {
    if (this.highlightedIndex >= 0) {
      this.goToPage(this.filteredPages[this.highlightedIndex].path)
    }
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
