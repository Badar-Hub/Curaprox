<template>
  <div>
    <div class="productPage">
      <div class="productPage-inner">
        <div class="text">
          <h1>{{product.name}}</h1>
          <p>Rs. {{product.price}}</p>
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
          <p v-if="qtyAbove">Available Quantity: {{ product.qty }}</p>

          <button
            @click="$set(product, 'cartQty', quantity); $set(product, 'total', product.price * quantity); updateCart(product)"
            class="addToCartBtn"
          >{{!isInvalidQty ? "Add To Cart" : "Out Of Stock"}}</button>
          <h2>variant</h2>
        </div>
        <div class="img">
          <img :src="`${(!isDev? '/admin/' : '') + product.img}`" />
        </div>
      </div>
      <div class="description">
        <div class="text">
          <h1 @click="toogleDesc">DESCRIPTION</h1>
          <h1 @click="toogleDesc">+</h1>
        </div>
        <hr />
        <div :style="`display:${display}`" class="description-inner">
          <!-- <p>
            <strong>{{product.shortDesc}}</strong>
          </p>-->
          <div v-html="product.description"></div>
        </div>
      </div>
      <!-- <div class="productDetails">
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
      </div>-->
      <div class="remProduct">
        <awesomeSlider>
          <template>
            <swiper-slide>
              <SingleProduct v-for="prod of relatedProducts" :key="prod._id" v-bind="prod" />
            </swiper-slide>
          </template>
        </awesomeSlider>
      </div>
      <!-- <div class="viwProduct">
        <h1>Viewed Products</h1>
        <ProductSlider />
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import ProductSlider from "../SP/ProductSlider";
import axios from "axios";
import productData from "../data/database";
import awesomeSlider from "./awesomeSlider";

export default {
  components: {
    awesomeSlider,
  },
  name: "ProductPageComponent",
  data() {
    return {
      quantity: 1,
      display: "flex",
      displays: "flex",
      product: {},
      isDev: false,
      relatedProducts: [],
      qtyAbove: false,
    };
  },
  computed: {
    isInvalidQty() {
      return this.quantity < 1 || this.quantity > this.product.qty;
    },
  },
  methods: {
    plusQty() {
      if (this.quantity < this.product.qty) {
        this.quantity++;
      } else {
        this.qtyAbove = true;
      }
    },

    minusQty() {
      if (this.quantity > 1) {
        this.quantity--;
      }
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
    ...mapActions(["updateCart"]),
  },
  mounted() {
    this.isDev = process.env.NODE_ENV == "development";
    console.log(this.$route.params.id);
    axios
      .get(`/api/product/${this.$route.params.id}`)
      .then((res) => {
        console.log(res);
        this.product = res.data;
      })
      .catch(() => {
        this.product = productData.find((x) => x.id == this.$route.params.id);
      });
    // Related Products
    axios
      .get(`/api/product/${this.$route.params.id}/related`)
      .then((res) => {
        console.log(res, "Related Products");
        this.relatedProducts = res.data;
      })
      .catch(() => {
        this.relatedProducts = productData.find(
          (x) =>
            x.id !== this.$route.params.id &&
            x.category === this.product.category
        );
      });
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
  width: 400px;
  -webkit-box-shadow: 0px 0px 6px 2px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0px 0px 6px 2px rgba(194, 194, 194, 1);
  box-shadow: 0px 0px 6px 2px rgba(194, 194, 194, 1);
}

.productPage-inner img {
  max-width: 400px;
  width: auto;
  height: 400px;
  margin: auto;
}

.description {
  max-width: 1200px;
  margin: auto;
  text-align: left;
  padding: 3% 0;
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
  text-align: left;
  text-align: justify;
}

.description .description-inner p {
  color: #002440;
  line-height: 1.5;
  font-size: 1.1rem;
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