<script setup>
import decks from './decks'
import { ref } from 'vue'

const active = ref(null)
</script>

<template>
  <main class="container">
    <h1>EduSlides Gallery</h1>

    <div class="grid">
      <div
        v-for="deck in decks"
        :key="deck.id"
        class="card"
        @click="active = deck"
      >
        <img :src="deck.thumbnail" />
        <h2>{{ deck.title }}</h2>
        <p>{{ deck.description }}</p>
      </div>
    </div>

    <div v-if="active" class="modal" @click.self="active = null">
      <iframe
        :src="active.url"
        class="deck-frame"
        sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
        referrerpolicy="no-referrer"
      />
    </div>
  </main>
</template>

<style>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: system-ui;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
  transition: transform .2s;
  background: white;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.8);
  display: flex;
  padding: 2rem;
}

.modal iframe {
  flex: 1;
  border-radius: 12px;
  background: white;
}

.deck-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

</style>
