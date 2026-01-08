<!-- two-columns.vue -->

<template>
  <div class="slidev-layout two-columns">
    <slot></slot>
    <div class="grid grid-cols-2 gap-8 mt-1">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
      <div class="full-width-bottom">
        <slot name="bottom" />
      </div>
  </div>
</template>

<style>

.left,
  .right {
    max-height: 90%;
    max-width: 90%;
    overflow: scale-down;
    margin: 10px 0px;
  }

  .full-width-bottom {
    width: 100%;
    margin-top: 12px;
    text-align: center;
  }

</style>
