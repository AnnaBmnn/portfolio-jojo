<template>
  <div class="projectStuff">
    <div class="projectStuff__container">
        <img :src="imgs[0]">
        <img :src="imgs[1]">
    </div>

    <img  :src="imgs[2]">
    <img  :src="imgs[3]">
    <div class="projectStuff__container">
      <img :src="imgs[4]">
      <img :src="imgs[5]">
    </div>
    <img :src="imgs[6]">

    <div class="projectStuff__container">
      <img :src="imgs[7]">
      <img :src="imgs[8]">
    </div>
    <img :src="imgs[9]">

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
    img {
        margin-bottom: 20vh;
        width: 70%;
        // margin: 0 auto;
    }
    @media screen and (max-width: 1000px) {
        img {
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
