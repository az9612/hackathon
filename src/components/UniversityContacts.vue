<template>
  <div class="contact-footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <h2 class="section-title">CONTACT US</h2>
        
        <div class="row contact-content">
          <!-- Quick Links Column -->
          <div class="col-md-6 links-column">
            <h3>Quick Links</h3>
            <ul class="list-unstyled">
              <li><a href="https://www.uni-due.de" target="_blank" rel="noopener">UDE Official Website</a></li>
              <li><a href="https://www.essen.de" target="_blank" rel="noopener">City of Essen</a></li>
              <li><a href="https://www.duisburg.de" target="_blank" rel="noopener">City of Duisburg</a></li>
              <li><a href="https://www.make-it-in-germany.com" target="_blank" rel="noopener">Make it in Germany</a></li>
            </ul>
          </div>
          
          <!-- University Contacts Column -->
          <div class="col-md-6 contacts-column">
            <h3>University Contacts</h3>
            <div class="contact-item row g-0">
              <span class="label col-4 col-sm-3">International Office:</span>
              <div class="details col-8 col-sm-9">
                <a href="mailto:international@uni-due.de">international@uni-due.de</a>
                <span class="detail">+49 201 183-1234</span>
              </div>
            </div>
            <div class="contact-item row g-0">
              <span class="label col-4 col-sm-3">Student Services:</span>
              <div class="details col-8 col-sm-9">
                <a href="mailto:studierendenservice@uni-due.de">studierendenservice@uni-due.de</a>
                <span class="detail">+49 201 183-2345</span>
              </div>
            </div>
            <div class="contact-item row g-0">
              <span class="label col-4 col-sm-3">Campus Locations:</span>
              <div class="details col-8 col-sm-9">
                <span class="detail">Essen: Universitätsstraße 2</span>
                <span class="detail">Duisburg: Forsthausweg 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniversityContacts'
}
</script>

<style scoped>
.contact-footer {
  background: #005293;
  color: white;
  padding: 1.5rem 0;
  font-size: 0.9rem;
}

.section-title {
  font-size: 1.0rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 0.8rem;
}

.links-column, .contacts-column {
  padding: 0 1rem;
}

ul {
  padding-left: 0;
}

li {
  margin-bottom: 0.6rem;
}

a {
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
}

a:hover {
  text-decoration: underline;
}

.contact-item {
  margin-bottom: 1rem;
}

.label {
  font-weight: 500;
  font-size: 0.85rem;
}

.detail {
  display: block;
  font-size: 0.85rem;
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .links-column {
    margin-bottom: 1.5rem;
  }
  
  .contact-item {
    margin-bottom: 0.8rem;
  }
  
  .label {
    margin-bottom: 0.2rem;
  }
}
</style>
