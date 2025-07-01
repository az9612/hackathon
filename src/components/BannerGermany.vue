<template>
  <section class="visa-hero position-relative">
    <div class="container-fluid h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <h1 class="display-5 mb-3">
            <slot name="title"></slot>
          </h1>
          <p class="lead mb-0">
            <slot name="description"></slot>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerGermany'
}
</script>

<style scoped>
.visa-hero {
  background-image: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
                  url('../assets/Cloud.jpg');
  background-size: cover;
  background-position: center;
  color: #2c3e50;
  min-height: 380px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  margin: 0;
}

.container-fluid {
  padding: 0 15px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #005293;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

p {
  font-size: 1.25rem;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

strong {
  color: #005293;
  font-weight: 600;
}

@media (max-width: 768px) {
  .visa-hero {
    min-height: 300px;
    padding: 3rem 0;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.8rem;
  }
  
  p {
    font-size: 1rem;
  }
}
</style>
