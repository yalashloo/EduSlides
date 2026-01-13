<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<style>

/* Container for all elements */
.slidev-layout.default {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center;    /* Horizontally center the image */
  justify-content: flex-start; /* Align content at the top (so text is aligned left) */
}

/* Ensures the image is centered horizontally */
.slidev-layout.default img {
  max-width: 80%;
  max-height: 80%;
  object-fit: scale-down;
  overflow: clip;
  margin: 40px 0px; /* Optional: add spacing around the image */
}

/* Reset the text alignment to left */
.slidev-layout.default h1,
.slidev-layout.default h2,
.slidev-layout.default h3,
.slidev-layout.default p,
.slidev-layout.default ul,
.slidev-layout.default ol,
.slidev-layout.default div
{
  text-align: left;
  width: 100%; /* Ensures text takes full width to align left */
}

</style>