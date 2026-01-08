<script setup>
import { ref } from 'vue';

// Use Vite-compatible URLs so the bundler resolves assets correctly.
const CEPLAS = new URL('./assets/logos/ceplas.jpeg', import.meta.url).href;
const HHU = new URL('./assets/logos/hhu.jpg', import.meta.url).href;

const logos = ref([
  {
    src: CEPLAS,
    alt: 'CEPLAS',
    width: 30,
    opacity: 1,
  },
  {
    src: HHU,
    alt: 'HHU',
    width: 80,
    opacity: 1,
  },
  // {
  //   src: 'https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg',
  //   alt: 'Creative Commons Logo',
  //   width: 60
  // }
]);
</script>

<style scoped>
.logo-container {
  position: absolute;
  bottom: 10px;
  right: 30px;
  display: flex;
  gap: 1rem;
}

.logo {
  height: auto;
}

img {
  display: block;
  max-width: 100%;
  object-fit: contain;
}
</style>


<template>
  <!-- Image Logos in Bottom Left Corner -->
  <div 
    class="logo-container"
    v-if="!$slidev.themeConfigs.logoPagesDisabled?.includes($slidev.nav.currentPage)"
  >
    <img v-for="(logo, index) in logos" 
    :key="index" 
    :src="logo.src" 
    :alt="logo.alt" 
    class="logo" 
    :style="{ 
      width: logo.width + 'px',
      opacity: logo.opacity,
      }" />
  </div>
</template>

