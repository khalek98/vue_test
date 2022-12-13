<script setup>
import HomePage from "./pages/HomePage.vue";
</script>

<template>
  <HomePage />
</template>

<style lang="scss">
@import "./styles/base/_variables.scss";

#app {
  position: relative;
  background-color: $bg-color;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>