<script setup>
import { ref } from 'vue';

// Define image URLs and widths for the logos
const logos = ref([
  { 
    src: "https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg", 
    alt: "DataPLANT Logo", 
    width: 40 
  },
  {
    src: "https://raw.githubusercontent.com/EduBricksHub/EduImages/71326f568eebe51c90896ef418ca8632fa2bae36/logos/ceplas/CEPLAS_Icon.jpeg", 
    alt: "CEPLAS Logo", 
    width: 30 
  },
  // {
  //   src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg",
  //   alt: "Creative Commons Logo",
  //   width: 60
  // }
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
  opacity: 0.6;
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
    :style="{ width: logo.width + 'px' }" />
  </div>
</template>

