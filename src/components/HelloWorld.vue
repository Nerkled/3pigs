<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="pink">{{ msg }}</h1>
    <h3>
      You made it piglets!
      <a href="https://3pigs.bandcamp.com/album/when-pigs-fly" target="_blank" rel="noopener">M u s i c</a> +
      <a href="https://www.instagram.com/3pigs.wav" target="_blank" rel="noopener">I n s t a</a>.
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

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
