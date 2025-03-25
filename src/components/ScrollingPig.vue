<script setup lang="ts">
defineProps<{
  speed?: number // Animation speed in seconds
  top?: string // Vertical position
}>()
</script>

<template>
  <div class="pig-container">
    <img src="@/assets/pig.png" alt="Scrolling Pig" class="scrolling-pig" :style="{ top: top || '50%' }" />
  </div>
</template>

<style scoped>
.pig-container {
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 5; /* Above background, below content if needed */
}

.scrolling-pig {
  width: 100px;
  height: auto;
  position: absolute;
  left: -100px; /* Start off-screen */
  animation: scrollPig linear infinite;
  animation-duration: v-bind('speed + "s" || "10s"'); /* Default 10s if no speed prop */
}

@keyframes scrollPig {
  0% {
    left: -100px;
  }
  100% {
    left: 100%;
  }
}
</style>
