<template>
  <main class="home-view">
    <header class="home-img-container">
      <!-- <img src="@/assets/img/portfolio-photo-mobile.jpg" alt="portfolio owner"> -->
    </header>
    <section class="home-info">
      <h1><span>I'm Przemysław Botwina <br/></span>web developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi. Nobis minima repudiandae explicabo deserunt nisi quibusdam neque dolor porro, harum quisquam fuga molestiae facilis quidem! Velit aliquid dignissimos cumque.</p>
      <button>GitHub <span><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></button> 
    </section>
  </main>
</template>

<script setup>
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
      display: block;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      margin: 0 auto;
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
    button {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 200px;
      font-size: 20px;
      font-weight: 700;
      background-color: transparent;
      border: 1px solid #FFB400;
      border-radius: 30px;
      padding: 15px 20px 15px 55px;
      margin-bottom: 70px;
      text-align: center;
      color: #666666;
      cursor: pointer;
      overflow: hidden;
      transition: .3s linear;
      -webkit-tap-highlight-color: transparent;
      span {
        position: absolute;
        top: -2.5%;
        right: -1%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        background-color: #FFB400;
        border-radius: 50%;
        color: white;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(100%);
        width: 200px;
        height: 100%;
        background-color: #FFB400;
        border-radius: 20px;
        z-index: -1;
        transition: .3s linear;
      }
    }
    button:hover::after {
      transform: translateX(0);
    }
    button:hover {
      color: white;
    }
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
