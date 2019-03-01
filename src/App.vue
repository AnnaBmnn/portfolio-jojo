<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/animations.scss";
@import "~@/assets/scss/logo.scss";
@import "~@/assets/scss/commun.scss"; 

</style>
