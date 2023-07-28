<template>
  <main class="about-view">
    <h1>About <span>me</span></h1>
    <div class="wrapper">
      <section class="personal-info">
      <h2>Personal Info</h2>
      <img src="@/assets/img/portfolio-photo-mobile.jpg" alt="portfolio owner">
      <section class="details">
        <div class="detail">
          <p>First Name:</p>
          <span>Przemysław</span>
        </div>
        <div class="detail">
          <p>Last Name:</p>
          <span>Botwina</span>
        </div>
        <div class="detail detail-link">
          <p>Git:</p>
          <a href="https://github.com/WersV">See my profile</a>
        </div>
        <div class="detail detail-link">
          <p>Codewars:</p>
          <a href="https://www.codewars.com/users/WersV/completed">See challenges</a>
        </div>
        <div class="detail">
          <p>Languages:</p>
          <span>Polish, English(B2)</span>
        </div>
        <div class="detail">
          <p>Phone:</p>
          <span>736 245 290</span>
        </div>
        <div class="detail">
          <p>Email:</p>
          <span>botwina.przemyslaw@gmail.com</span>
        </div> 
      </section>
      <button>Download CV <span><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></button>
    </section>
    <section class="key-features">
      <div>
        <span>2+</span>
        <p>years of experience</p>
      </div>
      <div>
        <span>10+</span>
        <p>Completed projects</p>
      </div>
      <div>
        <span>900+</span>
        <p>Hours on learning</p>
      </div>
      <div>
        <span>Countless</span>
        <p>Bugs fixed</p>
      </div>
    </section>
    </div>
    <section class="my-skills">
      <h2>My skills</h2>
      <h3>Technical</h3>
      <div>
        <span>Vue</span>
      </div>
      <div>
        <span>JavaScript</span>
      </div>
      <div>
        <span>HTML</span>
      </div>
      <div>
        <span>CSS/SASS</span>
      </div>
      <div>
        <span>Responsive Design</span>
      </div>
      <div>
        <span>GIT</span>
      </div>
      <div>
        <span>REST API</span>
      </div>
      <div>
        <span>Web Accessibility</span>
      </div>
      <div>
        <span></span>
      </div>
      <h3>Soft</h3>
      <div>
        <span>Problem-Soliving</span>
      </div>
      <div>
        <span>Teamwork</span>
      </div>
      <div>
        <span>Creativity</span>
      </div>
      <div>
        <span>Communication</span>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
@import '@/assets/_variables.scss';
  .about-view {
    margin: 0 20px;
    h1 {
      color: #666666;
      text-transform: uppercase;
      font-weight: 900;
      margin: 50px 0;
      span {
        color: $text-yellow;
      }
    }
    .wrapper {
      .personal-info {
        h2 {
          color:#666666;
          text-transform: uppercase;
          margin: 30px 0;
        }
        img {
          @include img-styles;
        }
      }
      .details {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        gap: 18px;
        .detail {
          flex-basis: 46%;
          line-height: 24px;
          p {
            color: rgb(139, 139, 139);
          }
          span {
            color: #666666;
            font-weight: 700;
          }
        }
        .detail-link {
          a {
            text-decoration: none;
            color: $text-yellow;
            font-weight: 700;
          }
        }
      }
      @include btn-styles-anim(250px);
    }
      .key-features {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      // gap: 10px;
      .feature {
        flex-basis: 40%;
        // border: 1px solid #cecece;
        box-shadow: 0 8px 6px -6px #cecece;
        padding: 20px;
        span {
          color: $text-yellow;
          font-size: 32px;
          font-weight: 700;
        }
        p {
          color: $text-light-gray;
          width: 80px;
          text-transform: uppercase;
        }
      }
      .feature:last-child {
        span {
          font-size: 35px;
          line-height: 30px;
        }
      }
     }
      @include btn-styles-anim(250px);
    }
    .separator {
      width: 50%;
      max-width: 1280px;
      border-bottom: 1px solid #d8d8d8;
      margin: 60px auto 22px auto;
    }
    .my-skills {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      h2 {
        @include about-me-h2;
      }
      h3 {
        font-size: 16px;
        color: rgb(139, 139, 139);
        text-transform: uppercase;
        margin: 20px 0;
      }
      .skills-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        .skill {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 120px;
          height: 120px;
          border: 2px solid $text-yellow;
          border-radius: 50%;
          text-transform: uppercase;
          span {
            color: $text-light-gray;
            font-weight: 700;
          }
        }
      }
    }
    .my-skills .skills-wrapper:last-child {
      margin-bottom: 80px;
    }
  // zrób propsy isLowRes z App.vue do child components
</style>