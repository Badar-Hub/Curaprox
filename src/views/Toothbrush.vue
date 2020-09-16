<template>
  <div>
    <Header2 />
    <ProFeaturedComponent
      style="color : BLACK"
      img="toothbrush-cs5460-mood-beyou-1200x600.jpg"
      h2-text="HYDROSONIC PRO"
      h3-text="PROFESSIONAL DENTAL CLEANING EVERY DAY"
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
      h3Text="CURAPROX TOOTHBRUSHES"
      h2Text="BRUSHING YOUR TEETH IS PURE JOY"
      pText="Dental professionals have been recommending our toothbrushes for more than 40 years. So gentle on the teeth and gums. So effective in combating plaque."
    />
    <ProFeaturedComponent
      style="color : BLACK"
      img="curaprox-toothbrush-love-edition-grey-1200x600.jpg"
      h2-text
      h3-text
      :link1="{
    href: '#',
    text:''
    }"
      :link2="{
    href: '#',
    text:'',
    }"
    />
    <FeaturedCategoryComponent :left="leftCategory1" :right="rightCategory1" />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import FeaturedCategoryComponent from "../components/SP/FeaturedCategoryComponent";
import BrushingText from "../components/SP/BurshingText";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    FeaturedCategoryComponent,
    BrushingText,
  },

  data() {
    return {
      // Category Images
      leftCategory: {
        img: "curaprox-toothbrush-teaser-single-love.jpg",
        h2Text: "TOOTH BY TOOTH",
        h3Text: "CS SINGLE",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      rightCategory: {
        img: "curaprox-toothbrush-teaser-baby-toothbrush-pink.jpg",
        h2Text: "BABY TOOTHBRUSH",
        h3Text: "FUN, GENTLE, EFFECTIVE – FROM THE FIRST TOOTH",
        a1Text: "Learn more",
        a2Text: "Buy",
      },

      leftCategory1: {
        img: "need-post-cleen-teeth-585x600.jpg",
        h2Text: "CLEAN TEETH",
        h3Text: "THE ULTIMATE GUIDE",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      rightCategory1: {
        img: "cps-colors.jpg",
        h2Text: "INTERDENTAL BRUSHES",
        h3Text: "RIGHT IN THE MIDDLE OF THE INTERDENTAL SPACE",
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