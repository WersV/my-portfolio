<template>
  <aside class="switch-container">
    <button class="switch" @click="toggleDark()">
      <font-awesome-icon icon="fa-solid fa-moon" v-if="!isDark"/>
      <font-awesome-icon icon="fa-solid fa-lightbulb" v-else/>
    </button>
  </aside>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
<style lang="scss">
@import '@/assets/_variables.scss';
.switch-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #2c2c2c;
  border-radius: 50%;
  z-index: 1;
  .switch {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    .fa-moon, .fa-lightbulb {
      font-size: 35px;
      color: $bcg-color-light;
    }
  }
}
</style>