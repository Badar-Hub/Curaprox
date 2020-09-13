<template>
  <div>
    <Header2 />
    <ProFeaturedComponent
      style="color : BLACK"
      img="toothbrush-cs5460-mood-beyou-1200x600.jpg"
      h2-text="HYDROSONIC PRO"
      h3-text="PROFESSIONAL \n DENTAL CLEANING \n EVERY DAY"
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
    <section>
      <div class="burshing">
        <div class="burshing-inner">
          <h3>CURAPROX TOOTHBRUSHES</h3>
          <h2>BRUSHING YOUR TEETH IS PURE JOY</h2>
          <p>Dental professionals have been recommending our toothbrushes for more than 40 years. So gentle on the teeth and gums. So effective in combating plaque.</p>
        </div>
      </div>
    </section>
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
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
    FeaturedCategoryComponent,
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
.burshing {
}

.burshing .burshing-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}

.burshing .burshing-inner h3 {
  font-size: 28px;
  margin: 0;
}

.burshing .burshing-inner h2 {
  font-size: 100px;
  padding: 20px;
  margin: 0;
  color: #8dc73f;
}

.burshing .burshing-inner p {
  font-size: 30px;
  margin: 0;
}
</style>