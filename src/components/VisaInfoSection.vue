<template>
  <section class="visa-info-section">
    <h2 class="section-title">{{ title }}</h2>
    
    <dl class="definition-list">
      <div v-for="(item, index) in items" :key="index" class="definition-item">
        <dt class="term">{{ item.title }}</dt>
        <dd class="description">{{ item.description }}</dd>
      </div>
    </dl>
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
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.definition-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.75rem 1.5rem;
}

.definition-item {
  display: contents;
}

.term {
  font-weight: 500;
  color: #34495e;
  grid-column: 1;
}

.description {
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
  grid-column: 2;
}

@media (max-width: 768px) {
  .definition-list {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  
  .term, .description {
    grid-column: 1;
  }
  
  .term {
    margin-top: 0.75rem;
    font-weight: 600;
  }
}
</style>
