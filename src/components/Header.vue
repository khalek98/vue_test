<script>
import { RouterLink } from "vue-router";
import TongueIcon from "@/components/icons/IconTongue.vue";
import LogoIcon from "@/components/icons/IconLogo.vue";

export default {
  components: {
    TongueIcon,
    LogoIcon,
  },
  data() {
    return {
      selectedLang: "UA",
      isOpenMenu: false,
      isOpenLang: false,
      langs: [{ lang: "UA" }, { lang: "EN" }, { lang: "RU" }],
      routerLinkLabel: {
        who: "who?",
        where: "where?",
        what: "what?",
      },
    };
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    closeMenu() {
      this.isOpenMenu = false;
    },
    openLang() {
      this.isOpenLang = true;
    },
    closeLang() {
      this.isOpenLang = false;
    },
    toggleLang() {
      if (window.innerWidth > 600) return;
      this.isOpenLang = !this.isOpenLang;
    },
    selectLang(event) {
      this.selectedLang = event.target.innerHTML;
      this.closeMenu();
      console.log(this.selectedLang);
    },
    renderLang(arr) {
      return arr.filter((item) => item.lang !== this.selectedLang);
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div
        class="lang"
        @click="toggleLang"
        @mouseover="openLang"
        @mouseleave="closeLang"
        :class="{ lang_open: isOpenLang }"
      >
        <div class="lang__trigger">
          <TongueIcon />
        </div>
        <ul class="lang__list">
          <li
            class="lang__list-item"
            @click="selectLang"
            v-for="item in renderLang(langs)"
            :key="item.lang"
          >
            {{ item.lang }}
          </li>
        </ul>
      </div>

      <RouterLink @click="closeMenu" to="/" class="logo">
        <LogoIcon />
      </RouterLink>

      <nav class="nav">
        <button
          @click="toggleMenu"
          class="nav__menu-button"
          :class="{ 'nav__menu-button_open': isOpenMenu }"
        ></button>

        <ul class="nav__list" :class="{ nav__list_open: isOpenMenu }">
          <li class="nav__list-item nav__list-item_right">
            <RouterLink @click="toggleMenu" :to="routerLinkLabel.what">{{
              routerLinkLabel.what
            }}</RouterLink>
          </li>
          <li class="nav__list-item nav__list-item_bottom">
            <RouterLink @click="toggleMenu" :to="routerLinkLabel.who">{{
              routerLinkLabel.who
            }}</RouterLink>
          </li>
          <li class="nav__list-item nav__list-item_left">
            <RouterLink @click="toggleMenu" :to="routerLinkLabel.where">{{
              routerLinkLabel.where
            }}</RouterLink>
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
  pointer-events: all;
  cursor: pointer;

  &__trigger {
    position: relative;
    height: 38px;
    width: 38px;
    border-radius: 100%;
    border: 1px solid $lang-border;
    transition: all 0.4s ease-in-out 0.4s;
    pointer-events: all;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  &__list {
    display: flex;
    list-style-type: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(50px, -50%);
    column-gap: 10px;

    &-item {
      display: flex;
      height: 38px;
      width: 38px;

      visibility: hidden;
      opacity: 0;

      align-items: center;
      font-size: 12px;
      border-radius: 100%;
      border: 1px solid transparent;
      transform: translateX(-40px);
      transition: all 0.5s linear 0.4s;

      &::before,
      &:after {
        content: "";
        position: absolute;
        left: -8px;
        width: 0px;
        opacity: 0;
        border-top: 1px solid $lang-border;
        transition: 0.6s;
      }

      &::before {
        top: -1px;
      }

      &::after {
        bottom: -1px;
      }

      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border: 1px solid $lang-border;
        border-left: 1px solid transparent;
        transform: translateX(-60px);
        transition: all 0.5s linear;

        &::after,
        &:before {
          display: none;
        }
      }
    }
  }

  // &:hover,
  &_open {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 1px solid transparent;
    width: 130px;
    pointer-events: all;

    .lang {
      &__trigger {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right: 1px solid transparent;
        width: 43px;
        transition: all 0.4s ease-in-out;
      }

      &__list {
        &-item {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.3s linear;

          &:last-child {
            transition: all 0.4s linear 0.2s;
          }

          &:before,
          &:after {
            width: 55px;
            opacity: 1;
            transition: 0.6s 0.3s;
          }
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
      transition: all 0.3s;
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

    &__list {
      &-item {
        height: 34px;
        width: 38px;
        // &:after, &::before {

        // }
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
  header {
    padding-top: 24px;
  }

  .logo {
    padding-top: 3px;

    svg {
      height: 30px;
      width: 56px;
    }
  }

  .lang {
    pointer-events: none;
    left: 0;

    &__list {
      column-gap: 0;
      transform: translate(39px, -50%);

      &-item {
        font-size: 10px;
        width: 34px;
      }
    }

    &__trigger {
      width: 38px !important;
    }

    &_open {
      .lang {
        pointer-events: all;

        &__list {
          &-item {
            &:after,
            &:before {
              left: -2px;
              width: 36px;
            }
          }
        }
      }
    }
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

      background: $bg-color;
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
}
</style>
