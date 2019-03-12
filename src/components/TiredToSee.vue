<template>
    <section class="tiredToSee">
        <div class="container tiredToSee__container">
            <h2 class="tiredToSee__title">Are you <br/> tired to see ?</h2>
            <div class="game">
                <div class="game__card">
                    <div class="game__container game__container--1">
                        <div class="game__phrase">THIS WAVE ANIMATION EFFECT ON EVERY ****ING  WEBSITES</div>
                        <div class="game__phrase">DARK BACKGROUND ON EVERY PORTFOLIO</div>
                    </div>
                    <div class="game__container game__container--2">
                        <div class="game__phrase">THIS WAVE ANIMATION EFFECT ON EVERY ****ING  WEBSITES</div>
                        <div class="game__phrase">DARK BACKGROUND ON EVERY PORTFOLIO</div>
                    </div>
                </div>
                <div class="game__card">
                    <div class="game__container">
                        <div class="game__phrase">DRUK FONT</div>
                        <div class="game__phrase">websites that transform your PC into a steam iron</div>
                    </div>                    
                </div>
                <div class="game__card">
                    <div class="game__container">
                        <div class="game__phrase red">THEN CONTACT ME</div>
                    </div>                    
                </div>
                <div class="game__poigne">
                    <img class="game__poigne--1" src="../assets/img/about/poigne1.svg">
                    <img class="game__poigne--2" src="../assets/img/about/poigne2.svg">
                </div>
            </div>
            <div class="tiredToSee__button--mobile">
                <div class="tiredToSee__buttonContainer">
                    <img class="tiredToSee__buttonImg" src="../assets/img/about/buttonAbout.svg">
                    <img class="tiredToSee__holeImg" src="../assets/img/about/hole.svg">
                </div>
                <div class="tiredToSee__buttonTxt" >PUSH TO PLAY</div>
            </div>
            <div class="tiredToSee__form tiredToSee__form--1">
                <img src="../assets/img/about/tired--1.svg">
                <span  class="tiredToSee__formText">
                    <span class="tiredToSee__formText--3">A 100%</span>
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
            <div class="tiredToSee__form tiredToSee__form--4">
                <img src="../assets/img/about/tired--4.svg">
                <span  class="tiredToSee__formText">
                    <span class="tiredToSee__formText--1">approved</span>
                    <span class="tiredToSee__formText--2">by rockstar</span>
                </span>
            </div>
        </div>
        <div class="tiredToSee__luv"><div>Coded with &nbsp</div><div>luv by <hover-image word="Anna" link="https://annabaumann.fr/" imgUrl="../assets/gif/anna.gif"  /></div></div>

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
    z-index: 0;
}

.tiredToSee__container {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
        padding-bottom: 0;
    }
}
.tiredToSee__title {
    font-family: 'integral cf';
    text-align: center;
    font-style: unset;
    font-size: 2.5rem;
    margin-bottom: 13vh;
    @media screen and (max-width: 900px) {
        font-size: 2.25rem;
    }
}
.tiredToSee__form {
    position: absolute;

    img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    @media screen and (max-width: 950px) {
        display: none;
    }
}
.tiredToSee__form--1 {
    height: 180px;
    width: 200px;
    left: 5%;
    top: 20%;
    z-index: 3;
    .tiredToSee__formText {
        transform: translate3d(-50%, -73%, 1px) rotateZ(-15deg);        
    }
    .tiredToSee__formText--3 {
        font-size: 20.5px;
    }
    .tiredToSee__formText--1 {
        font-size: 18px;
    }
    .tiredToSee__formText--2 {
        font-size: 27.5px;
        line-height: 0.7;
    }

    @media screen and (max-width: 1400px) {
        left: 5%;
        top: 20%;
        height: 160px;
        width: 180px;
    }
    @media screen and (max-width: 1050px) {
        right: 2%;
        top: 70%;
    }
}
.tiredToSee__form--2 {
    height: 260px;
    width: 260px;
    right: 3%;
    top: 10%;
    z-index: 0;
    img {
        width: 120% !important;
        z-index: 0;
    }
    .tiredToSee__formText--1 {
        font-size: 20px;
        z-index: 1;
    }
    .tiredToSee__formText--2 {
        font-size: 29.5px;
        z-index: 1;
    }
    .tiredToSee__formText {
        z-index: 1;
        transform:  translate3d(-25%, 0%, 1px) rotate(20deg);
    }
    @media screen and (max-width: 1400px) {

        img {
            width: 110% !important;
        }

        .tiredToSee__formText--1 {
            font-size: 14px;
        }
        .tiredToSee__formText--2 {
            font-size: 21px;
        }
        .tiredToSee__formText {
            transform: translate3d(-35%,-30%,1px) rotate(20deg);
        }
    }
    @media screen and (max-width: 1050px) {
        right: 4%;
    }
}
.tiredToSee__form--3 {
    height: 90px;
    width: 97px;
    left: 12%;
    top: 62%;
    z-index: 2;
    img {
        width: 120%;
    }
    .tiredToSee__formText--1 {
        font-size: 16px;
    }
    .tiredToSee__formText--2 {
        font-size: 16px;
    }
    .tiredToSee__formText {
        transform: translate3d(-30%, -30%, 1px) rotateZ(15deg)

    }   
    @media screen and (max-width: 1400px) {
        height: 90px;
        width: 97px;
        left: 12%;
        top: 62%;
        z-index: 2;
        img {
            width: 100%;
        }
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
    @media screen and (max-width: 1050px) {
        right: 2%;
        top: 57%;
    }
}
.tiredToSee__form--4 {
    height: 150px;
    width: 180px;
    left: 2%;
    top: 72%;
    z-index: 2;
    img {
        width: 110%
    }
    .tiredToSee__formText--1 {
        font-size: 21px;
    }
    .tiredToSee__formText--2 {
        font-size: 15.5px;
    }
    .tiredToSee__formText {
        transform: translate3d(-42%, -87%, 1px) rotateZ(-17.5deg);

    }
    @media screen and (max-width: 1400px) {

        height: 150px;
        width: 180px;
        left: 2%;
        top: 78%;
        z-index: 2;
        img {
            width: 100%
        }
        .tiredToSee__formText--1 {
            font-size: 20px;
        }
        .tiredToSee__formText--2 {
            font-size: 15.5px;
        }
        .tiredToSee__formText {
            transform: translate3d(-50%, -105%, 1px) rotateZ(-17.5deg);

        }
    }
    @media screen and (max-width: 1050px) {
        right: 2%;
        top: 57%;
    }
}
.tiredToSee__formText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -60%, 1px) rotateZ(-12deg);
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'integral cf';
    span {
        display: block;
    }
}
.tiredToSee__luv {
    font-size: 0.875rem;
    position: absolute;
    z-index: 10;
    bottom: 8vh;
    right: 8%;
    @media screen and (max-width: 600px) {
        bottom: 0px;
        left: unset;
        color: white;
        right: 0;
        width: 100%;
        padding: 10px 5% 5px 0;
        background-color: #0B3536;
        text-align: right;
        div {
            display: inline-block;
        }
    }

}
.game {
    width: 33%;
    border-radius: 6px;
    position: relative;
    padding: 25px;
    border: 3px solid #0B3536;
    background-color: #F1F1F1;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 950px) {
        width: 50%;
    }
    @media screen and (max-width: 750px) {
        width: 70%;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }

    &:after {
        content: '';
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        height: 100%;
        z-index: -2;
        border-radius: 6px;
        background-color: #0B3536;
    }
}
.tiredToSee__button--mobile {
    margin-top: 60px;

    display: none;
    @media screen and (max-width: 600px) {
        display: block;
    }
}
.tiredToSee__buttonTxt {
    margin-top: 15px;
}
.tiredToSee__buttonImg {
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 1px);
    transition: 0.3s ease-in transform;
    cursor: url('~@/assets/img/about/cursor.svg'), auto;
    z-index: 10;
    &:hover {
        transform: translate3d(-50%, 3px, 1px);
        cursor: url('~@/assets/img/about/cursor.svg'), auto;
    }
}
.tiredToSee__holeImg {
    width: 113px;
    bottom: 0;
    left: 0;
    z-index: 1;

}
.tiredToSee__buttonContainer {
    position: relative;
    width: 113px;
    height: 35px;
    img {
        position: absolute;
    }
}
.game__poigne--1 {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate3d(-3px, -50%, 1px);
    z-index: -1;
    @media screen and (max-width: 600px) {
        display: none;
    }
}
.game__poigne--2 {
    position: absolute;
    right: -80px;
    top: 50%;
    transform: translate3d(-3px, -100%, 1px);
    z-index: 7;
    transition: 0.3s transform ease-in-out;
    transform-origin: bottom;
    cursor: url('~@/assets/img/about/cursor.svg'), auto;

    &:hover {
        cursor: url('~@/assets/img/about/cursor.svg'), auto;
        transform: translate3d(-3px, -100%, 1px) rotateX(15deg);
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
}
.game__card {
    width: 30%;
    height: 130px;
    border-radius: 6px;
    background-color: white;
    border: 3px solid #0B3536;
    overflow: hidden;
    .red {
        color: #F54123;
    }
    .game__container {
        display: flex;
        flex-direction: column;
        .game__phrase {
            text-transform: uppercase;
            height: 130px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'integral cf';
            font-size: 0.75rem;
            font-weight: bold;
            width: 100%;
        }
    }
}
</style>
