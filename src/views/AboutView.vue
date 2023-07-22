<template>
  <main class="about-view">
    <h1>About me</h1>
    <div class="wrapper">
      <section class="personal-info">
      <h2>Personal Info</h2>
      <img src="@/assets/img/portfolio-photo-mobile.jpg" alt="portfolio owner" v-if="isLowRes">
      <section class="details">
        <div>
          <p>first name:</p>
          <span>Przemysław</span>
        </div>
        <div>
          <p>Last Name:</p>
          <span>Botwina</span>
        </div>
        <div>
          <p>Age:</p>
          <span>24 Years</span>
        </div>
        <div>
          <p>Phone:</p>
          <span>736 245 290</span>
        </div>
        <div>
          <p>Email:</p>
          <span>botwina.przemyslaw@gmail.com</span>
        </div> 
        <div>
          <p>Git:</p>
          <a href="https://github.com/WersV">See my profile</a>
        </div>
        <div>
          <p>Codewars:</p>
          <a href="https://www.codewars.com/users/WersV/completed">See completed challenges</a>
        </div>
        <div>
          <p>Languages:</p>
          <span>Polish, English(B2)</span>
        </div>
      </section>
      <button>Download CV</button>
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
<style>
  
</style>