<!--
    Admonition component for Vue.js
    This component is used to display custom alert messages with an icon and title.
    It supports different color schemes and can be customized with props.
-->

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
const props = defineProps({
  color: {
    type: String,
    default: 'amber-light',
  },
  title: {
    type: String,
    default: 'Note',
  },
  icon: {
    type: String,
    default: 'mdi-information-variant-circle-outline',
  },
  width: {
    type: String,
    default: '100%',
  },
})


const bg_color = computed(() => {
  switch (props.color) {
    case 'purple-light':
        return '#c4b5fd'
    case 'emerald-light':
        return '#34d399'
    case 'amber-light':
        return '#fde68a'
    case 'red-light':
        return '#fca5a5'
    case 'sky-light':
        return '#bae6fd'
    default:
        return '#fde68a'
  }
})

const text_color = computed(() => {
  switch (props.color) {
    case 'purple-light':
        return '#2d0a4b'
    case 'emerald-light':
        return '#064e3b'
    case 'amber-light':
        return '#7c5700'
    case 'red-light':
        return '#7f1d1d'
    case 'sky-light':
        return '#0c4a6e'
    case 'sky-dark':
        return '#bae6fd'
    default:
        return '#000000'
  }
})

</script>

<template>
<div
    class="markdown-alert markdown-alert-custom"
    :style="{ backgroundColor: bg_color, color: text_color, border: `1px solid ${text_color}`, borderLeft: `6px solid ${text_color}` }"
>
    <p class="markdown-alert-title-custom">
        <span class="font-size-1.3rem"><Icon :icon="props.icon" /></span>&nbsp;&nbsp;{{ props.title }}
    </p>
    <p><slot></slot></p>
</div>
</template>

<style scoped>
.markdown-alert {
  padding: 8px 16px;
  margin: 10px;
  margin-left: 0;
  margin-top: 2px;
  margin-bottom: 5px;
  color: inherit;
  border-radius: 6px;
  font-size: 0.75em;
  /* width: v-bind(props.width); */
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
}

.markdown-alert p {
  margin: 0;
  margin-bottom: 2px;
}
.markdown-alert > :first-child {
  margin-top: 0;
}
.markdown-alert > :last-child {
  margin-bottom: 0;
}
.markdown-alert .markdown-alert-title-custom {
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
}
@media print {
  .markdown-alert .markdown-alert-title:before {
    display: none;
  }
}
</style>