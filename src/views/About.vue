<template>
  <div>
    <Header />

    <ProductSlider />
    <ProFeaturedComponent />
    <FeaturedCategoryComponent
      left-img="img/teaser-ortho.79413948.jpg"
      right-img="img/cps-colors.1b9c0541.jpg"
    />
    <div class="oral-health">
      <h2>ORAL HEALTH, INSTRUCTIONS</h2>
      <p>
        Whether for whitening. Or during pregnancy. Whether for babies or
        kids. Whether with braces or implants. There’s always something to
        watch out for. What exactly?
      </p>
      <button>Here are our instructions</button>
    </div>
    <div class="dental-care">
      <div class="dental-care-inner">
        <h2>DENTAL CARE FROM SWITZERLAND</h2>
        <p>
          A toothbrush, interdental brushes and toothpaste. That’s all you need.
          Or is it?
        </p>
      </div>

      <!-- <div class="featured-category">
        <div class="first-category">
          <img src="../assets/img/products/cs-5460.png" alt="CS-5460" />
          <h4>TOOTHBRUSHES</h4>
          <h1>…THAT LOVE THE GUMLINE</h1>
          <p>
            Brushing your teeth is also about cleaning your gumline. The sulcus
            – the groove between the teeth and gums – is a breeding ground for
            bacteria that cause inflammation and periodontitis. Our toothbrushes
            are so gentle, they clean perfectly – even in the gumline.
          </p>
          <div class="product-text">
            <p>
              <a href="#">Learn more</a>
            </p>
            <p>
              <a href="#">Buy</a>
            </p>
          </div>
        </div>
        <div class="second-category">
          <img src="../assets/img/products/interdental.png" alt="CPS" />
          <h4>INTERDENTAL BRUSHES</h4>
          <h1>ONCE IN AND OUT. DONE.</h1>
          <p>
            Exceptional cleanliness where it matters most – in the
            difficult-to-reach narrow spaces between the teeth. All thanks to
            super-fine, extra-long, ultra-resilient filaments. Combat tooth
            decay, inflammation and periodontitis. Quick. Easy. Pleasant.
          </p>
          <div class="product-text">
            <p>
              <a href="#">Learn more</a>
            </p>
            <p>
              <a href="#">Buy</a>
            </p>
          </div>
        </div>
      </div>
      <div class="featured-category">
        <div class="first-category">
          <img src="../../assets/img/products/cs-5460.png" alt="CS-5460" />
          <h4>TOOTHPASTE</h4>
          <h1>THE BEST IN THE WORLD?</h1>
          <p>
            Toothpastes that improve your oral health – and bring joy to your
            brushing routine. Beautifully-crafted flavours. Healthy ingredients
            – no nasties. Whitening that actually cares for your tooth enamel.
            Curaprox toothpastes.
          </p>
          <div class="product-text">
            <p>
              <a href="#">Learn more</a>
            </p>
            <p>
              <a href="#">Buy</a>
            </p>
          </div>
        </div>
        <div class="second-category">
          <img src="../../assets/img/products/interdental.png" alt="CPS" />
          <h4>SONIC TOOTHBRUSH</h4>
          <h1>GET A MOVE ON</h1>
          <p>
            Up to 42,000 wonderfully gentle brush strokes a minute. The most
            power you can get outside of a dental office. But this high-tech
            brushing power is joy for your gumline. And it’s joy for those
            hard-to-reach spots. All thanks to innovative Swiss brush head
            technology. All at the touch of a button.
          </p>
          <div class="product-text">
            <p>
              <a href="#">Learn more</a>
            </p>
            <p>
              <a href="#">Buy</a>
            </p>
          </div>
        </div>
      </div>-->
      <div class="button">
        <button>SHOP</button>
      </div>
    </div>
    <!-- <div class="new-products">
      <h1>SHOP</h1>
    </div>-->
    <ProFeaturedComponent />
    <FeaturedCategoryComponent />
  </div>
</template>

<script>
import Header from "../components/Layout/Header";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import FeaturedCategoryComponent from "../components/SP/FeaturedCategoryComponent";
import ProductSlider from "../components/SP/ProductSlider";
export default {
  name: "Home",
  components: {
    ProFeaturedComponent,
    FeaturedCategoryComponent,
    ProductSlider,
    Header,
  },
};
</script>

<style scoped>
/* Oral Health Section Start */
.oral-health {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  padding: 0 5rem;
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
  justify-content: center;
  max-width: 1200px;
}
</style>