<!-- four-panels.vue -->

<template>
  <div class="slidev-layout four-panels">
    <slot></slot>
    <div 
    class="grid grid-cols-2 gap-4 mt-12"
    style="grid-template-rows: 220px 220px;"
    >
      <div class="top-left">
        <slot name="top-left" />
      </div>
      <div class="top-right">
        <slot name="top-right" />
      </div>
      <div class="bottom-left">
        <slot name="bottom-left" />
      </div>
      <div class="bottom-right">
        <slot name="bottom-right" />
      </div>
    </div>
  </div>
</template>

