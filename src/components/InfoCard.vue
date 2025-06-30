<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button 
        class="accordion-button collapsed" 
        type="button" 
        @click="toggleAccordion"
        :class="{ 'collapsed': !isOpen }"
      >
        {{ title }}
      </button>
    </h2>
    <div class="accordion-collapse" :class="{ 'show': isOpen }">
      <div class="accordion-body">
        <ol class="steps-list">
          <li v-for="(step, index) in steps" :key="index">
            {{ step }}
          </li>
        </ol>
        <router-link 
          :to="linkPath" 
          class="btn btn-outline-primary mt-2"
          v-if="linkPath"
        >
          Learn More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: String,
    steps: Array,
    linkPath: String
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.accordion-item {
  margin-bottom: 10px;
  border: 1px solid rgba(0,0,0,0.125);
  border-radius: 0.25rem;
}

.accordion-button {
  background-color: #f8f9fa;
  font-weight: 500;
}

.accordion-button:not(.collapsed) {
  background-color: #e7f1ff;
  color: #0c63e4;
}

.steps-list {
  padding-left: 20px;
}
</style>
