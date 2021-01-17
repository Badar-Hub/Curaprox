<template>
  <div>
    <Header2>
      <li>
        <a class="font-futura-semi-medium" href="#/Cs5460">CS 5460</a>
      </li>
      <li>
        <a class="font-futura-semi-medium" href="#/Cs1006">CS 1006</a>
      </li>
    </Header2>
    <ProFeaturedComponent img="toothbrush-cs5460-mood-beyou-1200x600.jpg">
      <template v-slot:text>
        <h2 style="black">CS 5460</h2>
        <h3 style="black">
          WHEN YOUR GUMS
          <br />FALL IN LOVE
        </h3>
        <p>
          <span style="color:#0167b1;">
            <a href="/#/toothbrush">Learn More</a>
            >
          </span>
          <span style="color:#0167b1;">
            <a href="http://curaprox.cf/#/shop/5f82043e4a427122f3318fb2">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <CategoryComponent
      img-right="curaprox-toothbrush-teaser-baby-toothbrush-pink.jpg"
      img-left="curaprox-toothbrush-teaser-single-love.jpg"
    >
      <template v-slot:left>
        <h2>TOOTH BY TOOTH</h2>
        <h3>CS SINGLE</h3>
        <div class="onel">
          <p>
            <a href="/#/Cs1006">Learn More</a>
          </p>
          <p>
            <a href="http://curaprox.cf/#/shop/5fb61d9d782b62d5d5bf0264">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2>BABY TOOTHBRUSH</h2>
        <h3>
          FUN, GENTLE,
          <br />EFFECTIVE – FROM THE <br />FIRST TOOTH
        </h3>
        <div class="onel">
          <p>
            <a href="http://curaprox.cf/#/shop/5fb6187e782b62d5d5bf0262">Buy</a>
          </p>
        </div>
      </template>
    </CategoryComponent>
    <BrushingText
      h3Text="CURAPROX TOOTHBRUSHES"
      h2Text="BRUSHING YOUR TEETH IS PURE JOY"
      pText="Dental professionals have been recommending our toothbrushes for more than 40 years. So gentle on the teeth and gums. So effective in combating plaque."
    />
    <ProductComponent :products="ProductData" />
    <!-- <ProFeaturedComponent img="Hawaii-Edition_Desktop-1200x600.jpg"></ProFeaturedComponent> -->
    <CategoryComponent
      img-right="cps-colors.jpg"
      img-left="need-post-cleen-teeth-585x600.jpg"
    >
      <template v-slot:left>
        <h2>CLEAN TEETH</h2>
        <h3>THE ULTIMATE GUIDE</h3>
        <div class="onel">
          <p>
            <a href="http://curaprox.cf/blog/#/clean-teeth">Learn More</a>
          </p>
          <p>
            <a href="#">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2>INTERDENTAL BRUSHES</h2>
        <h3>
          RIGHT IN THE MIDDLE
          <br />OF THE INTERDENTAL <br />SPACE
        </h3>
        <div class="onel">
          <p>
            <a href="#">Learn More</a>
          </p>
          <p>
            <a href="#">Buy</a>
          </p>
        </div>
      </template>
    </CategoryComponent>
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import CategoryComponent from "../components/SP/CategoryComponent";
import BrushingText from "../components/SP/BurshingText";
import ProductComponent from "../components/SP/ProductComponent";
import productData from "../components/data/database";
import Footer from "../components/Layout/Footer";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    CategoryComponent,
    BrushingText,
    ProductComponent,
    Footer,
  },

  data() {
    return {
      // Product Data
      ProductData: [...productData],
      // Product Data
    };
  },
  mounted() {
    console.log("data", this.ProductData);
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>
