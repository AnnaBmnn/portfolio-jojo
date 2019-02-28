<template>
  <div class="projectTesla ">
    <img class="project__big" :src="imgs[0]">
    <img class="project__big" :src="imgs[1]">
    <img class="project__big" :src="imgs[2]">
    <img class="project__big" :src="imgs[3]">
    <div class="project__containerImgMobile">
      <img :src="imgs[4]">
      <img :src="imgs[5]">
      <img :src="imgs[6]">
    </div>
    <div class="project__containerImgWatch">
      <img :src="imgs[7]">
      <img class="project__last" :src="imgs[8]">
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectTesla",
  props: {
    imgs: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectTesla {
  width: 72%;
  margin: 0 auto;
  padding: 10vh 0;
}
.project__big {
  width: 100%;
  height: auto;
  margin-bottom: 10vh;
}
.project__containerImgMobile {
  display: flex;
  justify-content: space-between;
  margin: 20vh 0;

  img {
    width: 30%;
    height: auto;
  }
}
.project__containerImgWatch {
  display: flex;
  justify-content: center;
  margin-bottom: 20vh;
  .project__last {
    margin-left: 10vw;
  }

}
</style>
