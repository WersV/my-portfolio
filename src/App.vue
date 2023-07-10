<script setup>
import LightSwitcher from '@/components/AppLightSwitcher.vue'
import NavMenu from '@/components/AppNavMenu.vue'
import {RouterView} from 'vue-router'
</script>

<template>
  <LightSwitcher/>
  <NavMenu/>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/_variables.scss';
@import './assets//global.css';
body {
  background-color: $bcg-color-light;
}
</style>
