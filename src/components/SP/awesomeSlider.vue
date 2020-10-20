<template>
  <swiper class="swiper" :options="swiperOption">
    <slot></slot>

    <div class="swiper-pagination" slot="pagination"></div>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: "swiper-example-free-mode",
  title: "Free mode / No fixed positions",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "progressbar",
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.swiper {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  background-color: #fff;
}
.flex {
  display: flex;
  flex-direction: column;
}

.flex img {
  margin: auto;
  width: 70%;
}

.flex p {
  margin: 0;
}

.flex hr {
  width: 70%;
}
</style>