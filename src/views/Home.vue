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
      <div class="dropALine">
        <div class="dropALine__txt">
          Don't be shy
          <a>drop me a line</a>
        </div>
        <img class="dropALine__img" src="../assets/img/home/dropLine.svg">
    </div>
    </div>
    <div class="aouuuuuards">
      <aouuurd class="aouuuuuards__contour"/>
      <img class="aouuuuuards__hand"  src="../assets/img/home/handok.svg">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Aouuurd from "@/components/Aouuurd.vue";

export default {
  name: "home",
  components: {
    Card,
    Aouuurd
  },
  props: {
    cardsArray: Array
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
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
  padding: 10vh 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

.aouuuuuards {
  position: absolute;
  left: 5%;
  bottom: 5vh;
  height: 117px;
  width: 117px;
  .aouuuuuards__contour {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  }
  .aouuuuuards__hand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 1px);
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
  .dropALine__txt {
    margin-right: 30px;
    font-family: 'integral cf';
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  a {
    display: block;
    position: relative;
    &:after {
      content: "";
      height: 1px;
      width: 100%;
      position: absolute;
      top: 105%;
      left: 0;
      background-color: #F54123;
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
