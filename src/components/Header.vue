<script >
import { RouterLink } from "vue-router";
import TongueIcon from "./icons/IconTongue.vue";
import LogoIcon from "./icons/IconLogo.vue";

export default {
  components: {
    TongueIcon,
    LogoIcon
  },
  data() {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    closeMenu() {
      this.isOpenMenu = false;
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="lang">
        <div class="lang__trigger">
          <TongueIcon />
        </div>
        <div class="lang__item lang__item_selected">UA</div>
        <div class="lang__item">RU</div>
      </div>

      <RouterLink @click="closeMenu" to="/" class="logo">
        <LogoIcon />
      </RouterLink>

      <nav class="nav">
        <button @click="toggleMenu" class="nav__menu-button" :class="{ 'nav__menu-button_open': isOpenMenu }"></button>

        <ul class="nav__list" :class="{ nav__list_open: isOpenMenu }">
          <li class="nav__list-item nav__list-item_right">
            <RouterLink @click="toggleMenu" to="what">what?</RouterLink>
          </li>
          <li class="nav__list-item nav__list-item_bottom">
            <RouterLink @click="toggleMenu" to="who">who?</RouterLink>
          </li>
          <li class="nav__list-item nav__list-item_left">
            <RouterLink @click="toggleMenu" to="where">where?</RouterLink>
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/base/_variables.scss";

header {
  position: fixed;
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
    pointer-events: all;

    :deep(path) {
      stroke-width: 0.2px;
      stroke: black;
    }
  }
}

.lang {
  position: absolute;
  left: 24px;
  top: 0;
  width: max-content;

  display: flex;
  column-gap: 10px;
  border-radius: 100%;
  pointer-events: none;
  cursor: pointer;

  &__trigger {
    position: relative;
    height: 38px;
    width: 38px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.4s ease-in-out 0.4s;
    pointer-events: all;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  &__item {
    position: relative;
    padding: 10px 0px;
    height: 38px;
    width: 38px;

    font-size: 13px;

    border-radius: 100%;
    border: 1px solid transparent;

    transition: all 0.5s linear 0.4s, text-shadow 0.4s ease-in-out;

    &:hover {
      text-shadow: 0px 0px 10px black;
    }

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: -17px;
      width: 86px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: -17px;
      width: 86px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    &:nth-child(2) {
      opacity: 0;
      transform: translateX(-50px);
    }

    &:last-child {
      opacity: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-left: 1px solid transparent;
      opacity: 0;
      transform: translateX(-70px);
      transition: all 0.5s linear, text-shadow 0.4s ease-in-out;

      &::before,
      &::after {
        display: none;
      }
    }
  }

  &:hover {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 1px solid transparent;
    pointer-events: all;

    .lang {
      &__trigger {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right: 1px solid transparent;
        width: 43px;
        transition: all 0.4s ease-in-out;

      }

      &__item {
        width: 43px;
        border: 1px solid transparent;
        transition: all 0.3s linear, text-shadow 0.4s ease-in-out;

        opacity: 1;
        transform: translateX(0);

        &:last-child {
          opacity: 1;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-left: 1px solid transparent;
          transition: all 0.4s linear 0.2s, text-shadow 0.4s ease-in-out;
        }
      }
    }
  }
}

.nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  pointer-events: none;

  &__menu-button {
    position: relative;
    width: 40px;
    height: 40px;

    border: none;
    background: none;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      height: 1px;
      width: 20px;
      background: #000;
      transition: all .3s;
      transform: translate(-50%);
    }

    &::before {
      top: 15px;
    }

    &:after {
      bottom: 15px;
    }
  }

  &__list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    list-style-type: none;

    &-item {
      position: absolute;
      pointer-events: all;

      a {
        font-family: "Grtsk Giga";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: $dark-grey;
        text-decoration: none;
        transition: color 0.3s;

      }

      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        border-bottom: 2px solid #ffffff;
        width: 0;
        transition: width 0.4s ease-in-out;
      }

      &:hover {
        a {
          color: white;
        }

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

@media (max-width: 1024px) {
  .logo {
    svg {
      height: 38px;
      width: 69px;
    }
  }

  .lang {
    &__trigger {
      width: 34px;
      height: 34px;

      &:hover {
        width: 38px;
      }
    }

    &__item {
      font-size: 11px;
      height: 34px;

      &::before,
      &::after {
        left: -11px;
        width: 64px;
      }
    }
  }

  .nav {
    &__link {
      font-size: 14px;
    }
  }
}

@media (max-width: 600px) {
  .lang {
    left: 0;
  }

  .nav {
    pointer-events: all;

    &__menu-button {
      opacity: 1;
      visibility: visible;
      pointer-events: all;

      &_open {
        &:before {
          top: 50%;
          transform: translate(-50%, -50%) rotate(225deg);
        }

        &:after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-225deg);
        }
      }

    }

    &__list {
      position: fixed;
      top: 0;
      left: 0;

      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 30px;

      background: #bebebe;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      transform: translateX(20px);
      transition: all 0.3s;


      &-item {
        position: static;
        text-transform: uppercase;
        font-size: 32px;
        font-weight: 700;
        transform: none;

        a {
          text-transform: uppercase;
          font-size: 32px;
          font-weight: 700;
        }
      }

      &_open {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);

      }
    }
  }

  // &__menu-button {}
}
</style>
