<template>
  <nav class="sidebar">
      <RouterLink class="nav-link" to="/"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
      <RouterLink class="nav-link" to="/about"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
      <RouterLink class="nav-link" to="/portfolio"><font-awesome-icon icon="fa-solid fa-briefcase" /></RouterLink>
      <RouterLink class="nav-link" to="/contact"><font-awesome-icon icon="fa-solid fa-envelope" /></RouterLink>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
<style scoped lang="scss">
@import '@/assets/_variables.scss';
.sidebar {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 8px;
  background-color: $nav-bcg-light;
  z-index: 2;
  .nav-link {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: $btn-bcg-light;
    -webkit-tap-highlight-color: transparent;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      color: $btn-text-light;
    }
  }

  .router-link-active {
      background-color: $active-btn-bcg; 
    svg {
      color: $active-btn-text;
    }
  }
}

//==================== dark mode
.dark .sidebar {
  background-color: $nav-bcg-dark;
  .nav-link {
    background-color: $btn-bcg-dark;
    svg {
      color: $btn-text-dark;
    }
  }
  .router-link-active {
      background-color: $active-btn-bcg; 
    svg {
      color: $active-btn-text;
    }
  }
}
@media (min-width: 1024px) {
  .sidebar {
    flex-direction: column;
    bottom: 50%;
    right: 20px;
    transform: translateY(50%);
    width: 55px;
    height: 350px;
    background-color: transparent;
    .nav-link {
      background-color: rgb(243, 243, 243);
    }
    .router-link-active {
      background-color: $active-btn-bcg; 
    svg {
      color: $active-btn-text;
    }
  }
  }
  // dark mode min-1024px
  .dark .sidebar {
    background-color: transparent;
  }
}
</style>