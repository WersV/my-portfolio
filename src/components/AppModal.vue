<template>
  <div class="modal-bg" v-if="isModalOpen">
  <div 
    class="modal" 
    ref="modal"
    role="dialog"
    aria-labelledby="dialogTitle"
    aria-describedby="dialogDesc"
  >
    <button class="close-btn" @click="isModalOpen = false">
      <font-awesome-icon icon="fa-regular fa-circle-xmark" />
    </button>
    <slot name="h2">Modal Title
    </slot>
    <div id="dialogDesc" class="details-wrapper">
      <div class="modal-detail">
        <slot name="detailContent1"></slot>
      </div>
      <div class="modal-detail">
        <slot name="detailContent2"></slot>
      </div>
      <div class="modal-detail">
        <slot name="detailContent3"></slot>
      </div>
    </div>
    <slot name="img"></slot>
  </div>  
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';
import {onClickOutside} from '@vueuse/core';

const modal = ref(null)
const isModalOpen = ref(false)

onClickOutside(modal, () => (isModalOpen.value = false))

watch(isModalOpen, () => {
  if (isModalOpen.value) {
  document.body.style.overflowY = "hidden";
} else {
  document.body.style.overflowY = "scroll";
}
}, {immediate: true})

const openModal = () => {
  isModalOpen.value = true;
}
defineExpose({
  openModal,
})
</script>
<style lang="scss">
@import '@/assets/_variables.scss';
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .modal {
      position: relative;
      width: 100%;
      max-width: 650px;
      background-color: white;
      margin: 0 10px;
      padding: 20px;
      border-radius: 15px;
      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        .fa-circle-xmark {
          font-size: 30px;
          color: $text-light-gray;
        }
      }
      h2 {
        font-size: 22px;
        font-weight: 700;
        color: $text-yellow;
        text-transform: uppercase;
        margin: 10px 0 20px 0;
      }
      .details-wrapper {
        display: flex;
        flex-wrap: wrap;
        .modal-detail {
          position: relative;
          flex-basis: 100%;
          line-height: 2;
          p {
            position: relative;
            display: inline-block;
            color: rgb(139, 139, 139);
            padding-left: 22px;

            .fa-folder, .fa-hammer, .fa-arrow-up-right-from-square {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            color: rgb(139, 139, 139);
            }
          }
          span {
            color: $text-light-gray;
          }
          a {
            color: $text-yellow;
            text-decoration: none;
          }
        }
      }
      img {
        display: block;
        width: 100%;
        margin-top: 30px;
        border-radius: 10px;
      }
    }
  }

  .dark .modal-bg {
    .modal {
      background-color: #252525;
      .close-btn {
        .fa-circle-xmark {
          color: $text-dark-white;
        }
      }
      .details-wrapper {
        .modal-detail {
          p, span {
            color: $text-dark-white;
          }
        }
      }
    }
  }
</style>