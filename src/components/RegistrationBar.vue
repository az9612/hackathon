<template>
  <div
<<<<<<< HEAD
    class="container my-5"
=======
    class="container my-3"
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
    v-for="(card, index) in cards"
    :key="index"
    :ref="el => cardRefs[index] = el"
  >
<<<<<<< HEAD
    <!-- Card container with relative positioning -->
    <div
      class="card bg-danger opacity-75 shadow text-white position-relative"
      style="height: 100px;"
    >
      <!-- Clickable overlay for toggling dropdown -->
=======
    <!-- Card -->
    <div
      class="card shadow position-relative"
      :style="{ height: '7rem', backgroundColor: card.bgColor }"
    >
      <!-- Dropdown toggle overlay -->
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        style="z-index: 1; cursor: pointer;"
        @click.stop="toggleDropdown(index)"
      ></div>

<<<<<<< HEAD
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
=======
      <!-- Card layout with Bootstrap row -->
      <div class="row g-0 h-100">
        <!-- Text content (left side) -->
        <div class="col d-flex align-items-center ps-3">
          <h5 class="card-title mb-0">{{ card.title }}</h5>
        </div>

        <!-- Image and icon (right side) -->
        <div class="col-auto d-flex align-items-center position-relative pe-3">
          <!-- Background image -->
          <img
            :src="card.imgSrc"
            alt="card image"
            style="height: 100%; opacity: 0.75; position: absolute; right: 0; width: 100; object-fit: fill;"
          />

          <!-- Navigation button -->
          <router-link
            :to="card.route"
            class="btn btn-light text-danger fw-bold z-2 position-relative"
            @click.stop
          >
            &gt;
          </router-link>
        </div>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
      </div>
    </div>

    <!-- Dropdown -->
    <transition name="slidefade">
      <ul v-if="card.open" class="dropdown-menu w-75">
        <li v-for="(item, i) in card.dropdown" :key="i">
<<<<<<< HEAD
          <a class="dropdown-item" href="#">{{ item }}</a>
=======
          <router-link class="dropdown-item" :to="item.path">{{ item.label }}</router-link>
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        </li>
      </ul>
    </transition>
  </div>
</template>


<script>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
<<<<<<< HEAD
=======
import innenhafenImg from '@/assets/innenhafen.jpg';
import libraryimg from '@/assets/library.jpg';
import zollimg from '@/assets/zoll.jpg';
import tigerImg from '@/assets/tiger.jpg';
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0

export default {
  setup() {
    const cards = reactive([
      {
        title: 'Welcome to Germany',
<<<<<<< HEAD
        dropdown: ['Residence Registration', 'Bank Account', 'Health Insurance', 'Learning German'],
=======
        bgColor: 'peachpuff',
        imgSrc: innenhafenImg,
        dropdown: [
                  { label: 'Visa Application', path: '/visa' },
                  { label: 'Residence Registration', path: '/registration' },
                  { label: 'Bank Account', path: '/bank' },
                  { label: 'Health Insurance', path: '/insurance' },
                  { label: 'Learning German', path: '/german' }
                  ],

>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        route: '/first',
        open: false,
      },
      {
        title: 'Study in UDE',
<<<<<<< HEAD
        dropdown: ['Einschreibung (Enrollment)', 'Uni DUE Online Services', 'Exams', 'Relevant Links'],
=======
        bgColor: 'powderblue',
        imgSrc: libraryimg,
        dropdown: [
                  { label: 'Einschreibung (Enrollment)', path: '/visa' },
                  { label: 'Uni DUE Online Services', path: '/registration' },
                  { label: 'Exams', path: '/bank' },
                  { label: 'Relevant Links', path: '/insurance' },
                  ],
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        route: '/study',
        open: false,
      },
      {
        title: 'Accommodation',
<<<<<<< HEAD
        dropdown: ['Apply', 'Check availability', 'Cancel booking'],
=======
        bgColor: 'palevioletred',
        imgSrc: zollimg,
        dropdown: [
                  { label: 'Apply', path: '/visa' },
                  { label: 'Check availability', path: '/registration' },
                  { label: 'Cancel booking', path: '/bank' },
                  ],
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
        route: '/accommodation',
        open: false,
      },
      {
        title: 'Fun stuff',
<<<<<<< HEAD
        dropdown: ['Clubs', 'Events', 'Sports'],
=======
        bgColor: 'lightyellow',
        imgSrc: tigerImg,
        dropdown: [
                  { label: 'Clubs', path: '/visa' },
                  { label: 'Events', path: '/registration' },
                  { label: 'Sports', path: '/bank' },
                  ],
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
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
<<<<<<< HEAD
  z-index: 1050;
=======
  z-index: 10;
>>>>>>> d9b05b971e98a3e5dbc6dd640ef800402a295ae0
  display: block;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}

</style>
