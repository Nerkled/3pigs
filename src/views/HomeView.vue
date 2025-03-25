<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import ScrollingPig from '../components/ScrollingPig.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <ScrollingPig :speed="8" top="70%" />
  </main>
</template>

<style scoped>
main {
  position: relative; /* Ensure pig positions relative to main */
}
</style>
