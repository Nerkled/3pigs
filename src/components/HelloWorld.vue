<script setup lang="ts">
defineProps<{
  msg?: string // Optional prop with a default below
}>()

const defaultMsg = 'Welcome to 3pigs!' // Fallback if no msg is passed
</script>

<template>
  <div class="greetings">
    <h1 class="pink">{{ msg || defaultMsg }}</h1>
    <h3>
      You made it piglets!
      <a href="https://3pigs.bandcamp.com/album/when-pigs-fly" target="_blank" rel="noopener">Music</a> +
      <a href="https://www.instagram.com/3pigs.wav" target="_blank" rel="noopener">Insta</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.pink {
  color: #ff69b4; /* Hot pink for piglet vibe */
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

a {
  color: #ff69b4;
  text-decoration: none;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
