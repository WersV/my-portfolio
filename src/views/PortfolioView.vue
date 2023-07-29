<template>
  <main class="portfolio-view">
    <h1>My <span>portfolio</span></h1>
    <div class="projects-wrapper">
      <section class="project">
        <img src="@/assets/img/psychology-specialist-screen.png" alt="psychology specialist website">
        <div class="title">
          <span>Psychology specialists</span>
        </div>
      </section>
      <section class="project">
        <img src="@/assets/img/ip-tracker-screen.png" alt="ip tracker website">
        <div class="title">
          <span>Ip tracker</span>
        </div>
      </section>
      <section class="project">
        <img src="@/assets/img/recipes-screen.png" alt="cooking website">
        <div class="title">
          <span>Simple recipes</span>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
export default {
  
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
</style>