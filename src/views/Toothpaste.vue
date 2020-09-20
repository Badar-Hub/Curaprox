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
    <ProFeaturedComponent
      style="color : BLACK"
      img="cps-toothpaste-teaser-beyou-colors-1200x600.jpg"
      h2-text="[BE YOU.]"
      h3-text="ZESTY, FRESH FLAVOURS. WHITER TEETH"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy',
    }"
    />
    <FeaturedCategoryComponent :left="leftCategory" :right="rightCategory" />
    <BrushingText
      h3Text="CURAPROX TOOTHPASTE"
      h2Text="GENTLE CARE. GREAT TASTE."
      pText="Want harsh ingredients like SLS for excess foam, Triclosan and plastic microbeads in your toothpaste? Didn’t think so. Our toothpastes gently clean, protect against tooth decay and keep you feeling fresh. Perfect with manual and sonic toothbrushes."
    />
    <FloatingText
      h2Text="What’s your toothpaste? Whichever toothpaste you choose, you can be sure of one thing: It’s full of oral health goodness. Strictly no harmful ingredients – no SLS, no Triclosan, no plastic microbeads. Would you want your toothpaste any other way?"
    />
    <ProFeaturedComponent
      style="color : white"
      img="need-teaser-sensitive-teeth-1200x600.jpg"
      h2-text="SENSITIVE TEETH"
      h3-text="OUCH! EXPOSED TOOTH ROOTS. FINALLY, HELP IS AVAILABLE."
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy',
    }"
    />
    <FeaturedCategoryComponent :left="leftCategory1" :right="rightCategory1" />
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import FeaturedCategoryComponent from "../components/SP/FeaturedCategoryComponent";
import FloatingText from "../components/SP/FloatingText";
import BrushingText from "../components/SP/BurshingText";
import Footer from "../components/Layout/Footer";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    FeaturedCategoryComponent,
    FloatingText,
    BrushingText,
    Footer,
  },

  data() {
    return {
      // Category Images
      leftCategory: {
        img: "curaprox-toothpaste-enzycal-585x600.jpg",
        h2Text: "ENZYCAL",
        h3Text: "GENTLE, MILD, EFFECTIVE",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      rightCategory: {
        img: "curaprox-toothpaste-teaser-biw-black-585x600.jpg",
        h2Text: "BLACK IS WHITE",
        h3Text: "HELLO GENTLE TOOTH CARE. GOODBYE STAINS",
        a1Text: "Learn more",
        a2Text: "Buy",
      },

      leftCategory1: {
        img: "need-whitening-2-585x600.jpg",
        h2Text: "WHITENING",
        h3Text: "WHITER TEETH – THE GENTLE WAY",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      rightCategory1: {
        img: "toothbrush-cs5460-mood-beyou-585x600.jpg",
        h2Text: "CS 5460",
        h3Text: "WHEN YOUR GUMS FALL IN LOVE",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      // Category Images
    };
  },
};
</script>

<style scoped>
</style>