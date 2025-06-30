<template>
  <div
    class="container my-5"
    v-for="(card, index) in cards"
    :key="index"
    :ref="el => cardRefs[index] = el"
  >
    <!-- Card container with relative positioning -->
    <div
      class="card bg-danger opacity-75 shadow text-white position-relative"
      style="height: 100px;"
    >
      <!-- Clickable overlay for toggling dropdown -->
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        style="z-index: 1; cursor: pointer;"
        @click.stop="toggleDropdown(index)"
      ></div>

      <!-- Card content -->
      <div class="card-body d-flex justify-content-between align-items-center h-100">
        <h5 class="card-title mb-0">{{ card.title }}</h5>

        <!-- Navigation arrow on the right -->
        <router-link
          :to="card.route"
          class="btn btn-light text-danger fw-bold z-2"
          style="z-index: 2;"
          @click.stop
        >
          &gt;
        </router-link>
      </div>
    </div>

    <!-- Dropdown -->
    <transition name="slidefade">
      <ul v-if="card.open" class="dropdown-menu w-75">
        <li v-for="(item, i) in card.dropdown" :key="i">
          <a class="dropdown-item" href="#">{{ item }}</a>
        </li>
      </ul>
    </transition>
  </div>
</template>


<script>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';

export default {
  setup() {
    const cards = reactive([
      {
        title: 'Welcome to Germany',
        dropdown: ['Residence Registration', 'Bank Account', 'Health Insurance', 'Learning German'],
        route: '/first',
        open: false,
      },
      {
        title: 'Study in UDE',
        dropdown: ['Einschreibung (Enrollment)', 'Uni DUE Online Services', 'Exams', 'Relevant Links'],
        route: '/study',
        open: false,
      },
      {
        title: 'Accommodation',
        dropdown: ['Apply', 'Check availability', 'Cancel booking'],
        route: '/accommodation',
        open: false,
      },
      {
        title: 'Fun stuff',
        dropdown: ['Clubs', 'Events', 'Sports'],
        route: '/fun',
        open: false,
      },
    ]);

    const cardRefs = ref([]);

    const toggleDropdown = (index) => {
      cards.forEach((c, i) => c.open = i === index ? !c.open : false);
    };

    const handleClickOutside = (event) => {
      const clickedInsideAny = cardRefs.value.some(el => el?.contains(event.target));
      if (!clickedInsideAny) {
        cards.forEach((c) => c.open = false);
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return { cards, toggleDropdown, cardRefs };
  }
};
</script>


<style scoped>
/* Smooth slide + fade animation */
.slidefade-enter-active,
.slidefade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slidefade-enter-from,
.slidefade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slidefade-enter-to,
.slidefade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  z-index: 1050;
  display: block;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}

</style>
