<script setup>
import LightSwitcher from '@/components/AppLightSwitcher.vue'
import NavMenu from '@/components/AppNavMenu.vue'
import {RouterView} from 'vue-router'
import {onMounted} from 'vue';
import {useGlobalVariables} from '@/stores/globalVariables'

const globalVariables = useGlobalVariables();
onMounted(() => {
  window.addEventListener('resize', globalVariables.toggleIsLowRes);
  globalVariables.toggleIsLowRes();
})
</script>

<template>
  <div class="animation-wrapper"></div>
  <LightSwitcher/>
  <NavMenu/>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import '@/assets/_variables.scss';
@import './assets//global.css';
body {
  // position: fixed;
  background-color: $bcg-color-light;
  // .animation-wrapper {
  //   position: fixed;
  //   top: 0;
  //   transform: translateY(0%);
  //   width: 100%;
  //   height: 100vh;
  //   background-color: #272727;
  //   z-index: 3;
  //   transition: margin-top 1s;
  // }
}

.v-enter-active,
.v-leave-active {
  transition: all .3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}
//dark mode 
.dark body {
  background-color: $bcg-color-dark;
}
</style>
