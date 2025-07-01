<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button 
        class="accordion-button"
        type="button"
        @click="isOpen = !isOpen"
        :class="{ 'collapsed': !isOpen }"
      >
<<<<<<< HEAD
        <span class="title-text">{{ title }}</span>
=======
        {{ title }}
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        <span class="accordion-icon">{{ isOpen ? '−' : '+' }}</span>
      </button>
    </h2>
    <div 
      class="accordion-collapse"
      :class="{ 'show': isOpen }"
      v-show="isOpen"
    >
      <div class="accordion-body">
        <ol class="steps-list">
          <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
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
      isOpen: true
    }
  }
}
</script>

<style scoped>
.accordion-item {
<<<<<<< HEAD
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  max-width: 800px; /* Controls column width */
  margin-left: auto;
  margin-right: auto;
=======
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
}

.accordion-button {
  width: 100%;
  padding: 1rem 1.25rem;
  background-color: #f8f9fa;
  border: none;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
<<<<<<< HEAD
  text-align: left;
=======
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
}

.accordion-button:hover {
  background-color: #e9ecef;
}

<<<<<<< HEAD
.title-text {
  flex: 1;
  margin-right: 1rem;
  font-size: 1.1rem;
  text-align: left;
}

.accordion-icon {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
  flex-shrink: 0;
=======
.accordion-icon {
  font-size: 1.2rem;
  font-weight: bold;
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
}

.accordion-collapse {
  background: white;
}

.accordion-body {
  padding: 1rem 1.25rem;
<<<<<<< HEAD
  text-align: left;
}

.steps-list {
  padding-left: 1.25rem;
  margin-bottom: 0;
  list-style-type: decimal;
  line-height: 1.6;
=======
}

.steps-list {
  padding-left: 20px;
  margin-bottom: 0px;
  text-align: left;
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
}

.btn-outline-primary {
  border-color: #6097d6;
  color: #6097d6;
}

.btn-outline-primary:hover {
  background-color: #6097d6;
  color: white;
}
</style>
