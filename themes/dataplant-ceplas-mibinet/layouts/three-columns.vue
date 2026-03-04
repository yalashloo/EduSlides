<!-- three-columns.vue -->

<template>
  <div class="slidev-layout three-columns">
    <slot></slot>
    <div class="grid grid-cols-3 gap-8 mt-2">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="middle">
        <slot name="middle" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.left,
  .middle,
    .right {
    max-height: 90%;
    max-width: 90%;
    overflow: clip;
    overflow: scale-down;
    margin: 50px 0px;
    }

</style>
