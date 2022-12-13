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

    <nav class="nav">
      <RouterLink to="where" class="nav-link nav-link_left">where?</RouterLink>
      <RouterLink to="who" class="nav-link nav-link_bottom">who?</RouterLink>
      <RouterLink to="what" class="nav-link nav-link_right">what?</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/base/_variables.scss";

header {
  position: absolute;
  width: 100%;
  padding-top: 32px;
  margin: 0 auto;
  pointer-events: none;
  z-index: 99;
}

.logo {
  display: flex;
  justify-content: center;

  svg {
    // paint-order: stroke;
    pointer-events: all;

    :deep(path) {
      // fill: transparent;
      stroke-width: 0.2px;
      stroke: black;
      // stroke-dashoffset: 1000;
      // fill: black;
      // stroke-dasharray: 1000;
      // stroke-dashoffset: 0;
      // stroke-width: 0px;
      // animation: draw 6s cubic-bezier(0.51, 0.29, 0.09, 1) 1;
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
  pointer-events: all;
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

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;

  &-link {
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
    pointer-events: all;

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
      left: 0;
      top: 50%;
      transform: rotate(-90deg) translateY(-50%);
    }

    &_right {
      top: 50%;
      right: 0;
      transform: rotate(90deg) translateY(-50%);
    }

    &_bottom {
      bottom: 19px;
      left: 50%;
      transform: translateX(-50%);
    }
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
