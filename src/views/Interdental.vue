<template>
  <div>
    <Header2 />
    <ProFeaturedComponent
      style="color : BLACK"
      img="cps-idb-teaser-prime-colors-1200x600.jpg"
      h2-text="INTERDENTAL BRUSHES"
      h3-text="EFFECTIVE BRUSHING IN THE SPACES BETWEEN YOUR TEETH"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy',
    }"
    />
    <ProFeaturedComponent
      style="color : BLACK"
      img="curaprox-df-teaser-df-834-new-1200x600.jpg"
      h2-text="DENTAL FLOSS"
      h3-text="THE BEST DENTAL FLOSS TO CLEAN INTERDENTAL SPACES"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy',
    }"
    />
    <BrushingText
      h3Text="INTERDENTAL BRUSHES AND DENTAL FLOSS"
      h2Text="CLEANING IN TIGHT SPACES"
      pText="The front teeth, especially the lower ones, can be particularly close together. Flossing can be the best way to get into these interdental spaces to clean. Dental floss – especially when made of thick, fleecy thread – can also be used to effectively take care of dental implants."
    />
    <ProFeaturedComponent
      style="color : white"
      img="need-gumcare-1200x600.jpg"
      h2-text="GUM CARE"
      h3-text="THE ULTIMATE GUIDE"
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

      leftCategory1: {
        img: "need-teaser-implants-585x600.jpg",
        h2Text: "IMPLANTS",
        h3Text: "BECAUSE THEY DESERVE SPECIAL CARE",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      rightCategory1: {
        img: "curaprox-toothbrush-teaser-cs5460-green-585x600.jpg",
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