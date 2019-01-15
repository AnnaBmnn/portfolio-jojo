<template>
  <div class="home">
    <div class="container">
      <img class="logo" src="../assets/logo.svg">
      <card
        :colorClass="cardsArray[0]"
        :isProject="true"
      />
      <card
        :colorClass="cardsArray[1]"
        :isProject="false"

      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Card
  },
  props: {
    cardsArray: Array
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
}
.container {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  width: 90%;
  margin: 0 auto;
  padding: 10vh 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.logo {
  margin-left: 4%;
}

</style>
