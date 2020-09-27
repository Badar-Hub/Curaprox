<template>
  <div>
    <Header2>
      <li>
        <a href="#/INTERDENTAL-BRUSH">INTERDENTAL BRUSH</a>
      </li>
    </Header2>
    <ProFeaturedComponent img="cps-idb-teaser-prime-colors-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:black;">INTERDENTAL BRUSHES</h2>
        <h3 style="color:black;">
          EFFECTIVE BRUSHING IN THE SPACES
          <br />BETWEEN YOUR TEETH
        </h3>
        <p>
          <span style="color:#0167b1;">
            <a href="link1.href">Learn More</a>
            >
          </span>
          <span style="color:#0167b1;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <ProFeaturedComponent img="curaprox-df-teaser-df-834-new-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:black;">DENTAL FLOSS</h2>
        <h3 style="color:black;">
          BETWEEN YOUR TEETHTHE BEST DENTAL FLOSS
          <br />TO CLEAN INTERDENTAL SPACES
        </h3>
        <p>
          <span style="color:#0167b1;">
            <a href="link1.href">Learn More</a>
            >
          </span>
          <span style="color:#0167b1;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <BrushingText
      h3Text="INTERDENTAL BRUSHES AND DENTAL FLOSS"
      h2Text="CLEANING IN TIGHT SPACES"
      pText="The front teeth, especially the lower ones, can be particularly close together. Flossing can be the best way to get into these interdental spaces to clean. Dental floss – especially when made of thick, fleecy thread – can also be used to effectively take care of dental implants."
    />
    <ProFeaturedComponent img="need-gumcare-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:white;">GUM CARE</h2>
        <h3 style="color:white;">THE ULTIMATE GUIDE</h3>
        <p>
          <span style="color:white;">
            <a href="link1.href">Learn More</a>
            >
          </span>
          <span style="color:white;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <CategoryComponent
      img-right="curaprox-toothbrush-teaser-cs5460-green-585x600.jpg"
      img-left="need-teaser-implants-585x600.jpg"
    >
      <template v-slot:left>
        <h2>IMPLANTS</h2>
        <h3>
          BECAUSE THEY DESERVE
          <br />SPECIAL CARE
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
      <template v-slot:right>
        <h2>CS 5460</h2>
        <h3>
          WHEN YOUR GUMS
          <br />FALL IN LOVE
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
import Footer from "../components/Layout/Footer";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    CategoryComponent,
    BrushingText,
    Footer,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>