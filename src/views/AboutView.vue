<script setup lang="ts">
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <card>
    <iframe
      style="border: 10px solid #333; width: 350px; height: 654px;"
      src="https://bandcamp.com/EmbeddedPlayer/album=1594200999/size=large/bgcol=333333/linkcol=fe7eaf/transparent=true/"
      seamless
    ></iframe>
  </card>

  <card>
    <h2>3pigs</h2>
    <p>3pigs is a band from the New Paltz, New York music scene. They pigs take a lot of influences from the electronic underground and club scenes, along with the newer shoegaze scene.</p>
  </card>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

card {
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
