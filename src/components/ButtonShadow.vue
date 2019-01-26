<template>
    
    <router-link class="btn" :to="linkTo">
        {{linkContent}}
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
  border-radius: 4px;
  padding: 10px 15px;
  font-family: 'integral cf';
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    border: 3px solid $orange;
    width: 100%;
    height: 100%;
    left: 5px;
    top: 5px;
    background-color: #F54123;
    border-radius: 4px;
  }
}

</style>
