<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// Window dragging
const draggableWindow = ref<HTMLElement | null>(null)
let isDragging = false
let offsetX = 0
let offsetY = 0

// Window state
const isMinimized = ref(false)
const isMaximized = ref(false)
const isClosed = ref(false)
const windowWidth = ref('600px')
const windowHeight = ref('400px')
const windowTop = ref(20)
const windowLeft = ref(20)

// Function to attach dragging listeners
const attachDraggingListeners = () => {
  const windowElement = draggableWindow.value
  if (windowElement) {
    windowElement.addEventListener('mousedown', (e) => {
      if (e.target.className.includes('title-bar')) {
        isDragging = true
        offsetX = e.clientX - windowLeft.value
        offsetY = e.clientY - windowTop.value
      }
    })

    window.addEventListener('mousemove', (e) => {
      if (isDragging && windowElement) {
        windowLeft.value = e.clientX - offsetX
        windowTop.value = e.clientY - offsetY
      }
    })

    window.addEventListener('mouseup', () => {
      isDragging = false
    })
  }
}

onMounted(() => {
  attachDraggingListeners()
})

// Watch for window reappearing
watch(() => isClosed.value, (newValue) => {
  if (!newValue) { // When window reopens
    nextTick(() => {
      attachDraggingListeners()
    })
  }
})

const minimizeWindow = () => {
  isMinimized.value = !isMinimized.value
}

const maximizeWindow = () => {
  if (isMaximized.value) {
    windowWidth.value = '600px'
    windowHeight.value = '400px'
    windowTop.value = 20
    windowLeft.value = 20
  } else {
    windowWidth.value = '100vw'
    windowHeight.value = '100vh'
    windowTop.value = 0
    windowLeft.value = 0
  }
  isMaximized.value = !isMaximized.value
}

const closeWindow = () => {
  isClosed.value = true
}

const openWindow = () => {
  isClosed.value = false
  isMinimized.value = false
  isMaximized.value = false
  windowWidth.value = '600px'
  windowHeight.value = '400px'
  windowTop.value = 20
  windowLeft.value = 20
}
</script>

<template>
  <div class="desktop">
    <!-- Homescreen App Icon -->
    <div v-if="isClosed" class="app-icon" @click="openWindow">
      <img src="@/assets/3pigsLogo.png" alt="3pigs App" />
      <span>3pigs</span>
    </div>

    <!-- Draggable Window -->
    <div
      v-if="!isClosed"
      ref="draggableWindow"
      class="window"
      :class="{ minimized: isMinimized, maximized: isMaximized }"
      :style="{ width: windowWidth, height: windowHeight, top: windowTop + 'px', left: windowLeft + 'px' }"
    >
      <div class="title-bar">
        <div class="title-bar-text">Again...</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" @click="minimizeWindow">-</button>
          <button aria-label="Maximize" @click="maximizeWindow">□</button>
          <button aria-label="Close" @click="closeWindow">x</button>
        </div>
      </div>
      <div v-if="!isMinimized" class="window-body">
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
  </div>
</template>

<style scoped>
.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/pigfield.jpg');
  background-size: cover;
  background-position: center;
}

.window {
  position: absolute;
  overflow: auto;
}

.window.minimized {
  height: 30px;
  overflow: hidden;
}

.window.maximized {
  border: none;
}

.title-bar {
  cursor: move;
  user-select: none;
}

.app-background {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(51, 51, 51, 0.5));
  height: 100%;
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

.logo {
  display: block;
  margin: 0 auto 2rem;
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

.app-icon {
  position: absolute;
  top: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: white;
  text-shadow: 0 0 5px black;
}

.app-icon img {
  width: 64px;
  height: 64px;
}

.app-icon span {
  margin-top: 5px;
  font-family: 'IBM BIOS', monospace;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
