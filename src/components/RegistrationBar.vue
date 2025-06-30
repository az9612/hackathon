<template>
  <div
    class="container my-3"
    v-for="(card, index) in cards"
    :key="index"
    :ref="el => cardRefs[index] = el"
  >
    <div
      class="card shadow position-relative text-dark"
      :style="{ height: '100px', backgroundColor: card.bgColor }"
    >
      <!-- Clickable overlay -->
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        style="z-index: 1; cursor: pointer;"
        @click.stop="toggleDropdown(index)"
      ></div>
        <!-- Floating image (decorative) -->
        <img
          :src="card.imgSrc"
          alt="icon"
          class="d-block float-end ms-2"
          style="width: 50px; opacity: 0.3;"
        >
      <!-- Card content -->
      <div class="card-body d-flex justify-content-between align-items-center h-100">
        <h5 class="card-title mb-0">{{ card.title }}</h5>



        <!-- Navigation arrow -->
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
          <router-link class="dropdown-item" :to="item.path">{{ item.label }}</router-link>
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
        bgColor: 'peachpuff',
        imgSrc: 'src\assets\innenhafen.jpg',
        dropdown: [
                  { label: 'Visa Application', path: '/visa' },
                  { label: 'Residence Registration', path: '/registration' },
                  { label: 'Bank Account', path: '/bank' },
                  { label: 'Health Insurance', path: '/insurance' },
                  { label: 'Learning German', path: '/german' }
                  ],

        route: '/first',
        open: false,
      },
      {
        title: 'Study in UDE',
        bgColor: 'powderblue',
        dropdown: [
                  { label: 'Einschreibung (Enrollment)', path: '/visa' },
                  { label: 'Uni DUE Online Services', path: '/registration' },
                  { label: 'Exams', path: '/bank' },
                  { label: 'Relevant Links', path: '/insurance' },
                  ],
        route: '/study',
        open: false,
      },
      {
        title: 'Accommodation',
        bgColor: 'palevioletred',
        dropdown: [
                  { label: 'Apply', path: '/visa' },
                  { label: 'Check availability', path: '/registration' },
                  { label: 'Cancel booking', path: '/bank' },
                  ],
        route: '/accommodation',
        open: false,
      },
      {
        title: 'Fun stuff',
        bgColor: 'lightyellow',
        dropdown: [
                  { label: 'Clubs', path: '/visa' },
                  { label: 'Events', path: '/registration' },
                  { label: 'Sports', path: '/bank' },
                  ],
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
