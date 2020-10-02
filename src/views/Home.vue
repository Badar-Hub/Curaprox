<template>
  <div>
    <Header />
    <Slider />
    <ProFeaturedComponent img="curaprox-others-perioplus-range-full-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:black;">PERIO PLUS+</h2>
        <h3 style="color:black;">
          NATURALLY EFFECTIVE
          <br />MOUTHWASHES
        </h3>
        <p>
          <span style="color:#0167b8;">
            <a href="https://curaprox.ch/en/info/dental-care/perio-plus">Learn More</a>
            >
          </span>
          <span style="color:#0167b8;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <!-- Category Component -->
    <CategoryComponent img-right="cps-colors.jpg" img-left="teaser-ortho.jpg">
      <template v-slot:left>
        <h2>ORTHODONTICS</h2>
        <h3>
          PERFECT ORTHO CARE
          <br />SOLUTIONS FOR
          <br />YOUR BRACES
        </h3>
        <div class="onel">
          <p>
            <a href="https://curaprox.ch/en/blog/post/how-do-i-look-after-my-braces">Learn More</a>
          </p>
          <p>
            <a href="http://localhost:8080/#/Interdental">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2>INTERDENTAL BRUSHES</h2>
        <h3>
          RIGHT IN THE MIDDLE
          <br />OF THE INTERDENTAL
          <br />SPACE.
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
        <button>
          <a href="https://curaprox.ch/en/blog">SHOP NOW</a>
        </button>
      </div>
    </div>
    <div style="width:100%">
      <ProductSlider />
    </div>
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
    <CategoryComponent img-right="need-teaser-implants-585x600.jpg" img-left="others-teaser.jpg">
      <template v-slot:left>
        <h2>BDC FOR DENTURES</h2>
        <h3>
          NATURAL, LONG-
          <br />LASTING CARE
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
        <h2>IMPLANTS</h2>
        <h3>
          BECAUSE THEY
          <br />DESERVE SPECIAL CARE
        </h3>
        <div class="onel">
          <p>
            <a
              href="https://curaprox.ch/en/blog/post/how-do-i-look-after-my-dental-implants"
            >Learn More</a>
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
import Header from "../components/Layout/Header";
import Slider from "../components/Layout/Slider";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import CategoryComponent from "../components/SP/CategoryComponent";
import ProductDisplay from "../components/SP/ProductDisplay";
import ProductSlider from "../components/SP/ProductSlider";
import Footer from "../components/Layout/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Slider,
    ProFeaturedComponent,
    CategoryComponent,
    ProductDisplay,
    Footer,
    ProductSlider,
  },
  data() {
    return {
      left1: {
        img: "cs-5460.png",
        h2Text: "TOOTHBRUSH",
        h4Text: "…THAT LOVE THE GUMLINE",
        pText:
          "Brushing your teeth is also about cleaning your gumline. The sulcus – the groove between the teeth and gums – is a breeding ground for bacteria that cause inflammation and periodontitis. Our toothbrushes are so gentle, they clean perfectly – even in the gumline.",
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
        img: "BLACKISWHITE.jpg",
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
  height: 70vh;
  padding: 3% 0;
}
.oral-health .oral-health-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
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
  max-width: 1200px;
  margin: auto;
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

@media (max-width: 900px) {
  /* Oral Health Start */

  .oral-health h2 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 50px;
    margin: auto;
  }

  .oral-health p {
    font-size: 22px;
    text-align: center;
    margin: auto;
  }

  .oral-health button {
    font-size: 22px;
    border: rgb(60, 60, 170) 2px solid;
    text-align: center;
    margin: 32px 0;
    padding: 8px 17px;
    border-radius: 5%;
  }

  .oral-health .oral-health-inner {
    margin: auto;
  }

  /* Oral Health End */

  /* Dental Care Start */

  .dental-care-inner h2 {
    font-size: 42px;
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
  /* Dental Care End */
}

@media (max-width: 615px) {
  /* Oral Health Start */

  .oral-health h2 {
    font-size: 34px;
    text-align: center;
    margin-bottom: 50px;
    margin: auto;
  }

  .oral-health p {
    font-size: 22px;
    text-align: center;
    margin: auto;
  }

  .oral-health button {
    font-size: 20px;
    border: rgb(60, 60, 170) 2px solid;
    text-align: center;
    margin: 22px 0;
    padding: 5px 15px;
    border-radius: 5%;
  }

  .oral-health .oral-health-inner {
    margin: auto;
  }

  /* Oral Health End */

  .dental-care-inner h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    margin: 12px;
    color: #0060aa;
  }

  .dental-care-inner p {
    font-size: 20px;
    text-align: center;
    margin: 20px 10%;
    padding: 0 5rem;
    color: #0060aa;
  }
  /* Dental Care End */
}
</style>