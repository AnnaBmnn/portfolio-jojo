<template>
  <div class="about">
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
          
            I’m Johanna Nguyen, a junior art director 
            and a graphic designer. 
            <br>
            <br>
            I’m studying at <hover-image word="HETIC"/> in Paris, a web school 
            where I discovered UI and UX. In this way, I 
            worked at <hover-image word="Dogstudio"/> during my last summer internship.
            <br>
            <br>
            In the same time I started to take an interest in a more global 
            form of design: graphic, motion and branding. 
            And today, I really want to make this curosity my profession.
            So I decided to learn and experiment on my side. 
            <br>
            <br>
            I’m looking for a 6 months internship in a <hover-image word="cool place"/>
            where I can discover things and improve my skills in this areas. 
        </div>
        <div class="wassup__everyWhere">
          <div class="everyWhere__eyes">
            <img src="../assets/img/about/eyes.svg">
          </div>
          <ul class="everyWhere__socials">
            <span>I’M EVERYWHERE</span>
            <li><a href="dribble.com">Dribble</a></li>
            <li><a href="behance.com">Behance</a></li>
            <li><a href="linkedin.com">Linkedin</a></li>
          </ul>
        </div>

      </div>
      <button-shadow class="about__btn" linkTo="/" linkContent="back" />
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

// @ is an alias to /src

export default {
  name: "about",
  components: {
    ButtonShadow,
    Skills,
    HoverImage,
    TiredToSee
  },
  props: {
  }
};
</script>
<style lang="scss" scoped>

.about__logo {
  position: absolute;
  left: 4%;
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
.about__btn {
  position: absolute;
  right: 4%;
  top: 10vh;

}

.wassup__wrapper {
  width: 66%;
  margin: 0 auto;
  display: flex;
  padding-top: 5vh;
  position: relative;
}
.wassup__txt, .wassup__me {
  width: 50%;
}

.wassup__txt {
  padding-top: 10px;
}
.wassup__everyWhere {
  width: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate3d(-50%, 0, 1px);
  display: flex;
}
.everyWhere__socials, .everyWhere__eyes {
  width: 50%;
  font-size: 0.875rem;
  box-sizing: border-box;
  img {
    width: 63px;
    margin-left: 35%;
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
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      top: 100%;
      left: 0;
      background-color: #F54123;
    }
  }
}
.everyWhere__socials {
  margin-top: 20px;
  padding-left: 0;
}
.wassup__title {
  font-family: 'integral cf';
  font-style: unset;
  font-size: 2.5rem;
}
</style>

