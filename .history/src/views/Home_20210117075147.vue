<template>
  <div>
    <Header />
    <Slider />
    <ProFeaturedComponent
      img="curaprox-others-perioplus-range-full-1200x600.jpg"
    >
      <template v-slot:text>
        <h2 class="font-futura-semi-bold" style="color:black;">PERIO PLUS+</h2>
        <h3 class="font-futura-semi-medium" style="color:black;">
          NATURALLY EFFECTIVE
          <br />MOUTHWASHES
        </h3>
        <p>
          <span style="color:#0167b8;">
            <a href="/#/MouthwashPerio">Learn More</a>
            >
          </span>
          <span style="color:#0167b8;">
            <a href="http://curaprox.cf/#/shop/5fe1b07dcb1555b636987205">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <!-- Category Component -->
    <CategoryComponent img-right="cps-colors.jpg" img-left="teaser-ortho.jpg">
      <template v-slot:left>
        <h2 class="font-futura-semi-bold">ORTHODONTICS</h2>
        <h3 class="font-futura-semi-medium">
          PERFECT ORTHO CARE
          <br />SOLUTIONS FOR <br />YOUR BRACES
        </h3>
        <div class="onel">
          <p>
            <a href="/blog/#/braces">Learn More</a>
          </p>
          <p>
            <a href="http://curaprox.cf/#/shop/5fb6173a782b62d5d5bf025f">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2 class="font-futura-semi-bold">INTERDENTAL BRUSHES</h2>
        <h3 class="font-futura-semi-bold">
          RIGHT IN THE MIDDLE
          <br />OF THE INTERDENTAL <br />SPACE.
        </h3>
        <div class="onel">
          <p>
            <router-link to="InterdentalBrush">Learn More</router-link>
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
    <productDisplay2>
      <div class="prodis">
        <img src="@/assets/img/products/cs-5460.png" />
        <h4>…THAT LOVE THE GUMLINE</h4>
        <h2>TOOTHBRUSH</h2>
        <p>
          Brushing your teeth is also about cleaning your gumline. The sulcus –
          the groove between the teeth and gums – is a breeding ground for
          bacteria that cause inflammation and periodontitis. Our toothbrushes
          are so gentle, they clean perfectly – even in the gumline.
        </p>
        <a href="/#/toothbrush">Learn More</a>
        <a href="http://curaprox.cf/#/shop/5f82043e4a427122f3318fb2">Buy</a>
      </div>
      <div class="prodis">
        <img src="@/assets/img/products/interdental.png" />
        <h4>INTERDENTAL BRUSHES</h4>
        <h2>ONCE IN AND OUT. DONE.</h2>
        <p>
          Exceptional cleanliness where it matters most – in the
          difficult-to-reach narrow spaces between the teeth. All thanks to
          super-fine, extra-long, ultra- resilient filaments. Combat tooth
          decay, inflammation and periodontitis. Quick. Easy. Pleasant.
        </p>
        <a href="/#/InterdentalBrush">Learn More</a>
        <a href="http://curaprox.cf/#/shop/5fe1c094cb1555b636987209">Buy</a>
      </div>
    </productDisplay2>
    <productDisplay2>
      <div class="prodis">
        <img src="@/assets/img/products/BLACKISWHITE.jpg" />
        <h4>TOOTHPASTE</h4>
        <h2>THE BEST IN THE WORLD?</h2>
        <p>
          Toothpastes that improve your oral health – and bring joy to your
          brushing routine. Beautifully-crafted flavours. Healthy ingredients –
          no nasties. Whitening that actually cares for your tooth enamel.
          Curaprox toothpastes.
        </p>
        <a href="/#/BLACK-IS-WHITE">Learn More</a>
        <a href="http://curaprox.cf/#/shop/5fe0bad6cb1555b636987202">Buy</a>
      </div>
    </productDisplay2>
    <div class="new-products">
      <div class="new-products-inner">
        <button class="btn-shop">
          <a href="/#/shop">SHOP NOW</a>
        </button>
      </div>
    </div>
    <div style="width:100%">
      <AwesomeSlider class="default" />
    </div>
    <!-- <oralHealth /> -->
    <CategoryComponent
      img-right="need-teaser-implants-585x600.jpg"
      img-left="others-teaser.jpg"
    >
      <template v-slot:left>
        <h2>BDC FOR DENTURES</h2>
        <h3>
          NATURAL, LONG-
          <br />LASTING CARE
        </h3>
        <div class="onel">
          <p>
            <a href="http://curaprox.cf/#/shop/5fe1cb69cb1555b636987211">Buy</a>
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
            <a href="http://curaprox.cf/blog/#/implant">Learn More</a>
          </p>
          <p>
            <a href="http://curaprox.cf/#/shop/5fb61820782b62d5d5bf0261">Buy</a>
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
import AwesomeSlider from "../components/SP/awesomeSlider";
// import oralHealth from "../components/SP/oralHealth";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import CategoryComponent from "../components/SP/CategoryComponent";
import productDisplay2 from "../components/SP/productDisplay2";
import Footer from "../components/Layout/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Slider,
    AwesomeSlider,
    // oralHealth,
    ProFeaturedComponent,
    CategoryComponent,
    productDisplay2,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
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
  font-size: 64px;
  text-align: center;
  margin-bottom: 50px;
  margin: auto;
  color: #0060aa;
}

.dental-care-inner p {
  font-size: 35px;
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

/* .dental-care button {
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
} */

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

.new-products {
  padding: 40px;
}
@media (max-width: 900px) {
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
