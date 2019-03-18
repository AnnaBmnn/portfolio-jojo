<template>
  <a :href="link" target="_blank" class="hoverImage__word">
    {{word}}
    <div class="hoverImage__myImg">
      <img :src="imgUrl">
    </div>
  </a>
</template>

<script>
export default {
  name: "HoverImage",
  props: {
    word: String,
    imgUrl: String,
    link: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tiredToSee__luv {
  .hoverImage__word:hover .hoverImage__myImg {
    top: unset;
    bottom: 370% !important;
    left: -290% !important;
  }
}
.hoverImage__word {
  color: inherit;
  display: inline-block;
  margin-bottom: 6px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 90%;
    left: 0;
    background-color: #f54123;
    border-radius: 3px;
  }
  .hoverImage__myImg {
    display: none;
    position: absolute;
    top: 130%;
    left: 0;
    transform: translate3d(-50%, 0, 1px);
    border-radius: 6px;
    border: 3px solid #f54123;
    height: 220px;
    z-index: 3;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: #f54123;
      left: 16px;
      top: 16px;
      z-index: -1;
    }

    img {
      border: 10px solid white;
      border-radius: 6px;
      height: 200px;
      width: auto;
    }
  }
  &:hover {
    cursor: url("~@/assets/img/commun/hover.svg"), auto;
    .hoverImage__myImg {
      display: block;
    }
  }
}
</style>
