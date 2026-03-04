<script setup>
import { ref } from 'vue';

// Use Vite-compatible URLs so the bundler resolves assets correctly.
const DATAPLANT = new URL('./assets/logos/DataPLANT_logo_bg_transparent.svg', import.meta.url).href;
const CEPLAS = new URL('./assets/logos/ceplas-logo.svg', import.meta.url).href;
const MIBINET = new URL('./assets/logos/mibinet-logo.svg',import.meta.url).href;
const logos = ref([
  {
    src: DATAPLANT,
    alt: 'DATAPLANT',
    width: 40,
    opacity: 0.8,
  },
  {
    src: CEPLAS,
    alt: 'CEPLAS',
    width: 30,
    opacity: 0.8,
  },
  {
    src: MIBINET,
    alt: 'MiBiNet',
    width: 35,
    opacity: 0.9,
  },
]);
</script>

<style scoped>
.logo-container {
  position: absolute;
  bottom: 10px;
  left: 30px;
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

