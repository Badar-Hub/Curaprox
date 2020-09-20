<template>
  <div>
    <div class="productPage">
      <div class="productPage-inner">
        <div class="text">
          <h1>CS 5460</h1>
          <p>RS: 650</p>
          <div class="qty">
            <button v-on:click="minusQty">
              <span>-</span>
            </button>
            <p>{{quantity}}</p>
            <button v-on:click="plusQty">
              <span>+</span>
            </button>
          </div>
          <br />
          <button class="addToCartBtn">Add to cart</button>
          <h2>variant</h2>
        </div>
        <div class="img">
          <img src="@/assets/img/products/cs-5460.png" />
        </div>
      </div>
      <div class="description">
        <div class="text">
          <h1 @click="toogleDesc">DESCRIPTION</h1>
          <h1 @click="toogleDesc">+</h1>
        </div>
        <hr />
        <div :style="`display:${display}`" class="description-inner">
          <p>
            <strong>When your gums fall in love</strong>
          </p>
          <p>
            Why do dental professionals recommend the CS 5460? Two words. Gentle. And efficient. The ultra-fine, CUREN® filaments are densely packed on the brush head to give exceptional cleaning power. And it looks beautiful.
            Plaque’s toughest enemy is the gentleness of CUREN®-bristles: CS toothbrushes really are incredibly gentle. The 5460 CUREN®-filaments of the CS 5460 ultra soft form an uncommonly dense and efficient cleaning surface. While they are gentle on gums and teeth, CUREN®-filaments are extremely hard on plaque. Anyone who tries a CS toothbrush will never want to do without this
            brushing experience again.
            CURAPROX toothbrushes not only prevent brushing damage, but also break up and remove plaque perfectly. CUREN ®-filaments are stiffer than nylon and remain just as stable in the mouth as when they are dry. These properties make it possible to produce toothbrushes with a large number of ultrafine bristles.
            Gentle action thanks to CUREN®-filaments
            Efficient cleaning surface thanks to a dense array of CUREN®-filaments
            There’s no escape: compact head, slightly angled
            Octagonal handle helps users to brush at the correct angle
          </p>
        </div>
      </div>
      <div class="productDetails">
        <div class="text">
          <h1 @click="toogleProductDetail">Product Details</h1>
          <h1 @click="toogleProductDetail">+</h1>
        </div>
        <hr />
        <div :style="`display:${displays}`" class="productDetails-inner">
          <div class="prd">
            <div class="prd-left">
              <p>
                <strong>Colour</strong>
              </p>

              <p>
                <strong>Softness</strong>
              </p>
              <p>
                <strong>Needs</strong>
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>
                <strong>Product variety</strong>
              </p>
              <p>
                <strong>Productlines</strong>
              </p>
              <p>
                <strong>Age group</strong>
              </p>
            </div>
            <div class="prd-right">
              <p>Assorted</p>
              <p>Ultrasoft</p>
              <p>Caries protection</p>
              <p>Clean teeth</p>
              <p>Gum care</p>
              <p>Gum inflammation</p>
              <p>Plaque</p>
              <p>Sensitive teeth</p>
              <p>Single Pack</p>
              <p>CS5460</p>
              <p>Adult</p>
            </div>
          </div>
        </div>
      </div>
      <div class="remProduct">
        <h1>Recommended Products</h1>
        <ProductSlider />
      </div>
      <div class="viwProduct">
        <h1>Viewed Products</h1>
        <ProductSlider />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import ProductSlider from "../SP/ProductSlider";
import Footer from "../Layout/Footer";
export default {
  components: {
    ProductSlider,
    Footer,
  },
  name: "ProductPageComponent",
  data() {
    return {
      quantity: 0,
      display: "flex",
      displays: "flex",
    };
  },
  methods: {
    plusQty() {
      this.quantity += 1;
    },

    minusQty() {
      this.quantity -= 1;
    },
    toogleDesc() {
      if (this.display === "flex") {
        this.display = "none";
      } else {
        this.display = "flex";
      }
    },
    toogleProductDetail() {
      if (this.displays === "flex") {
        this.displays = "none";
      } else {
        this.displays = "flex";
      }
    },
  },
};
</script>

<style scoped>
.productPage {
  margin: 50px 15px;
}

.productPage-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
}

.productPage-inner .text {
  text-align: left;
}

.productPage-inner .text .qty {
  display: flex;
  flex-wrap: wrap;
}

.productPage-inner .text .qty p {
  border: black 1px solid;
  margin: 0;
  width: 50px;
  padding: 20px;
  text-align: center;
}

.productPage-inner .text .qty span {
  padding: 0;
  margin: 0;
}

.productPage-inner .text .qty button {
  padding: 15px;
  margin: 0;
  color: white;
  background-color: dodgerblue;
}

.productPage-inner .text .addToCartBtn {
  padding: 10px 100px;
  margin-top: 20px;
  color: white;
  background-color: dodgerblue;
}

.productPage-inner .img {
  max-width: 700px;
  border: black 1px solid;
}

.productPage-inner img {
  max-width: 500px;
  width: 100%;
}

.description {
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

.description .text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.description .text h1 {
  margin: 3px 0;
  padding: 0;
}

.description .description-inner {
  flex-direction: column;
  margin: 30px 0;
  border: black 1px solid;
  text-align: left;
  text-align: justify;
}

.productDetails {
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

.productDetails .text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.productDetails .text h1 {
  margin: 3px 0;
  padding: 0;
}

.productDetails .productDetails-inner {
  flex-direction: column;
  margin: 30px 0;
  border: black 1px solid;
  text-align: left;
  text-align: justify;
}

.prd {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.prd-left {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
}

.prd-right {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
}
</style>