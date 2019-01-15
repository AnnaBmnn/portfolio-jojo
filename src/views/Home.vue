<template>
  <div class="home">
    <div class="container">
      <img class="logo" src="../assets/logo.svg">
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
          <img class="waves__img"  src="../assets/home/wave.svg">
        </div>
      </div>
    </div>
    <div class="aouuuuuards">
      <img class="aouuuuuards__contour" src="../assets/home/home_amazingContent.svg">
      <img class="aouuuuuards__hand"  src="../assets/home/handok.svg">
    </div>
    <div class="dropALine">
      <div class="dropALine__txt">
        Don't be shy
        <a>drop me a line</a>
      </div>
      <img class="dropALine__img" src="../assets/home/dropLine.svg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Card
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
}
.container--right {
  display: flex; 
  flex-direction: column;
  margin-right: 10%;
  .card {
    width: 100%;
  }
}
.logo {
  margin-left: 4%;
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
    animation: rotateIt 10s linear infinite;
    will-change: transform;
  }
  .aouuuuuards__hand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 1px);
  }
}
.dropALine {
  position: absolute;
  right: 5%;
  bottom: 7vh;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-style: italic;
  .dropALine__txt {
    margin-right: 30px;
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
}
.waves {
  width: 50%;
  transform: translate3d(-25%, 100%, 1px);
  .waves__img {
    width: 100%;
  }
}
@keyframes rotateIt {
  0% { transform: scale(1.3) rotateZ(0deg); }
  50% { transform: scale(1.3) rotateZ(180deg); }
  100% { transform: scale(1.3) rotateZ(360deg); }
}

</style>
