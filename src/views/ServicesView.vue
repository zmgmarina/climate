<template>
  <HeaderComponent />
  
  <div class="container-services center">
    <nav aria-label="Breadcrumb" class="container-services__breadcrumb">
      <ul>
        <li>
          <router-link to="/" class="container-services__breadcrumb-activeLink"
            >Главная</router-link
          >
        </li>
        <li><span aria-current="page">Наши услуги</span></li>
      </ul>
    </nav>

    <div class="title-box">
       <h1 class="title-box__title">Монтаж кондиционеров</h1>
    </div>
   <div class="section-price center">
      <div class="section-price__composition">
        <img class="section-price__photo section-price__photo_n1" src="../assets/image/gallery/photo19.jpg" alt="photo">
        <img class="section-price__photo section-price__photo_n2" src="../assets/image/gallery/photo17.jpg" alt="photo">
        <img class="section-price__photo section-price__photo_n3" src="../assets/image/gallery/photo18.jpg" alt="photo">
      </div>
      <div class="section-price__text-price">
        <h2 class="section-price__subtitle">
          Цены на монтаж с учетом расходных материалов
        </h2>
        <ul class="section-price__price">
          <li class="section-price__li-price">
            Стандартный монтаж 7-9 модели - от
            <span class="section-price__price-span">12 000 руб</span>
          </li>
          <li class="section-price__li-price">
            Стандартный монтаж 12 модели - от
            <span class="section-price__price-span">13 000 руб</span>
          </li>
          <li class="section-price__li-price">
            Стандартный монтаж 18 и 24 модели - от
            <span class="section-price__price-span">16 000 руб</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-schemes center">
      <h2 class="section-schemes__subtitle">
        Основные схемы монтажа кондиционера
      </h2>
      <div
        v-for="item in schemes"
        :key="item.id"
        class="section-schemes__schemes-box"
      >
        <div class="section-schemes__box-description">
          <h2 class="section-schemes__schemes-title">
            {{ item.titleSchemes }}
          </h2>
          <p class="section-schemes__schemes-description">{{ item.text }}</p>
        </div>
        <div class="section-schemes__schemes">
          <img
            :src="item.imageSchemes1"
            alt="schemes"
            class="section-schemes__schemes-image"
          />
          <img
            :src="item.imageSchemes2"
            alt="schemes"
            class="section-schemes__schemes-image"
          />
          <img
            :src="item.imageSchemes3"
            alt="schemes"
            class="section-schemes__schemes-image"
          />
        </div>
      </div>
    </div>
    <div class="section-typesWorks__subtitle-box">
      <h2 class="section-typesWorks__subtitle">
          Что включают в себя стандартные работы
        </h2>
    </div>
     
    <div class="section-typesWorks center">
         
      <div class="section-typesWorks__text">
        
        <ul class="section-typesWorks__typesWorks">
          <li
            v-for="item in typesWorksList"
            :key="item.id"
            class="section-typesWorks__li-typesWork"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <SliderComponent />
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SliderComponent,
  },
  setup() {
    return {};
  },
  computed: {
    ...mapGetters(["typesWorksList", "schemes"]),
  },
};
</script>
