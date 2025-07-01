<!-- components/InfoSection.vue -->
<template>
  <section class="info-section">
    <h2 class="section-title">{{ title }}</h2>

    <div class="definition-list">
      <div v-for="(item, index) in items" :key="index" class="definition-item">
        <span class="term">{{ item.title }}</span>
        <div class="description" v-html="item.description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.info-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.definition-list {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem 1.5rem;
}

.definition-item {
  display: contents;
}

.term {
  font-weight: 600;
  color: #34495e;
  text-align: left;
}

.description {
  color: #7f8c8d;
  text-align: left;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .definition-list {
    grid-template-columns: 1fr;
  }

  .term {
    margin-bottom: 0.25rem;
  }

  .description {
    padding-bottom: 1rem;
  }
}
</style>
