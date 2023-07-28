<template>
  <main class="portfolio-view">
    <h1>My <span>portfolio</span></h1>
    <div class="projects-wrapper">
      <section class="project">
        <img src="@/assets/img/psychology-specialist-screen.png" alt="">
      </section>
      <section class="project">
        <img src="@/assets/img/ip-tracker-screen.png" alt="">
      </section>
      <section class="project">
        <img src="@/assets/img/recipes-screen.png" alt="">
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
    h1 {
      color: $text-light-gray;
      font-size: 35px;
      text-transform: uppercase;
      font-weight: 900;
      span {
        display: block;
        color: $text-yellow;
      }
    }
    .projects-wrapper {
      width: 100%;
      .project {
        width: 300px;
        height: 300px;
        img {
          display: block;
          max-width:90%;
          max-height:90%;
        }
      }
    }
  }
</style>