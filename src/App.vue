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

<style scoped>
body {
  background-color: white;
}
</style>
