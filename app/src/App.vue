<script setup>
import decks from './decks'
</script>

<template>
  <main class="container">
    <header class="header">
      <h1>Slides Gallery</h1>
      <p class="subtitle">Browse and open available slide decks</p>
    </header>

    <div class="grid">
      <a
        v-for="deck in decks"
        :key="deck.id"
        :href="deck.url"
        class="card"
      >
        <div class="card-body">
          <h2>{{ deck.title }}</h2>
          <p>{{ deck.description }}</p>
        </div>

        <div class="meta">
          <span class="author">{{ deck.author }}</span>
          <span class="date">{{ deck.date }}</span>
        </div>
      </a>
    </div>
  </main>
</template>

<style>
/* Layout */
.container {
  max-width: 1400px;
  margin: auto;
  padding: 3rem 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Header */
.header {
  margin-bottom: 2.5rem;
}

.header h1 {
  font-size: 2.4rem;
  margin: 0;
}

.subtitle {
  opacity: 0.6;
  margin-top: 0.4rem;
}

/* Responsive grid */
.grid {
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Card */
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(180deg, #ffffff, #fafafa);
  border-radius: 16px;
  padding: 1.6rem 1.6rem 1.2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 180px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

/* Content */
.card h2 {
  font-size: 1.2rem;
  margin: 0 0 0.4rem;
  line-height: 1.3;
}

.card p {
  font-size: 0.95rem;
  opacity: 0.75;
  line-height: 1.4;
}

/* Metadata */
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  font-size: 0.8rem;
  opacity: 0.65;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 0.8rem;
}

.author {
  font-weight: 500;
}

.date {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", monospace;
}
</style>
