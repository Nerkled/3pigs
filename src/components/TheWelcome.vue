<script setup lang="ts">
defineProps<{
  msg?: string
}>()

const defaultMsg = 'Welcome to 3pigs!'
</script>

<template>
  <div class="welcome">
    <h1 class="pink">{{ msg || defaultMsg }}</h1>
    <h3>You made it piglets! Watch out for the pig...</h3>
  </div>
</template>

<style scoped>
.welcome {
  text-align: center;
  padding: 2rem;
  position: relative;
  min-height: 100vh; /* Ensure pig has room to scroll */
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.pink {
  color: #ff69b4;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .welcome {
    text-align: left;
  }
}
</style>
