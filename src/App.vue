<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
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
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.app-background {
  background-image: url('@/assets/pigfield.jpg');
  background-size: fill;
  background-position: center;

  background: linear-gradient(to top, #000000, #000000, #333333, #333333);
  background-size: cover;
  background-size: 100% 5px;

}

.header-background {
  background-image: url('@/assets/pigascii.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat; /* Added to repeat the image */
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
