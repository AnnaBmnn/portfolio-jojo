<template>
  <div 
    class="card"
    
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
          <img class="project__img" src="../assets/home/vibu.svg"/>
          <span class="project__title">vibu</span>
        </div>
        <div class="project">
          <img class="project__img" src="../assets/home/tyre.svg"/>
          <span class="project__title">tesla</span>
        </div>
      </div>
      <div class="project__line">
        <div class="project">
          <img class="project__img" src="../assets/home/ball.svg"/>
          <span class="project__title">olympics</span>
        </div>
        <div class="project">
          <img class="project__img" src="../assets/home/poo.svg"/>
          <span class="project__title">stuff</span>
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
      <span class="about__btn">
        it's true, but
      </span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    colorClass: String,
    sizeClass: String,
    isProject: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 4px;
  border: 3px solid #0B3536;
  position: relative;
  width: 33%;
  background-color: white;
  height: fit-content;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: #0B3536;
    left: 24px;
    top: 35px;
    z-index: -1;
  }
  &:last-child{
    margin-right: 8%;
  }
}
.card__title {
  font-size: 2.75rem;
  text-align: center;
  font-weight: bold;
  padding: 20px 0;
  text-transform: uppercase;
  border-bottom: 3px solid #0B3536;
  &.orange {
    background-color: #F54123;
  }
  &.blue {
    background-color: #0098D8;
  }
}
.project__container {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0px 0;
  // padding: 70px 60px 0;
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
  img {
    margin-bottom: 20px;
  }
}
.about__container {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 50px 60px;
}
.about__txt {
  margin-bottom: 40px;
  font-style: italic;
  font-size: bold;
  text-align: left;

}
.about__btn {
  color: #F54123;
  border: 3px solid #F54123;
  background-color: white;
  border-radius: 4px;
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    border: 3px solid #F54123;
    width: 100%;
    height: 100%;
    left: 5px;
    top: 5px;
    background-color: #F54123;
    border-radius: 4px;
  }
}

</style>
