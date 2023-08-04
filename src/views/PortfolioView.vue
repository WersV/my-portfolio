<template>
  <main class="portfolio-view">
    <h1>My <span>portfolio</span></h1>
    <div class="projects-wrapper">
      <section class="project" @click="openChildModal('Psychology specialist')">
        <img src="@/assets/img/psychology-specialist-screen.png" alt="psychology specialist website">
        <div class="title">
          <span>Psychology specialists</span>
        </div>
      </section>
      <section class="project" @click="openChildModal('Ip Adress Tracker')">
        <img src="@/assets/img/ip-tracker-screen.png" alt="ip tracker website">
        <div class="title">
          <span>Ip Adress tracker</span>
        </div>
      </section>
      <section class="project" @click="openChildModal('Simple Recipes')">
        <img src="@/assets/img/recipes-screen.png" alt="cooking website">
        <div class="title">
          <span>Simple recipes</span>
        </div>
      </section>
    </div>
    <Teleport to="#modal">
      <Transition name="modal">
        <ModalProject ref="ModalProjectRef" :project-data="projectData"/>
      </Transition>
    </Teleport>
  </main>
</template>
<script setup>
import {ref} from 'vue'
import ModalProject from '@/components/ModalProject.vue'

const modalDetails = ref({
  project1:   {
    header: 'Psychology Specialist',
    project: 'Website',
    tools: 'Vue, JS, HTML, SASS, API, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/psychology-specialist-website-vue',
    img: '@/assets/img/psychology-specialist-screen.png',
    alt: 'psychology specialist website'
  },
  project2: {
    header: 'Ip Adress Tracker',
    project: 'Web App',
    tools: 'JS, HTML, SASS, REST API, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/ip-adress-tracker',
    img: '@/assets/img/ip-tracker-screen.png',
    alt: 'ip tracker website'
  },
  project3: {
    header: 'Simply Recipes',
    project: 'Website',
    tools: 'HTML, SASS, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/simply-recipes',
    img: '@/assets/img/recipes-screen.png',
    alt: 'cooking website'
  }
})

const ModalProjectRef = ref(null);

const projectData = ref(null);

const openChildModal = (projectName) => {
  ModalProjectRef.value.openModal();
  // console.log(modalDetails.value.project2);
  projectData.value = modalDetails.value.project2
}

</script>
<style lang="scss">
@import '@/assets/_variables.scss';
  .portfolio-view {
    margin: 0 10px;
    h1 {
      color: $text-light-gray;
      font-size: 35px;
      text-transform: uppercase;
      font-weight: 900;
      margin: 60px 0;
      span {
        display: block;
        color: $text-yellow;
      }
    }
    .projects-wrapper {
      margin-bottom: 100px;
      width: 100%;
      .project {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
        overflow: hidden;
        img {
          display: block;
          width:100%;
          height: calc(100vw * 0.5);
          border-radius: 10px;
        }
        .title {
          display: flex;
          align-items: center;
          text-align: center;
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FFB400;
          border-radius: 10px;
          text-transform: uppercase;
          transition: .3s linear;
          cursor: pointer;
          span {
            width: 100%;
            color: white;
            font-size: 18px;
            font-weight: 500;
          }
        }
        .title:hover, .title:hover span {
          opacity: 0;
        }
      }
    }
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: all .2s linear;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: scale(1.2);
  }
</style>