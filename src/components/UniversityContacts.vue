<template>
  <div class="container-fluid bg-ude text-white">
    <footer>
      <div class="row justify-content-center py-3">
        <div class="col">
          <h5>CONTACT US</h5>
          <div class="row">
            <!-- Quick Links Column -->
            <div class="col-md-6 justify-content-center">
              <h3>Quick Links</h3>
              <div class="row justify-content-center">
                <ul class="col-3 justify-content-center">
                  <li class="list-unstyled"><a href="https://www.uni-due.de" target="_blank" rel="noopener">UDE Official
                      Website</a></li>
                  <li class="list-unstyled"><a href="https://www.essen.de" target="_blank" rel="noopener">City of Essen</a>
                  </li>
                  <li class="list-unstyled"><a href="https://www.duisburg.de" target="_blank" rel="noopener">City of
                      Duisburg</a></li>
                  <li class="list-unstyled"><a href="https://www.make-it-in-germany.com" target="_blank" rel="noopener">Make
                      it in Germany</a></li>
                </ul>
              </div>

            </div>

            <!-- University Contacts Column -->
            <div class="col-md-6">
              <h3>University Contacts</h3>
              <dl class="row justify-content-center">
                <dt class="col-sm-6 text-center"><small>International Office:</small></dt>
                <dd class="col-sm-4 text-center">
                  <a href="mailto:international@uni-due.de">international@uni-due.de <br></a>
                  <small>+49 201 183-1234</small>
                </dd>
                <dt class="col-sm-6 text-center"><small>Student Services:</small></dt>
                <dd class="col-sm-4 text-center">
                  <a href="mailto:studierendenservice@uni-due.de">studierendenservice@uni-due.de<br></a>
                  <small>+49 201 183-2345</small>
                </dd>
                <dt class="col-sm-6 text-center"><small>Campus Locations:</small></dt>
                <dd class="col-sm-4 text-center">
                  <small>Essen: Universitätsstraße 2</small><br>
                  <small>Duisburg: Forsthausweg 2</small>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'UniversityContacts'
}
</script>

<style scoped>
.section-title {
  font-size: 1.0rem;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.8rem;
}

.links-column,
.contacts-column {
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
