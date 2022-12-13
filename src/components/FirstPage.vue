<script setup>
import CircleText from "./icons/IconCircleText.vue";
</script>

<template>
  <main class="main-page">
    <div class="middle-block">
      <div class="middle-block__bg">
        <div class="middle-block__circle"></div>
        <CircleText class="middle-block__rounded-text" />
      </div>

      <h1 class="middle-block__header">
        FULL-CYCLE<br />
        EVENT AGENCY
      </h1>
    </div>

    <RouterLink to="where" class="side-link side-link_left">where?</RouterLink>
    <RouterLink to="who" class="side-link side-link_bottom">who?</RouterLink>
    <RouterLink to="what" class="side-link side-link_right">what?</RouterLink>

    <div class="marquees">
      <div class="marquee marquee_left">
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
      </div>
      <div class="marquee marquee_right">
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/base/_variables.scss";

main {
  height: 100vh;
  width: 100vw;
}

.middle-block {
  position: absolute;
  width: 100vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__header {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    width: max-content;

    font-family: "Grtsk Giga";
    font-style: normal;
    font-weight: 700;
    font-size: 82px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: $dark-grey;
    cursor: default;

    transform: translate(-50%, -50%);
    transition: all 0.6s linear;
  }

  &__bg {
    position: absolute;
    width: 578px;
    height: 578px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &__circle {
    width: 100%;
    height: 100%;
    background: #ffcb46;
    border-radius: 100%;
    filter: blur(38px);
  }

  &__rounded-text {
    position: absolute;
    width: 118px;
    height: 118px;
    left: 437px;
    top: 437px;
    animation: rotateRoundedText 3s infinite cubic-bezier(1, 1, 0, 0) paused;

    &:hover {
      animation-play-state: running;
    }
  }
}

.side-link {
  position: absolute;
  font-family: "Grtsk Giga";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: $dark-grey;
  text-decoration: none;
  transition: color 0.3s ease-out;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    border-bottom: 2px solid #ffffff;
    width: 0;
    transition: width 0.4s ease-in-out;
  }

  &:hover {
    color: white;

    &:before {
      width: 100%;
      border-bottom: 2px solid #ffffff;
    }
  }

  &_left {
    left: -22px;
    top: 50%;
    transform: rotate(-90deg);
  }

  &_right {
    top: 50%;
    right: -19px;
    transform: rotate(90deg);
  }

  &_bottom {
    bottom: 19px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.marquees {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  transform: translate(-50%, -50%) rotate(-25deg);
  z-index: -99;
  cursor: pointer;
}

.marquee {
  width: max-content;

  font-family: "Grtsk Giga";
  font-style: italic;
  font-weight: 700;
  font-size: 52px;
  line-height: 70px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(#000000, 0.1);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;

  animation-iteration-count: infinite;
  animation-duration: 16s;
  animation-timing-function: linear;

  &_left {
    transform: rotate(180deg);
    animation-name: marqueeRotate;
  }

  &_right {
    animation-name: marquee;
  }
}
</style>

<style lang="scss">
@keyframes rotateRoundedText {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(25%);
  }
}

@keyframes marqueeRotate {
  0% {
    transform: translateX(0) rotate(180deg);
  }
  100% {
    transform: translateX(-25%) rotate(180deg);
  }
}
</style>
