<template>
  <div>
    <Header />
    <Slider />
    <ProFeaturedComponent
      img="Hydrosonic-Pro-toothbrush.jpg"
      h2-text="HYDROSONIC PRO"
      h3-text="PROFESSIONAL \n DENTAL CLEANING \n EVERY DAY"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy'
    }"
    />
    <FeaturedCategoryComponent :left="leftProFeat" :right="rightProFeat" />
    <div class="oral-health">
      <div class="oral-health-inner">
        <h2>ORAL HEALTH, INSTRUCTIONS</h2>
        <p>
          Whether for whitening. Or during pregnancy. Whether for babies or
          kids. Whether with braces or implants. There’s always something to
          watch out for. What exactly?
        </p>
        <button>Here are our instructions</button>
      </div>
    </div>
    <div class="dental-care">
      <div class="dental-care-inner">
        <h2>DENTAL CARE FROM SWITZERLAND</h2>
        <p>
          A toothbrush, interdental brushes and toothpaste. That’s all you need.
          Or is it?
        </p>
      </div>
    </div>
    <ProductDisplay :left="left1" :right="right1" />
    <ProductDisplay :left="left2" :right="right2" />
    <div class="new-products">
      <div class="new-products-inner">
        <button>SHOP</button>
      </div>
    </div>
    <ProFeaturedComponent
      img="teaser-baby-teething.jpg"
      h2-text="BABY TEETHING RING"
      h3-text="TRIPLE FUN"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy'
    }"
    />
    <FeaturedCategoryComponent :left="leftProFeat1" :right="rightProFeat1" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Layout/Header";
import Slider from "../components/Layout/Slider";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import FeaturedCategoryComponent from "../components/SP/FeaturedCategoryComponent";
import ProductDisplay from "../components/SP/ProductDisplay";
import Footer from "../components/Layout/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Slider,
    ProFeaturedComponent,
    FeaturedCategoryComponent,
    ProductDisplay,
    Footer,
  },
  data() {
    return {
      leftProFeat: {
        img: "teaser-ortho.jpg",
        h2Text: "ORTHODONTICS",
        h3Text: "BRUSHING YOUR TEETH WITH CLASP",
        a1Text: "Learn More",
        a2Text: "Buy",
      },
      rightProFeat: {
        img: "cps-colors.jpg",
        h2Text: "INTERDENTAL BRUSHES",
        h3Text: "RIGHT IN THE MIDDLE OF THE INTERDENTAL SPACE.",
        a1Text: "Learn More",
        a2Text: "Buy",
      },

      leftProFeat1: {
        img: "teaser-ortho.jpg",
        h2Text: "ORTHODONTICS",
        h3Text: "BRUSHING YOUR TEETH WITH CLASP",
        a1Text: "Learn More",
        a2Text: "Buy",
      },
      rightProFeat1: {
        img: "need-teaser-implants.jpg",
        h2Text: "INTERDENTAL BRUSHES",
        h3Text: "RIGHT IN THE MIDDLE OF THE INTERDENTAL SPACE.",
        a1Text: "Learn More",
        a2Text: "Buy",
      },

      left1: {
        img: "others-teaser.jpg",
        h2Text: "NATURAL, LONG-LASTING CARE",
        h4Text: "BDC FOR DENTURES",
        pText: "",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      right1: {
        img: "interdental.png",
        h2Text: "ONCE IN AND OUT. DONE.",
        h4Text: "INTERDENTAL BRUSHES",
        pText:
          "Exceptional cleanliness where it matters most – in the difficult-to-reach narrow spaces between the teeth. All thanks to super-fine, extra-long, ultra-resilient filaments. Combat tooth decay, inflammation and periodontitis. Quick. Easy. Pleasant.",
        a1Text: "Learn more",
        a2Text: "Buy",
      },

      left2: {
        img: "toothpaste-pink.png",
        h2Text: "THE BEST IN THE WORLD?",
        h4Text: "TOOTHPASTE",
        pText:
          "Toothpastes that improve your oral health – and bring joy to your brushing routine. Beautifully-crafted flavours. Healthy ingredients – no nasties. Whitening that actually cares for your tooth enamel. Curaprox toothpastes.",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
      right2: {
        img: "toothbrush-sonic.png",
        h2Text: "GET A MOVE ON",
        h4Text: "SONIC TOOTHBRUSH",
        pText:
          "Up to 42,000 wonderfully gentle brush strokes a minute. The most power you can get outside of a dental office. But this high-tech brushing power is joy for your gumline. And it’s joy for those hard-to-reach spots. All thanks to innovative Swiss brush head technology. All at the touch of a button.",
        a1Text: "Learn more",
        a2Text: "Buy",
      },
    };
  },
};
</script>

<style scoped>
/* Oral Health Section Start */
.oral-health {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 70vh;
  background-color: whitesmoke;
  padding: 3% 0;
}
.oral-health .oral-health-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
}

.oral-health h2 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 50px;
  margin: 20px 15%;
}

.oral-health p {
  font-size: 30px;
  text-align: center;
  margin: 20px 10%;
}

.oral-health button {
  font-size: 22px;
  border: rgb(60, 60, 170) 2px solid;
  text-align: center;
  margin: 44px 0;
  padding: 10px 20px;
  border-radius: 5%;
}

.oral-health button:hover {
  border: blue 2px solid;
}

/* Oral Health Section End*/

/* Dental Care Section Start*/

.dental-care {
  background-color: #fbf4f8;
  padding: 3% 0;
}

.dental-care-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dental-care-inner h2 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 50px;
  margin: 20px 15%;
  color: #0060aa;
}

.dental-care-inner p {
  font-size: 30px;
  text-align: center;
  margin: 20px 10%;
  padding: 0 5rem;
  color: #0060aa;
}

.dental-care .featured-category img {
  background-color: white;
  max-width: 500px;
  width: 100%;
  border-radius: 50%;
  margin-bottom: 20px;
  margin: auto;
}

.dental-care .product-text {
  display: flex;
  flex-wrap: wrap;
}

.dental-care .product-text p {
  padding: 0 !important;
}

.dental-care .product-text a {
  padding-right: 20px;
  text-decoration: none;
  color: #0060aa;
}

.dental-care .product-text a:hover {
  text-decoration: underline;
}

.dental-care .featured-category h4 {
  font-size: 23px;
  text-align: left;
  color: #0060aa;
}

.dental-care .featured-category h1 {
  font-size: 50px;
  text-align: left;
  color: #0060aa;
  font-weight: 400;
}

.dental-care .featured-category p {
  font-size: 22px;
  padding-right: 100px;
  font-family: ff-info-text-web-pro, sans-serif !important;
  text-align: left;
  text-align: justify;
  color: #0060aa;
}

.dental-care button {
  font-size: 22px;
  background-color: #fbf4f8;
  border: rgb(60, 60, 170) 2px solid;
  text-align: center;
  margin: 44px 0;
  padding: 10px 40px;
  border-radius: 5%;
}

.dental-care button:hover {
  border: blue 2px solid;
}

/* Dental Care Section End*/

.new-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fbf4f8;
}

.new-products .new-products-inner {
  display: flex;
  justify-content: center;
  max-width: 1200px;
}

.new-products .new-products-inner button {
  font-size: 22px;
  border: rgb(60, 60, 170) 2px solid;
  text-align: center;
  margin: 44px 0;
  padding: 10px 20px;
  border-radius: 5%;
}

.new-products .new-products-inner button:hover {
  border: blue 2px solid;
}
</style>