<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import gsap from "gsap";

export default {
  components: {
    RouterView,
    Header
  }
}
</script>


<template>
  <Header />

  <RouterView v-slot="{ Component }">
    <Transition name="scale-slide" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>

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

.scale-slide-enter-active,
.scale-slide-leave-active {
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  background-color: #ffcb46;
  transform: scale(1.3);
  opacity: 0;

}

.scale-slide-enter-to {
  transform: scale(1);
  opacity: 1;

}

.scale-slide-leave-from {
  transform: scale(1);
  opacity: 1;

}

.scale-slide-leave-to {
  opacity: 0;
  transform: scale(1.3);
  background-color: #ffcb46;
}
</style>
