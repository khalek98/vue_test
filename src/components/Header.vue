<script setup>
import { RouterLink } from "vue-router";
import TongueIcon from "./icons/IconTongue.vue";
import LogoIcon from "./icons/IconLogo.vue";
</script>

<template>
  <header>
    <div class="lang">
      <div class="lang__trigger">
        <TongueIcon />
      </div>
      <div class="lang__item lang__item_selected">UA</div>
      <div class="lang__item">RU</div>
    </div>

    <RouterLink to="/" class="logo">
      <LogoIcon />
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  padding-top: 32px;
  margin: 0 auto;
  z-index: 1;
}

.logo {
  display: flex;
  justify-content: center;

  svg {
    paint-order: stroke;
    :deep(path) {
      fill: black;
      stroke: black;
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
      stroke-width: 0px;
      animation: draw 6s cubic-bezier(0.51, 0.29, 0.09, 1) 1;
    }
  }
}

.lang {
  position: absolute;
  left: 24px;
  top: 28px;
  width: max-content;

  display: flex;
  column-gap: 15px;
  border-radius: 100%;
  cursor: pointer;

  &__trigger {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.4s ease-in-out;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  &__item {
    position: relative;
    padding: 12px 3px;
    height: 50px;
    width: 50px;

    font-size: 16px;

    border-radius: 100%;
    border: 1px solid transparent;

    transition: all 0.5s linear 0.3s, text-shadow 0.4s ease-in-out;

    &:hover {
      text-shadow: 0px 0px 10px black;
    }

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: -17px;
      width: 81px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: -17px;
      width: 81px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    &:nth-child(2) {
      opacity: 0;
      transform: translateX(-70px);
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-left: 1px solid transparent;
      opacity: 0;
      transform: translateX(-130px);
      transition: all 0.5s linear, text-shadow 0.4s ease-in-out;

      &::before,
      &::after {
        display: none;
      }
    }
  }

  &:hover {
    .lang {
      &__trigger {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right: 1px solid transparent;
      }

      &__item {
        border: 1px solid transparent;
        transition: all 0.3s linear, text-shadow 0.4s ease-in-out;

        opacity: 1;
        transform: translateX(0);

        &:last-child {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-left: 1px solid transparent;
          transition: all 0.4s linear 0.2s, text-shadow 0.4s ease-in-out;
        }
      }
    }

    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 1px solid transparent;
  }
}

@keyframes draw {
  0% {
    fill: transparent;
    stroke-dashoffset: 1000;
    stroke-width: 0.1px;
  }
  50% {
    stroke-dashoffset: 0;
  }
  70% {
    fill: black;
  }
  100% {
    fill: black;
    stroke-dashoffset: 0;
    stroke-width: 0px;
  }
}
</style>
