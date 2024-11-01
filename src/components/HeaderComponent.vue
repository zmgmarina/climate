<template>
  <header class="header">
    <div class="navigation">
      <input type="checkbox" class="navigation__toggle" id="nav-toggle" />
      <label for="nav-toggle" class="navigation__button"
        ><span class="navigation__icon"></span
      ></label>
      <div class="navigation__background"></div>
      <nav class="navigation__nav">
        <ul class="navigation__menu-links">
          <li>
            <router-link to="/" class="navigation__menu-link"
              >ГЛАВНАЯ</router-link
            >
          </li>
          <li>
            <router-link to="/catalogHomeCondir" class="navigation__menu-link"
              >Кондиционеры для Квартиры и Дома
            </router-link>
          </li>
          <li>
            <router-link to="/catalogInvertCondir" class="navigation__menu-link"
              >Инверторные кондиционеры
            </router-link>
          </li>
          <li>
            <router-link to="/services" class="navigation__menu-link"
              >НАШИ УСЛУГИ
            </router-link>
          </li>
          <div class="navigation__contacts">
            <div class="navigation__phone-box">
              <img
                class="navigation__phone-icon"
                src="../assets/image/icons9.png"
                alt="icon-phone"
              />
              <span class="navigation__number-phone">+7 900 080-12-87</span>
            </div>
            <div class="navigation__phone-box">
              <img
                class="navigation__phone-icon"
                src="../assets/image/icons9.png"
                alt="icon-phone"
              />
              <span class="navigation__number-phone">+7 900 080-12-87</span>
            </div>
          </div>
        </ul>
      </nav>
    </div>

    <div class="header__header-content center">
      <div class="menu">
        <div class="menu__menu-links">
          <router-link to="/" class="menu__menu-link">ГЛАВНАЯ</router-link>
          <div
            class="menu__dropdown"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <div class="menu__menu-link">КАТАЛОГ
              <span><img class="menu__span-img" src="../assets/image/angledown.svg" alt=""></span>
            </div>
            <div class="menu__dropdown-link" v-if="showDropdown">
              <router-link
                to="/catalogHomeCondir"
                class="menu__catalog-menu-link"
                >Кондиционеры для Квартиры и Дома</router-link
              >
              <router-link
                to="/catalogInvertCondir"
                class="menu__catalog-menu-link"
                >Инверторные кондиционеры</router-link
              >
            </div>
          </div>
          <router-link to="/services" class="menu__menu-link"
            >УСЛУГИ
          </router-link>
        </div>

        <div class="contacts">
          <div class="contacts__phone-box">
            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#aba7a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <div class="contacts__number-phone">+7 900 077-07-19</div>
            <div class="contacts__number-phone">+7 900 080-12-87</div>
          </div>
          <div class="contacts__socialNetwork">
            <div class="contacts__socialNetwork-link">
              <a href="https://vk.com/id719500584">
                <img
                  class="contacts__icons"
                  src="../assets/image/vk1.svg"
                  alt=""
                />
              </a>
            </div>
            <div class="contacts__socialNetwork-link">
              <a
                href="https://invite.viber.com/?g2=AQB%2FNV5TjpnWJk97nHnBQBOUqDYq8n00C%2BDEysMP7JAPWeSl7rL9MnwL%2FdneHPMJ"
                ><img
                  class="contacts__icons"
                  src="../assets/image/viber3.svg"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="header__banner">
        <div class="header__left-section">
          <div class="header__logo">
            <router-link to="/"
              ><img
                class="header__logo-img"
                src="../assets/image/logo15.png"
                
                alt="logo"
              />
            </router-link>
          </div>
          <div class="header__slogan-box">
            <h1 class="header__slogan">
              "КЛИМАТ КОМПЛЕКС" - поможем вам подобрать и установить кондиционер
              в Челябинске!
            </h1>
          </div>
        </div>
        <img class="header__image" src="../assets/image/back10.jpg" alt="" />
        </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
