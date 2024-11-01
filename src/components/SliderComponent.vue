<template>
    <div class="slider">
          <swiper
    :effect="'flip'"
    :grabCursor="true"
    :pagination="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo9.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo3.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo5.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo6.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo1.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo7.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo2.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo8.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo10.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo11.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo12.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo13.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo14.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo15.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo16.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo21.jpg" /></swiper-slide
    >
    <swiper-slide
      ><img class="image-slide"
        src="../assets/image/gallery/photo20.jpg" /></swiper-slide
    >

  </swiper>
    </div>
    
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-flip';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

    // import required modules
  import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    
  },
  setup() {
    return {
        modules: [EffectFlip, Pagination, Navigation],
    };
  },
  computed: {
    
  },
};
</script>

<style lang="scss" scoped>
 
.slider {
  padding-top: 50px;
  padding-right: 15px;
}

.image-slide {
  width: 400px;
  height: 580px;
}

.swiper {
  width: 540px;
  height: 630px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 600px;
}


@media (max-width: 1600px) {
.image-slide {
  width: 350px;
  height: 500px;
}

.swiper {
  width: 650px;
  height: 570px;
}

.swiper-slide {
  width: 400px;
  height: 500px;
}

}
@media (max-width: 1420px) {
.image-slide {
  width: 350px;
  height: 470px;
}

.swiper {
  width: 500px;
  height: 520px;
}

.swiper-slide {
  width: 300px;
  height: 480px;
}
}

@media (max-width: 1220px) {
.slider {
 padding-top: 80px;
}
}

@media (max-width: 425px) {
.swiper {
 width: 430px;
}
}



</style>