<template>
  <div
    class="absolute bottom-0 left-0 right-0 w-full flex justify-center"
    v-bind:class="{
      'bg-main': filled,
      'z-1': filled,
    }"
  >
    <hr v-if="separator" />
    <ul
      class="flex flex-wrap !list-none px-3 py-2 justify-center"
      v-bind:class="{
        'flex-col': y === 'col',
        'items-center': y === 'col',
        'justify-center': y === 'row',
        'gap-col-3': y === 'row',
        'gap-row-0.5': y === 'col',
      }"
    >
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  filled: {
    default: false,
    type: Boolean,
  },
  separator: {
    default: false,
    type: Boolean,
  },
  x: {
    default: 'r',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
  y: {
    default: 'row',
    type: String as PropType<'col' | 'row'>,
    validator: (value) => value === 'col' || value === 'row',
  }
});
</script>
