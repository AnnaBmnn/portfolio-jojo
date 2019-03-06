<template>
  <div class="proj">
    <div class="projectOlympics">
      <div class="projectOlympics__two">
        <img :src="imgs[0]">
        <img :src="imgs[1]">
      </div>
      <div class="projectOlympics__three">
        <img :src="imgs[2]">
        <img :src="imgs[3]">
        <img :src="imgs[4]">
      </div>
      <div class="projectOlympics__two">
        <img :src="imgs[5]">
        <img :src="imgs[6]">
      </div>
      <div class="projectOlympics__fullCOntainer">
        <img class="projectOlympics__full" :src="imgs[7]">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ProjectOlympics",
  props: {
    imgs: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.projectOlympics {
  width: 72%;
  margin: 0 auto;
  padding: 10vh 0;
  img {
    width: 30%;
    margin: 0 0 20vh 0;

  }
}
.projectOlympics__two {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    &:nth-child(1){
      margin-right: 2.5vw;
    }
    &:nth-child(2){
      margin-left: 2.5vw;
    }
  }
  @media screen and (max-width: 1100px) {
    img {
      width: 40%;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100%;
      width: auto;
      &:nth-child(1){
        margin-right: 0vw;
      }
      &:nth-child(2){
        margin-left: 0vw;
      }
    }
  }
}
.projectOlympics__fullCOntainer {
  background-color: white;
  margin-bottom: 20vh;
  overflow: hidden;
}
.projectOlympics__full {
  width: 100%!important;
  margin-bottom: 0!important;
  height: auto;
  transform: translateY(20px);
}
.projectOlympics__three {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      &:nth-child(2){
        margin-bottom: 20vh;
        margin-left: 5vw;
      }
      width: 40%;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100%;
      width: auto;
      &:nth-child(1){
        margin-right: 0vw;
      }
      &:nth-child(2){
        margin-left: 0vw;
      }
    }
  }
}
</style>
