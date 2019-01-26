<template>
  <div class="hoverImage__word">
    {{word}}
    <div class="hoverImage__myImg">
      <img src="~@/assets/img/about/dog.png">
    </div>
  </div>
</template>

<script>

export default {
  name: "HoverImage",
  props: {
    word: String,
    img: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hoverImage__word {
  color: inherit;
  display: inline-block;
  margin-bottom: 6px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background-color: #F54123;
  }
  .hoverImage__myImg {
    display: none;
    position: absolute;
    top: 130%;
    left: 0;
    transform: translate3d(-50%, 0, 1px);
    border-radius: 5px;
    border: 3px solid #F54123;
    height: 220px;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #F54123;
      left: 16px;
      top: 16px;
      z-index: -1;
    }

    img {
      border: 10px solid white;
      border-radius: 5px;
      height: 200px;
      width: auto;
    }
  }
  &:hover {
    cursor: url('~@/assets/img/about/cursor.svg'), auto;
    .hoverImage__myImg {
      display: block;
    }	
  }
}
</style>
