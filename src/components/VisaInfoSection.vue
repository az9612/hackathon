<template>
  <section class="visa-info-section mb-5">
    <h2 class="section-title mb-4">{{ title }}</h2>
    
    <div class="requirement-item" v-for="(item, index) in items" :key="index">
      <h3 class="item-title">{{ item.title }}</h3>
      <p class="item-description">{{ item.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.visa-info-section {
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #6097d6;
}

.requirement-item {
  margin-bottom: 1.5rem;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 0.5rem;
}

.item-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.3rem;
  }
  
  .item-title {
    font-size: 1rem;
  }
}
</style>
