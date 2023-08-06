<template>
  <main class="contact-view">
    <h1>Get in <span>touch</span></h1>
    <section class="msg-to-recruiter">
      <p>Are you ready to enhance your team's web development efforts? I'm eager to contribute my skills and work on projects that push the boundaries of what's possible. Let's start this exciting journey together.</p>
      <p>
      Besides being skilled in Vue.js development, I'm also excited to learn and explore other technologies like React, Angular, and other modern frameworks.
      </p>
      <p>Feel free to contact me through the form whether you have a specific job opportunity. Let's connect, and I'll be thrilled to demonstrate how I can be an invaluable asset to your team.</p>
    </section>
    <div class="contact-form-wrapper">
      <form method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
        <label for="subject">Subject:</label>
        <input type="text" name="submit" id="submit">
        <label for="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="7"></textarea>
        <button>Send message<span><font-awesome-icon icon="fa-solid fa-paper-plane" /></span></button>
      </form>
    </div>
  </main>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
@import '@/assets/_variables.scss';
  .contact-view {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 10px 100px 10px;
    h1 {
      flex-basis: 100%;
      color: $text-light-gray;
      font-size: 35px;
      text-transform: uppercase;
      font-weight: 900;
      margin: 60px 0;
      text-align: center;
      span {
        color: $text-yellow;
      }
    }
    .msg-to-recruiter {
      max-width: 500px;
      margin-bottom: 50px;
        p {
          color: $text-light-gray;
          text-align:center;
        }
      }
    .contact-form-wrapper {
      max-width: 500px;
      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        label {
          flex-basis: 100%;
          color: $text-light-gray;
          font-size: 20px;
          margin: 5px 0;
        }
        input, textarea {
          font-size: 18px;
          padding: 10px;
          color: $text-light-gray;
          border-radius: 25px;
          border: 1px solid rgb(180, 180, 180);
          width: 100%;
        }
        textarea {
          resize: none;
        }
        @include btn-styles-anim(90%, 30px);
        button {
          margin: 30px auto 0 auto;
          width: 250px;
        }
      }
    }
  }

  //dark mode =====
  .dark .contact-view {
    h1 {
      color: $text-dark-white;
    }
    .msg-to-recruiter {
      p {
        color: $text-dark-white;
      }
    }
    .contact-form-wrapper {
      form {
        label {
          color: $text-dark-white;
        }
        input, textarea {
          background-color: #252525;
          border: 0;
          color: white;
        }
        button {
          color: white;
        }
      }
    }
  }

  @media(min-width: 575px) {
    .contact-view {
      .contact-form-wrapper {
        form {
          button {
            margin: 30px auto 0 0;
          }
        }
      }
    }
  }

  @media(min-width: 1020px) {
    .contact-view {
      justify-content: space-around;
      max-width: 1280px;
      margin: 0 auto 100px auto;
      .msg-to-recruiter {
        align-self: center;
        // flex-basis: 35%;
        // max-width: 40%;
        margin: 0 20px 0 20px;
        p {
          font-size: 20px;
        }
      }
      .contact-form-wrapper {
        margin: 0 20px 0 20px;
        form {
        }
      }
    }
  }
</style>