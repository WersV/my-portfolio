<template>
  <main class="home-view">
    <div class="css-el"></div>
    <header class="home-img-container">
      <img src="@/assets/img/portfolio-photo-mobile.jpg" alt="portfolio owner" v-if="isLowRes">
    </header>
    <section class="home-info">
      <h1><span>I'm Przemysław Botwina <br/></span>web developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi. Nobis minima repudiandae explicabo deserunt nisi quibusdam neque dolor porro, harum quisquam fuga molestiae facilis quidem! Velit aliquid dignissimos cumque.</p>
      <button>GitHub <span><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></button> 
    </section>
  </main>
</template>

<script setup>
import {useGlobalVariables} from '@/stores/globalVariables'
import {storeToRefs} from 'pinia';
  // const isLowRes = ref(null)


  // function showLowResImg() {
  //   const width = window.innerWidth
  //   if (width < 1024) {
  //     isLowRes.value = true
  //   } else {
  //     isLowRes.value = false
  //   }
  // }
  
  // onMounted(() => {
  //   window.addEventListener('resize', showLowResImg)
  //   showLowResImg()
  // })


  // musisz tutaj dodać globalną zmienną z globalVariables.js i funkcję która będzie zmieniać zm ienną isLowRes
  const globalVariables = useGlobalVariables();
  const {isLowRes} = storeToRefs(globalVariables);
  // console.log(globalVariables.isLowRes);

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
    h1 {
      font-size: 30px;
      font-weight: 900;
      text-transform: uppercase;
      color: #666666;
      margin-bottom: 20px;
      span {
        color: #FFB400;
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
    h1, p, button {
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
      h1 {
        font-size: 37px;
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
      h1 {
        font-size: 42px;
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
