<template>
  <aside class="switch-container">
    <div class="switch">
      <font-awesome-icon icon="fa-solid fa-moon" />
    </div>
  </aside>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.switch-container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  .switch {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    .fa-moon {
      font-size: 35px
    }
  }
}
</style>