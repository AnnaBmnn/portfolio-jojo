<template>
    
    <router-link class="btn__container" :to="linkTo">
        <div class="btn">{{linkContent}}</div>
        <div class="btn__shadow" >
        </div>
    </router-link>

</template>

<script>
export default {
  name: "ButtonShadow",
  props: {
    linkTo: String,
    linkContent: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$orange: #F54123;

.btn {
  color: $orange;
  border: 3px solid $orange;
  background-color: white;
  border-radius: 6px;
  padding: 15px 15px;
  font-family: 'integral cf';
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  will-change: transform;
  transform: translate3d(0,0,1px);
  transition: 0.3s ease-in-out transform;
  &:hover {
    transform: translate3d(8px,8px,1px);
  }
}
.btn__container {
  position: relative;
}
.btn__shadow {
  z-index: -1;
  content: "";
  position: absolute;
  // border: 3px solid $orange;
  width: 100%;
  height: 100%;
  left: 8px;
  top: 8px;
  background-color: #F54123;
  border-radius: 6px;
}
.home .btn__container {
  display: block;
}
</style>
