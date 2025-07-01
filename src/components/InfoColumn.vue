<template>
  <div class="link-column">
    <h3>{{ title }}</h3>
    <router-link 
      v-for="(link, index) in links" 
      :key="index"
      :to="link.to"
      class="info-link"
    >
      <span class="link-title">{{ link.title }}</span>
      <span class="link-desc">{{ link.desc }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'InfoColumn',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.link-column {
  flex: 1;
  min-width: 250px;
}

.link-column h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #0066cc;
  color: #333;
}

.info-link {
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s;
  padding: 0.8rem;
  border-radius: 5px;
}

.info-link:hover {
  background-color: #f5f5f5;
  transform: translateX(5px);
}

.link-title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.link-desc {
  display: block;
  font-size: 0.9rem;
  color: #666;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
