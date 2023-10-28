<template>
  <main class="portfolio-view">
    <div class="portfolio-wrapper">
      <h1>My <span>portfolio</span></h1>
      <div class="projects-wrapper">
        <section class="project" @click="openChildModal(value.header)" v-for="value in modalDetails" :key="value.header">
          <img :src="value.img" :alt="value.alt">
          <div class="title">
            <span>{{ value.header }}</span>
          </div>
        </section>
      </div>
    </div>
    <Teleport to="#modal">
      <Transition name="modal">
        <AppModal ref="ModalProjectRef" :project-data="projectData"> 
          <template #h2>
            <h2 id="dialogTitle">{{ ' ' +  projectData.header }}</h2>
          </template>
          <template #detailContent1>
          <p>
            <font-awesome-icon icon="fa-solid fa-folder" />
            Project:
          </p>
          <span>{{ ' ' + projectData.project}}</span>
          </template>
          <template #detailContent2>
            <p>
              <font-awesome-icon icon="fa-solid fa-hammer" />
              Tools:
            </p>
            <span>{{ ' ' + projectData.tools }}</span>
          </template>
          <template #detailContent3>
            <p>
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
              Preview:
            </p>
            <a :href="projectData.preview"> Click</a>
          </template>
          <template #img>
            <img :src="projectData.img" :alt="projectData.alt">
          </template>
        </AppModal>
      </Transition>
    </Teleport>
  </main>
</template>
<script setup>
import {ref} from 'vue'
import AppModal from '@/components/AppModal.vue'
import psychologySpecialistImg from '../assets/img/psychology-specialist-screen.jpg'
import IpTrackerImg from '../assets/img/ip-tracker-screen.jpg'
import RecipesImg from '@/assets/img/recipes-screen.jpg'
import PortfolioImg from '@/assets/img/portfolio-screen.png'
import PomodoroImg from '@/assets/img/pomodoro-app.jpg'

const modalDetails = ref({
  project1:   {
    header: 'Psychology Specialist',
    project: 'Website',
    tools: 'Vue, JS, HTML, SASS, API, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/psychology-specialist-website-vue',
    img: psychologySpecialistImg,
    alt: 'psychology specialist website'
  },
  project2: {
    header: 'Pomodoro App',
    project: 'Web App',
    tools: 'Vue, Pinia(state management), JS, HTML, SASS, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/pomodoro-app/',
    img: PomodoroImg,
    alt: 'pomodoro web app'
  },
  project3: {
    header: 'Portfolio',
    project: 'Website',
    tools: 'Vue, Pinia(state management), JS, HTML, SASS, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/my-portfolio/',
    img: PortfolioImg,
    alt: 'portfolio website'
  },
  project4: {
    header: 'Ip Adress Tracker',
    project: 'Web App',
    tools: 'JS, HTML, SASS, REST API, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/ip-adress-tracker',
    img: IpTrackerImg,
    alt: 'ip tracker website'
  },
  project5: {
    header: 'Simply Recipes',
    project: 'Website',
    tools: 'HTML, SASS, Responsiveness, Accessibility',
    preview: 'https://wersv.github.io/simply-recipes',
    img: RecipesImg,
    alt: 'cooking website'
  }
})

const ModalProjectRef = ref(null);

const projectData = ref(null);

const projectListMap = {
  'Psychology Specialist': modalDetails.value.project1,
  'Pomodoro App': modalDetails.value.project2,
  'Portfolio': modalDetails.value.project3,
  'Ip Adress Tracker': modalDetails.value.project4,
  'Simply Recipes': modalDetails.value.project5
}

const openChildModal = (projectName) => {
  projectData.value = projectListMap[projectName];
  ModalProjectRef.value.openModal();
}

</script>
<style scoped lang="scss">
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
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 100px;
      width: 100%;
      .project {
        position: relative;
        width: 100%;
        max-width: 350px;
        max-height: 175px;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 10px;
        img {
          display: block;
          width:100%;
          height: calc(100vw * 0.6);
          max-width: 350px;
          max-height: 175px;
          border-radius: 10px;
          filter: blur(4px);
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

  // dark mode ==============
  .dark .portfolio-view {
    h1 {
      color: $text-dark-white;
    }
  }

  @media(min-width: 575px) {
    .portfolio-view {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height: 100vh;
      h1 {
        flex-basis: 100%;
        font-size: 56px;
        text-align: center;
        span {
          display: inline;
        }
      }
      .projects-wrapper {
        gap: 20px;
        width: 570px;
        .project {
          width: 250px;
          height: 150px;
          margin: 0;
          img {
            width: 250px;
            height: 150px;
          }
        }
      }
    }
  }

  @media(min-width: 1060px) {
    .portfolio-view {
      margin: 0 20px;
      .projects-wrapper {
        max-width: 1280px;
        width: 100%;
        .project {
          max-width: 500px;
          max-height: 300px;
          width: 500px;
          height: 300px;
          img {
            max-width: 500px;
            max-height: 300px;
            width: 500px;
            height: 300px;
          }
          .title {
            span {
              font-size: 25px
            }
          }
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