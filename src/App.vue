<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section>
    <div class="sidebar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </section>

  <RouterView />
</template>

<style lang="scss">
@import './assets/_variables.scss';
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: $bcg-color-dark;
}
</style>
