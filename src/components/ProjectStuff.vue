<template>
  <div class="projectStuff project__anim">
    <img :src="imgs[12]">
    <img :src="imgs[11]">
    <img :src="imgs[10]">
    <img :src="imgs[13]">
    <img :src="imgs[9]">
    <iframe src="https://player.vimeo.com/video/304574377" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <img :src="imgs[1]">
    <img :src="imgs[4]">
    <img :src="imgs[0]">
    <iframe src="https://player.vimeo.com/video/273089616" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    <img :src="imgs[5]">
    <img :src="imgs[8]">
    <img :src="imgs[7]">
    <img :src="imgs[2]">
  </div>
</template>

<script>
export default {
  name: "ProjectStuff",
  props: {
    imgs: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectStuff {
  width: 72%;
  margin: 0 auto;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img,
  iframe {
    margin-bottom: 20vh;
    width: 70%;
    // margin: 0 auto;
  }
  @media screen and (max-width: 1000px) {
    img,
    iframe {
      width: 100%;
    }
  }
}
.projectStuff__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 48%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
    }
  }
}
</style>
