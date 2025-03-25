<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const draggableWindow = ref<HTMLElement | null>(null)

let isDragging = false
let offsetX = 0
let offsetY = 0

onMounted(() => {
  const windowElement = draggableWindow.value
  if (windowElement) {
    windowElement.addEventListener('mousedown', (e) => {
      isDragging = true
      offsetX = e.clientX - windowElement.offsetLeft
      offsetY = e.clientY - windowElement.offsetTop
    })

    window.addEventListener('mousemove', (e) => {
      if (isDragging && windowElement) {
        windowElement.style.left = `${e.clientX - offsetX}px`
        windowElement.style.top = `${e.clientY - offsetY}px`
      }
    })

    window.addEventListener('mouseup', () => {
      isDragging = false
    })
  }
})
</script>

<template>
  <div ref="draggableWindow" class="window" style="width: auto; height: auto; position: absolute;">
    <div class="title-bar">
      <div class="title-bar-text">Again...</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">
      <div class="app-background">
        <header>
          <div class="header-background">
            <div class="header-wrapper">
              <HelloWorld msg="3 p i g s" />
            </div>
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/store">Store</RouterLink>
            </nav>
          </div>
        </header>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.window {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.app-background {
  background-image: url('@/assets/pigfield.jpg');
  background-size: cover;
  background-position: center;
  background: linear-gradient(to top, #000000, #000000, #333333, #333333);
  background-size: 100% 5px;
}

.header-background {
  background-image: url('@/assets/pigascii.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  padding: 4rem 0;
  text-align: center;
  position: relative;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
