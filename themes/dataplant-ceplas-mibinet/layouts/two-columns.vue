<!-- two-columns.vue -->

<template>
  <div class="slidev-layout two-columns">
    <slot></slot>
    <div class="grid grid-cols-2 gap-4 mt-2">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style>

.left,
  .right {
    max-height: 90%;
    max-width: 90%;
    overflow: clip;
    overflow: scale-down;
    margin: 50px 0px;
  }

</style>
