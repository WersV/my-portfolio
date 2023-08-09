<template>
  <main class="home-view">
    <div class="css-el"></div>
    <header class="home-img-container">
      <img src="@/assets/img/portfolio-photo-mobile.jpg" alt="portfolio owner" v-if="isLowRes">
    </header>
    <section class="home-info">
      <div class="h1-span-container">
        <h1>I'm Przemysław Botwina</h1>
        <span>Aspiring Junior Web Developer</span>  
        <span>Creative Problem Solver</span>  
        <span>Passionate about Coding</span>
      </div>  
      <p>Hello there! I'm Przemysław Botwina, and I'm thrilled to have you on my portfolio page. As an aspiring Junior Web Developer, I'm on a mission to turn innovative ideas into functional and visually stunning websites. Here, you'll get a glimpse of my skills, projects, and a little insight into what drives my passion for web development.</p>
      <button onclick="window.open('https://github.com/WersV','_blank');">GitHub <span><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></button>
        <!-- dodaj do about-view rozdział ze swoimi zainteresowaniami -->
    </section>
  </main>
</template>

<script setup>
import {useGlobalVariables} from '@/stores/globalVariables'
import {storeToRefs} from 'pinia';
  const globalVariables = useGlobalVariables();
  const {isLowRes} = storeToRefs(globalVariables);
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 20px;
  height: 100vh;
  box-sizing: border-box;
  .home-img-container {
    margin-bottom: 20px;
    img {
      @include img-styles;
    }
  }
  .home-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    position: relative;
    max-width: 550px;
    .h1-span-container {
      margin-bottom: 20px;
      h1 {
        color: #FFB400;
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      span {
        position: relative;
        display: block;
        color: #666666;
        font-size: 20px;
        margin-bottom: 5px;
        // text-decoration: underline dotted;
      }
      span:before {
        content: '\1F449';
      }
    }
    p {
      line-height: 1.5;
      color: #666666;
      margin-bottom: 20px;
    }
    @include btn-styles-anim(200px);
  }
}

// @media (max-height: 730px) {
//   .home-view {
//     margin: 30px 20px 0 20px;
//   }
// }

//dark mode
.dark .home-view {
  .home-info {
    h1, span, p, button {
      color: white;
    }
  }
}
// end of dark mode

@media (max-height: 730px) {
  .home-view {
    justify-content: flex-start;
    margin: 30px 20px 0 20px;
  }
}

@media (min-width: 570px) {
  .home-view {
    .home-info {
      .h1-span-container {
        h1 {
          font-size: 37px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .home-view {
    flex-direction: row;
    position: relative;
    justify-content: space-around;
    margin: 0;
    padding: 0 40px;
    .css-el {
      position: absolute;
      width: 30vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: #FFB400;
      clip-path: polygon(0% 0%,0% 100%,100% 100%,35% 0%);
      z-index: -1;
    }
    .home-img-container {
      width: 35%;
      height: 80vh;
      background-image: url('@/assets/img/portfolio-photo-desktop.jpg');
      background-size: cover;
      background-position-x: center;
      border-radius: 30px;
      margin: 0 50px 0 0;
    }
    .home-info {
      width: 45vw;
      max-width: 600px;
      text-align: left;
      justify-content: flex-start;
      margin-right: 50px;
      .h1-span-container {
        h1 {
          font-size: 42px;
        }
      }
      p {
        line-height: 2;
      }
      button {
        margin: 0;
      }
    }
  }
}

</style>
