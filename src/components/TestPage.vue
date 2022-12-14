<script>
import CircleText from "./icons/IconCircleText.vue";

export default {
  components: {
    CircleText,
  },
  methods: {
    moveTitle(e) {
      if (window.innerWidth <= 600) {
        this.$refs.titleRef.style.transform = `translate(-50%, -50%)`;
        return;
      }

      let x = Math.round(`${(e.clientX * 100) / window.innerWidth - 50}`),
        y = Math.round(`${(e.clientY * 100) / window.innerHeight - 50}`);

      this.$refs.titleRef.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    },
  },
  props: {
    headers: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <main class="main-page" @mousemove="moveTitle">
    <div class="middle-block">
      <div class="middle-block__bg">
        <div class="middle-block__circle"></div>
        <CircleText class="middle-block__rounded-text" />
      </div>

      <h1 class="middle-block__header" ref="titleRef">
        {{ headers }}
      </h1>
    </div>

    <div class="run-lines">
      <div class="run-lines__item run-lines__item_left">
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
      </div>
      <div class="run-lines__item run-lines__item_right">
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/base/_variables.scss";

main {
  height: 100vh;
  width: 100vw;
}

.middle-block {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;

  width: 100vw;
  transform: translate(-50%, -50%);

  &__header {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    justify-content: center;
    width: 100%;
    max-width: 1050px;

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
    bottom: 23px;
    right: 23px;
    animation: rotateRoundedText 3s infinite cubic-bezier(1, 1, 0, 0) paused;

    &:hover {
      animation-play-state: running;
    }
  }
}

.run-lines {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max-content;
  transform: translate(-50%, -50%) rotate(-25deg);
  z-index: -99;
  cursor: pointer;

  &__item {
    width: max-content;

    font-family: "Grtsk Giga";
    font-style: italic;
    font-weight: 700;
    font-size: 52px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: rgba(#000000, 0.1);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;

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

}


@media (max-width: 1440px) {
  .run-lines {
    transform: translate(-50%, -50%) rotate(-30deg);
  }
}

@media (max-width: 1200px) {
  .middle-block {
    &__bg {
      height: 482px;
      width: 482px;
    }

    &__rounded-text {
      width: 112px;
      height: 112px;
      bottom: 17px;
      right: 22px;
    }

    &__header {
      max-width: 850px;
      font-size: 58px;
    }
  }

  .run-lines {
    transform: translate(-50%, -50%) rotate(-40deg);

    &__item {
      font-size: 42px;
    }
  }
}

@media (max-width: 992px) {
  .middle-block {
    &__header {
      max-width: 600px;
    }
  }

  .run-lines {
    transform: translate(-50%, -50%) rotate(-50deg);
  }
}

@media (max-width: 768px) {
  .middle-block {
    &__header {
      font-size: 46px;
      max-width: 80%;
    }
  }
}

@media (max-width: 600px) {
  .middle-block {
    &__bg {
      height: 332px;
      width: 332px;
    }

    &__rounded-text {
      bottom: -22px;
      right: 32px;
      animation-play-state: running;
    }

    &__header {
      max-width: 90%;
      font-size: 36px;
    }
  }

  .run-lines {
    transform: translate(-50%, -50%) rotate(-55deg);
  }

  @media (max-width: 400px) {
    .run-lines {
      transform: translate(-50%, -50%) rotate(-60deg);
    }

    .middle-block {
      &__bg {
        height: 294px;
        width: 294px;
      }

      &__rounded-text {
        height: 90px;
        width: 90px;
      }

      &__header {
        font-size: 32px;
      }
    }
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
