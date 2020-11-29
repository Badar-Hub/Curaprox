<template>
  <div>
    <Header2>
      <li>
        <a href="#/BE-YOU">[BE YOU.]</a>
      </li>
      <li>
        <a href="#/BLACK-IS-WHITE">BLACK IS WHITE</a>
      </li>
    </Header2>
    <ProFeaturedComponent img="cps-toothpaste-teaser-beyou-colors-1200x600.jpg">
      <template v-slot:text>
        <h2 style="black">[BE YOU.]</h2>
        <h3 style="black">
          ZESTY, FRESH FLAVOURS.
          <br />WHITER TEETH
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
    <CategoryComponent
      img-right="curaprox-toothpaste-teaser-biw-black-585x600.jpg"
      img-left="curaprox-toothpaste-enzycal-585x600.jpg"
    >
      <template v-slot:left>
        <h2>ENZYCAL</h2>
        <h3>
          GENTLE, MILD,
          <br />EFFECTIVE
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
        <h2 style="color:white">BLACK IS WHITE</h2>
        <h3 style="color:white">
          HELLO GENTLE TOOTH
          <br />CARE. GOODBYE
          <br />STAINS
        </h3>
        <div class="onel">
          <p>
            <a style="color:white" href="#">Learn More</a>
          </p>
          <p>
            <a style="color:white" href="#">Buy</a>
          </p>
        </div>
      </template>
    </CategoryComponent>
    <BrushingText
      h3Text="CURAPROX TOOTHPASTE"
      h2Text="GENTLE CARE. GREAT TASTE."
      pText="Want harsh ingredients like SLS for excess foam, Triclosan and plastic microbeads in your toothpaste? Didn’t think so. Our toothpastes gently clean, protect against tooth decay and keep you feeling fresh. Perfect with manual and sonic toothbrushes."
    />
    <FloatingText
      h2Text="What’s your toothpaste? Whichever toothpaste you choose, you can be sure of one thing: It’s full of oral health goodness. Strictly no harmful ingredients – no SLS, no Triclosan, no plastic microbeads. Would you want your toothpaste any other way?"
    />
    <ProFeaturedComponent img="need-teaser-sensitive-teeth-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:white;">SENSITIVE TEETH</h2>
        <h3 style="color:white;">
          OUCH! EXPOSED TOOTH ROOTS.
          <br />FINALLY, HELP IS AVAILABLE.
        </h3>
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
      img-right="toothbrush-cs5460-mood-beyou-585x600.jpg"
      img-left="need-whitening-2-585x600.jpg"
    >
      <template v-slot:left>
        <h2 style="color:white">WHITENING</h2>
        <h3 style="color:white">
          WHITER TEETH –
          <br />THE GENTLE WAY
        </h3>
        <div class="onel">
          <p>
            <a style="color:white" href="#">Learn More</a>
          </p>
          <p>
            <a style="color:white" href="#">Buy</a>
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
import FloatingText from "../components/SP/FloatingText";
import BrushingText from "../components/SP/BurshingText";
import Footer from "../components/Layout/Footer";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    CategoryComponent,
    FloatingText,
    BrushingText,
    Footer,
  },

  data() {
    return {};
  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style scoped>
</style>