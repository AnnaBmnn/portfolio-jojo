<template>
  <div class="about" @mousemove="moveEyes">
    <div class="container">
      <router-link class="logo about__logo" to="/">
        <img src="../assets/img/logo.svg">
      </router-link>
      <div class="wassup__wrapper">
        <div class="wassup__me">
          <h1 class="wassup__title">
            WASSUP<br>
            ROCKERS?
          </h1>
        </div>
        <div class="wassup__txt">
          
            I’m Johanna Nguyen,
            a junior web and graphic designer.
            <br>
            <br>
            I’m studying at <hover-image word="HETIC" link="https://www.hetic.net/" imgUrl="https://media.giphy.com/media/1IDqrFySO6y1a/giphy.gif" /> in Paris, a web school 
            where I discovered UI and UX. In this way, I 
            worked at <hover-image word="Dogstudio" link="https://www.dogstudio.co/" imgUrl="https://66.media.tumblr.com/e1f66daca1a4dd8fd156ef3aa499d34b/tumblr_inline_msn9qyKvTO1qz4rgp.gif"/> during my last summer internship.
            <br>
            <br>
            In the same time I started to take an interest in a more global 
            form of design: graphic, motion and print. 
            And today, I really want to make this curosity my profession.
            So I decided to learn and experiment on my side. 
            <br>
            <br>
            I’m looking for a 6 months internship in a <hover-image word="cool place"  imgUrl="https://media.giphy.com/media/N3SrQHIh87mJq/giphy.gif" />
            where I can discover things and improve my skills in this areas. 
        </div>
        <div class="wassup__everyWhere">
          <div class="everyWhere__eyes">
            <eyes />
            <!-- <img src="../assets/img/about/eyes.svg"> -->
          </div>
          <ul class="everyWhere__socials">
            <span>I’M EVERYWHERE</span>
            <li><a target="_blank" href="https://dribbble.com/johannanguyen">Dribbble</a></li>
            <li><a target="_blank" href="https://www.behance.net/johannanguyen">Behance</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/johanna-nguyen/">Linkedin</a></li>
            <li><a target="_blank" href="https://www.instagram.com/nguyen.again/">Instagram</a></li>
          </ul>
        </div>

      </div>
      <div  class="about__btnContainer" >
        <button-shadow class="about__btn" linkTo="/" linkContent="back" />
      </div>
      
    </div>
    <skills />
    <tiredToSee />
  </div>
</template>

<script>
import ButtonShadow from "@/components/ButtonShadow.vue";
import Skills from "@/components/Skills.vue";
import HoverImage from "@/components/HoverImage.vue";
import TiredToSee from "@/components/TiredToSee.vue";
import Eyes from "@/components/Eyes.vue";

// @ is an alias to /src

export default {
  name: "about",
  components: {
    ButtonShadow,
    Skills,
    HoverImage,
    TiredToSee,
    Eyes
  },
  props: {},
  methods: {
    moveEyes: function(event) {
      // pass event object, bound to mouse move with updat
      const eyes1 = document.querySelector("#eyes_1");
      const eyes2 = document.querySelector("#eyes_2");
      eyes1.style.transform = `translate3d(${event.clientX *
        0.018}%, ${event.clientY * 0.075}%,1px)`;
      eyes2.style.transform = `translate3d(${event.clientX *
        0.018}%, ${event.clientY * 0.075}%,1px)`;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  @media screen and (max-width: 600px) {
    padding: 30px 0px 50px 0;
  }
  .hoverImage__word {
    margin-bottom: 0;
  }
}
.about__logo {
  position: absolute;
  left: 1.9%;
  top: 10vh;
  margin-left: 0%;

  @media screen and (max-width: 1000px) {
    left: 0%;
  }
  @media screen and (max-width: 750px) {
    width: 60px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    width: 90px;
  }
}
.about__btnContainer {
  z-index: 100;
  position: fixed;
  right: 4%;
  top: 10vh;
}
.about__btn {
  display: inline-block;
  position: relative;
}

.wassup__wrapper {
  width: 66%;
  margin: 0 auto;
  display: flex;
  padding-top: 5vh;
  position: relative;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 180px;
  }
}
.wassup__txt,
.wassup__me {
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
}

.wassup__txt {
  font-size: 1.125rem;
  line-height: 135%;
  padding-top: 10px;
  @media screen and (max-width: 900px) {
    padding-top: 40px;
    margin-bottom: 200px;
  }
}
.wassup__everyWhere {
  width: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate3d(-50%, 0, 1px);
  display: flex;
  @media screen and (max-width: 900px) {
    width: 100%;
    left: unset;
    right: 0;
    transform: translate3d(0, 0, 1px);
  }
}
.everyWhere__socials,
.everyWhere__eyes {
  width: 50%;
  font-size: 0.875rem;
  box-sizing: border-box;
  img {
    width: 63px;
    margin-left: 35%;
    @media screen and (max-width: 900px) {
      margin-left: 15%;
    }
  }
  span {
    margin-bottom: 15px;
    display: inline-block;
  }
  li {
    display: block;
  }
  a {
    color: inherit;
    display: inline-block;
    margin-bottom: 6px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 99%;
      height: 3px;
      border-radius: 3px;
      top: 100%;
      left: 0;
      background-color: #f54123;
    }
  }
}
.everyWhere__socials {
  margin-top: 20px;
  margin-bottom: 0;
  padding-left: 0;
}
.wassup__title {
  font-family: "integral cf";
  font-style: unset;
  font-size: 2.5rem;
  @media screen and (max-width: 900px) {
    font-size: 2.25rem;
  }
}
</style>
