<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="scale-slide" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style lang="scss">
@import "@/styles/base/_variables.scss";

#app {
  position: relative;
  background-color: $bg-color;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.container {
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;

  @media (max-width: 1440px) {
    width: 90%;
  }
}

.transition {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;

  height: 0;
  width: 0;
  visibility: hidden;

  border-radius: 50%;
  background-color: #ffcb46;
  filter: blur(20px);
  transform: translate(-50%, -50%);
  transition: all 1s linear;
}

.scale-slide-enter-active,
.scale-slide-leave-active {
  transition: all 1s linear;
}

.scale-slide-enter-from > div.transition {
  height: calc(100vh + 100vw);
  width: calc(100vh + 100vw);
  visibility: visible;
  filter: blur(50px);
}

.scale-slide-enter-to > div.transition {
  height: 0;
  width: 0;
  visibility: hidden;
  filter: blur(20px);
}

.scale-slide-leave-from > div.transition {
  height: 0;
  width: 0;
  visibility: hidden;
  filter: blur(20px);
}

.scale-slide-leave-to > div.transition {
  height: calc(100vh + 100vw);
  width: calc(100vh + 100vw);
  visibility: visible;
  filter: blur(50px);
}
</style>
