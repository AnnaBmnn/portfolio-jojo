<template>
  <div 
    class="card "
    
  >
    <div 
      class="card__title" 
      :class="[colorClass]"
    >
      {{isProject ? "Projects" : "about"}}
    </div>
    <div class="project__container" v-show="isProject">
      <div class="project__line">
        <div class="project">
          <router-link class="project__link" to="/project/stuff">
            <img class="project__img" src="../assets/img/home/poo.svg"/>
            <span class="project__title">stuff</span>
          </router-link>                    
        </div>
        <div class="project">
          <router-link class="project__link" to="/project/vibu">
            <img class="project__img" src="../assets/img/home/vibu.svg"/>
            <span class="project__title">vibu</span>
          </router-link>
        </div>

      </div>
      <div class="project__line">
        <div class="project">
          <router-link class="project__link" to="/project/tesla">
            <img class="project__img" src="../assets/img/home/tyre.svg"/>
            <span class="project__title">tesla</span>
          </router-link>
        </div>
        <div class="project">
          <router-link class="project__link" to="/project/olympics">
            <img class="project__img" src="../assets/img/home/ball.svg"/>
            <span class="project__title">olympics</span>
          </router-link>          
        </div>
      </div>
    </div>
    <div class="about__container" v-show="!isProject">
      <div class="about__txt">
        Oh Great,
        <div>
          Another NGUYEN in town
        </div>
      </div>      
      <buttonShadow
        linkTo="about"
        linkContent="it's true, but"
      />
        
    </div>
    
  </div>
</template>

<script>
import ButtonShadow from "@/components/ButtonShadow.vue";

export default {
  name: "Card",
  props: {
    colorClass: String,
    sizeClass: String,
    isProject: Boolean
  },
  components: {
    ButtonShadow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 6px;
  border: 3px solid #0b3536;
  position: relative;
  width: 35%;
  background-color: white;
  height: fit-content;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #0b3536;
    left: 24px;
    top: 24px;
    z-index: -1;
  }
  &:last-child {
    margin-right: 8%;
  }
  @media screen and (max-width: 1000px) {
    width: 30%;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.12rem;
    margin-right: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-right: 30px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }
}
.card__title {
  font-size: 2.75rem;
  text-align: center;
  font-weight: bold;
  padding: 20px 0 28px;
  text-transform: uppercase;
  border-bottom: 3px solid #0b3536;
  font-family: "integral cf", Helvetica, Arial, sans-serif;
  @media screen and (max-height: 600px) {
    padding: 17px 0;
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.12rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }

  &.orange {
    background-color: #f54123;
  }
  &.blue {
    background-color: #0098d8;
  }
}
.project__container {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0px 0;
  // padding: 70px 60px 0;
  @media screen and (max-height: 600px) {
    padding: 30px 0px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 30px 0px 0;
  }
}
.project__line {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  margin-bottom: 50px;
  font-size: 1.12rem;
  text-transform: uppercase;
  @media screen and (max-height: 600px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
  img {
    margin-bottom: 20px;
    @media screen and (max-width: 1000px) {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 750px) {
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 600px) {
      width: 60px;
      height: 60px;
    }
  }
}
.project__link {
  color: inherit;
  text-align: center;
  span {
    display: block;
  }
}
.about__container {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 50px 60px;
  @media screen and (max-width: 1000px) {
    padding: 30px 40px;
  }
  @media screen and (max-width: 750px) {
    padding: 30px 30px;
  }
}
.about__txt {
  margin-bottom: 40px;
  font-style: italic;
  font-size: bold;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.12rem;
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
  }
}
.about__btn {
  color: #f54123;
  border: 3px solid #f54123;
  background-color: white;
  border-radius: 6px;
  padding: 15px 15px;
  font-family: "integral cf";
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    border: 3px solid #f54123;
    width: 100%;
    height: 100%;
    left: 5px;
    top: 5px;
    background-color: #f54123;
    border-radius: 6px;
  }
}
</style>
