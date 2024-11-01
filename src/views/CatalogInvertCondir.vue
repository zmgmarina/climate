<template>
  <HeaderComponent />
  <div class="catalog-container center">
    <nav aria-label="Breadcrumb" class="catalog-container__breadcrumb center">
      <ul>
        <li>
          <router-link to="/" class="catalog-container__breadcrumb-activeLink"
            >Главная</router-link
          >
        </li>
        <li>
          <span aria-current="page">Инверторные кондиционеры в Челябинске</span>
        </li>
      </ul>
    </nav>
    <div class="catalog-container__heading center">
      <div class="catalog-container__catalog-title">
      <h1>Инверторные кондиционеры в Челябинске</h1>
      </div>
    </div>
    <div
      class="catalog-container__brands center"
      v-for="brand in brandsInvert"
      :key="brand.id"
    >
      <div class="catalog-container__heading-box">
        <a href="#" class="catalog-container__brands-title">
          {{ brand.brandsTitle }}
        </a>
        <div class="catalog-container__product-amount">
          {{ brand.productAmount }}
        </div>
      </div>
      <div class="catalog-container__swiper-box">
        <swiper
          ref="{swiperRef}"
          :slidesPerView="10"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 3,
            },

            '@0.70': {
              slidesPerView: 4,
            },

            '@0.85': {
              slidesPerView: 5,
            },

            '@0.95': {
              slidesPerView: 6,
            },
            '@1.10': {
              slidesPerView: 7,
            },

            '@1.25': {
              slidesPerView: 8,
            },
            '@1.40': {
              slidesPerView: 6,
            },
            '@1.50': {
              slidesPerView: 7,
            },
          }"
          :spaceBetween="20"
          :pagination="false"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(product, index) in brand.products"
            :key="index"
            class="catalog-container__slide-card"
          >
            <div class="catalog-container__card">
              <router-link
                :to="{ name: 'cardProductView', params: { id: product.id } }" class="catalog-container__card-link"
              >
                <img
                  :src="product.image"
                  alt="Изображение товара"
                  class="catalog-container__card-image"
                />
              </router-link>
              <router-link
                :to="{ name: 'cardProductView', params: { id: product.id } }"
                class="catalog-container__card-model"
                >{{ product.model }}</router-link
              >
            </div>
            <div class="catalog-container__iconFactory">
              {{ product.iconFactory }}
            </div>
            <div class="catalog-container__iconWiFi">
              {{ product.iconWiFi }}
            </div>
            <div class="catalog-container__card-price">{{ product.price }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
// import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { mapGetters } from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  computed: {
    ...mapGetters(["products", "brandsInvert"]),
  },
};
</script>
