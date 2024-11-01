<template>
  <HeaderComponent />
  <div class="card-product__container center">
    <nav aria-label="Breadcrumb" class="catalog-container__breadcrumb center">
      <ul>
        <li>
          <router-link to="#" class="catalog-container__breadcrumb-activeLink"
            >Здесь должна быть ссылка на страницу каталога</router-link
          >
        </li>
        <li>
          <span aria-current="page">Название модели кондиционера</span>
        </li>
      </ul>
    </nav>

    <div
      class="card-product__product-box center"
      v-for="brand in brands"
      :key="brand.id"
    >
      <div class="" v-for="(product, id) in brand.products" :key="id">
        <h1 class="card-product__model-product">{{ product.model }}</h1>
        <div class="card-product__top-section">
          <swiper
            :cssMode="true"
            :navigation="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide ><img class="card-product__image-product" :src="product.image" alt=""></swiper-slide>
            <swiper-slide ><img class="card-product__image-product" :src="product.image2" alt=""></swiper-slide>
            <swiper-slide><img class="card-product__image-product" :src="product.image3" alt=""></swiper-slide>
            <swiper-slide><img class="card-product__image-product" :src="product.image4" alt=""></swiper-slide>
          </swiper>
          
          <div class="card-product__box-specifications">
            <div class="card-product__price">
              {{ product.price }}
            </div>
            <ul v-for="(item, id) in product.description" :key="id">
              <li class="card-product__specifications-item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="card-product__line"></div>
        <div class="card-product__box-description">
          <h2 class="card-product__description-title">
            {{ product.functionTitle }}
          </h2>
          <div class="card-product__description-box-text">
            <p class="card-product__description-text">{{ product.functionText1 }}</p>
          <p class="card-product__description-text">{{ product.functionText2 }}</p>
          <p class="card-product__description-text">{{ product.functionText3 }}</p>
          </div>
          
          <ul class="card-product__description-list"
            v-for="(functionItem, id) in product.functionList"
            :key="id"
          >
          <li class="card-product__description-item">{{ functionItem.text }}</li>            
          </ul>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';

  
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Swiper,
    SwiperSlide,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
  }
},

  created() {
    this.product = this.getProductById(this.id);
  },
  methods: {
    getProductById(id) {
      return this.products.find((product) => product.id === id);
    },
  },
  computed: {
    ...mapGetters(["products", "brands"]),
  },
};
</script>

<style lang="scss" scoped>

.swiper {
  width: 70%;
  height: 70%;
  
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 60%;
  height: 60%;
  object-fit: cover;
  padding-bottom: 40px;
  padding-top: 30px;
}

</style>