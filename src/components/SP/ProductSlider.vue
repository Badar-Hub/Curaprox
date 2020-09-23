<template>
  <div>
    <div class="productSlider">
      <div class="productSlider-inner">
        <vueper-slides
          style="padding: 100px;"
          class="no-shadow"
          :arrows="true"
          :bullets="false"
          :visible-slides="4"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide style="height:800px" v-for="(slide, i) in slides" :key="i">
            <template v-slot:content>
              <div class="vueperslide__content-wrapper" style="flex-direction: row">
                <SingleProduct
                  :name="slide.title"
                  :img="slide.image"
                  :id="i"
                  price="500"
                  :shortDesc="slide.content"
                />
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import SingleProduct from "../SP/SingleProduct";

export default {
  name: "ProductSlider",
  components: {
    VueperSlides,
    VueperSlide,
    SingleProduct,
  },
  data() {
    return {
      slides: [
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
        {
          image: "cs-5460.png",
          title: "CS 5460",
          content: "Slide content.",
        },
      ],
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.productSlider {
}

.productSlider-inner {
  max-width: 1200px;
  margin: auto;
}
</style>