<template>
    <label :for="forAttr" v-bind="$attrs">{{ label }}</label>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    :name="forAttr"
    :id="forAttr"
    required/>
</template>
<script setup>

defineProps({
  label: {
    type: String,
    default: ''
  },
  forAttr: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

</script>
<style scoped lang="scss">
@import '@/assets/_variables.scss';
  label {
    flex-basis: 100%;
    color: $text-light-gray;
    font-size: 20px;
    margin: 5px 0;
  }
  input {
    font-size: 18px;
    padding: 10px;
    color: $text-light-gray;
    border-radius: 25px;
    border: 1px solid rgb(180, 180, 180);
    width: 100%;
  }

  //dark mode =====
  .dark label {
    color: $text-dark-white;
  }
  .dark input {
    background-color: #252525;
    border: 0;
    color: white;
  }
</style>