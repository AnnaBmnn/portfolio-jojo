<template>
  <div class="home">
    <div class="container">
      <router-link class="logo"   to="/">
        <img src="../assets/img/logo.svg">
      </router-link>
      <card
        :colorClass="cardsArray[0]"
        :isProject="true"
      />
      <div class="container--right">
        <card
          :colorClass="cardsArray[1]"
          :isProject="false"
        />
        <div class="waves">
          <img class="waves__img"  src="../assets/img/home/wave.svg">
        </div>
      </div>
      <div class="dropALine"  @mouseenter="playAnimation" @mouseleave="reverseAnimation">
        <div class="dropALine__txt">
          Don't be shy
          <a target="_blank" href="mailto:nguyen.j32@gmail.com">drop me a line</a>
        </div>
        
        <div class="dropALine__img">
          <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
        </div>
    </div>
    </div>
    <div class="aouuuuuards">
      <img src="../assets/img/home/ok.png" class="aouuuuuards__contour"/>
      <!-- <aouuurd class="aouuuuuards__contour"/> -->
      <img class="aouuuuuards__hand"  src="../assets/img/home/handok.svg">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Lottie from 'vue-lottie';
import * as hand from '../assets/animations/hand.json';
import Card from "@/components/Card.vue";
import Aouuurd from "@/components/Aouuurd.vue";

export default {
  name: "home",
  components: {
    Card,
    Aouuurd,
    Lottie
  },
  props: {
    cardsArray: Array
  },
  data() {
    return {
      defaultOptions: {
        animationData: hand.default,
        autoplay: false,
        loop: false
      },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    playAnimation: function(){
      this.anim.setSpeed(1);
      this.anim.play();
    },
    reverseAnimation: function(){
      this.anim.setSpeed(-1);
      this.anim.play();
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #E5E7DE;

  .cls-2 {
    font-family: "integral cf";
  }
  @media screen and (max-width: 600px) {
    height: unset;
  }
}
.container {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  padding: 10vh 0 ;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 30px 20px 50px 0;
  }
}
.container--right {
  display: flex; 
  flex-direction: column;
  margin-right: 5%;

  .card {
    width: 100%;
  }
  @media screen and (max-width: 1150px) {
    margin-right: 0;
    .card {
      width: 90%;
    }
  }
  @media screen and (max-width: 1000px) {
    .card {
      width: 90%;
    }
  }
  @media screen and (max-width: 900px) {
    .card {
      width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    .card {
      width: 90%;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    .card {
      width: 100%;
    }
  }
}
.dropALine__img {
  cursor: pointer;
}
.aouuuuuards {
  position: absolute;
  left: 5%;
  bottom: 5vh;
  height: 117px;
  width: 117px;
  z-index: 5;
  overflow: hidden;
  .aouuuuuards__contour {
    width: 117px;
    height: 117px;
    animation: rotateIt 12s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  }
  .aouuuuuards__hand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-41%, -49%, 1px);
  }
  @media screen and (max-width: 600px) {
    top: 30px;
    right: 30px;
    left: unset;
    bottom: unset;

  }
}
.dropALine {
  position: absolute;
  right: 0;
  bottom: 7vh;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-style: italic;
  z-index: 4;
  .dropALine__txt {
    margin-right: 30px;
    font-family: 'integral cf';
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  a {
    color: #0B3536;
    display: block;
    position: relative;
    &:after {
      content: "";
      height: 3px;
      width: 100%;
      position: absolute;
      top: 125%;
      left: 0;
      background-color: #F54123;
      border-radius: 8px;
    }
  }
  @media screen and (max-width: 600px) {
    position: relative;
    bottom: unset;
    left: unset;
    align-self: flex-end;
  }
}
.waves {
  width: 40%;
  transform: translate3d(-25%, 100%, 1px);
  .waves__img {
    width: 100%;
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
}


</style>
<style lang="scss" scoped>
.container {
  padding: 10vh 0 0!important;
  background-color: #E5E7DE;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
</style>