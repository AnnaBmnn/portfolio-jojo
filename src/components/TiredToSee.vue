<template>
    <section class="tiredToSee">
        <img class="tiredToSee__wave" src="../assets/img/about/wave.svg">
        <div class="container tiredToSee__container">
            <h2 class="tiredToSee__title">Tired to see ?</h2>
            <div class="game">
                <div class="game__card"></div>
                <div class="game__card"></div>
                <div class="game__card"></div>
                <div class="game__poigne">
                    <img class="game__poigne--1" src="../assets/img/about/poigne1.svg">
                    <img class="game__poigne--2" src="../assets/img/about/poigne2.svg">
                </div>
            </div>
            <div class="tiredToSee__form tiredToSee__form--1">
                <img src="../assets/img/about/tired--1.svg">
                <span  class="tiredToSee__formText">
                    <span>A 100%</span>
                    <span class="tiredToSee__formText--1">winning</span>
                    <span class="tiredToSee__formText--2">game</span>
                </span>
            </div>
            <div class="tiredToSee__form tiredToSee__form--2">
                <img src="../assets/img/about/tired--2.svg">
                <span  class="tiredToSee__formText">
                    <span class="tiredToSee__formText--1">pull this</span>
                    <span class="tiredToSee__formText--2">for 0$</span>
                </span>
            </div>
            <div class="tiredToSee__form tiredToSee__form--3">
                <img src="../assets/img/about/tired--3.svg">
                <span  class="tiredToSee__formText">
                    <span class="tiredToSee__formText--1">very</span>
                    <span class="tiredToSee__formText--1">cool</span>
                    <span class="tiredToSee__formText--2">prize</span>
                </span>
            </div>
        </div>
        <div class="tiredToSee__luv">Coded with <br> luv by <hover-image word="Anna" /></div>

    </section>
</template>

<script>
import HoverImage from "@/components/HoverImage.vue";

export default {
  name: "TiredToSee",
  components: {
    HoverImage
  },
  props: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tiredToSee {
    position: relative;
    padding-bottom: 18vh;
}
.tiredToSee__wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    transform: translate3d(0, -10px, 1px);
}
.tiredToSee__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tiredToSee__title {
    font-family: 'integral cf';
    font-style: unset;
    font-size: 2.5rem;
    margin-bottom: 6vh;
}
.tiredToSee__form {
    position: absolute;

    img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.tiredToSee__form--1 {
    height: 120px;
    width: 150px;
    right: 5%;
    top: 50%;
    z-index: 3;
    .tiredToSee__formText--1 {
        font-size: 13.5px;
    }
    .tiredToSee__formText--2 {
        font-size: 20.5px;
    }
}
.tiredToSee__form--2 {
    height: 160px;
    width: 160px;
    right: 8%;
    top: 10%;
    .tiredToSee__formText--1 {
        font-size: 10.5px;
    }
    .tiredToSee__formText--2 {
        font-size: 15.5px;
    }
    .tiredToSee__formText {
        transform: translate3d(-50%, -50%, 1px) rotateZ(15deg);

    }
}
.tiredToSee__form--3 {
    height: 90px;
    width: 97px;
    right: 4%;
    top: 37%;
    z-index: 2;
    .tiredToSee__formText--1 {
        font-size: 13px;
    }
    .tiredToSee__formText--2 {
        font-size: 13px;
    }
    .tiredToSee__formText {
        transform: translate3d(-50%, -50%, 1px) rotateZ(15deg);

    }
}
.tiredToSee__formText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 1px) rotateZ(-12deg);
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'integral cf';
    span {
        display: block;
    }
}
.tiredToSee__luv {
    position: absolute;
    bottom: 8vh;
    left: 8%;
}
.game {
    width: 33%;
    border-radius: 5px;
    position: relative;
    padding: 25px;
    border: 3px solid #0B3536;
    background-color: #F1F1F1;
    display: flex;
    justify-content: space-between;

    &:after {
        content: '';
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        height: 100%;
        z-index: -2;
        border-radius: 5px;
        background-color: #0B3536;
    }
}
.game__poigne--1 {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate3d(-3px, -50%, 1px);
    z-index: -1;
}
.game__poigne--2 {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translate3d(-3px, -100%, 1px);
    z-index: -1;
    transition: 0.3s transform ease-in-out;
    transform-origin: bottom;
    &:hover {
        transform: translate3d(-3px, -100%, 1px) rotateX(15deg);

    }
}
.game__card {
    width: 30%;
    height: 130px;
    border-radius: 5px;
    background-color: white;
    border: 3px solid #0B3536;

}
</style>
