<template>
  <div>
    <div class="productPage">
      <div class="productPage-inner">
        <div class="text">
          <h1 class="font-futura-semi-bold">{{ product.name }}</h1>
          <p class="font-info">Rs. {{ product.price }}</p>
          <div class="qty">
            <!-- <button v-on:click="minusQty">
              <span>-</span>
            </button>
            <q-input
              v-model.number="quantity"
              type="number"
              filled
              style="max-width: 100px"
            />
            <button v-on:click="plusQty">
              <span>+</span>
            </button> -->
             <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <span class="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input v-model="quantity" type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
          <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
          </span>
          </div>
          <br />
          <p class="font-info" v-if="qtyAbove">
            Available Quantity: {{ product.qty }}
          </p>

          <button
            @click="
              $set(product, 'cartQty', quantity);
              $set(product, 'total', product.price * quantity);
              updateCart(product);
            "
            class="addToCartBtn"
          >
            {{ !isInvalidQty ? "Add To Cart" : "Out Of Stock" }}
          </button>
          <h2 class="font-info">variant</h2>
        </div>
        <div class="img">
          <img :src="`${(!isDev ? '/admin/' : '') + product.img}`" />
        </div>
      </div>
      <div class="description">
        <div class="text">
          <h1 class="font-futura-semi-bold" @click="toogleDesc">DESCRIPTION</h1>
          <h1 class="font-futura-semi-bold" @click="toogleDesc">+</h1>
        </div>
        <hr />
        <div :style="`display:${display}`" class="description-inner">
          <div v-html="product.description"></div>
        </div>
      </div>
      <div class="remProduct">
        <awesomeSlider>
          <template>
            <swiper-slide>
              <SingleProduct
                v-for="prod of relatedProducts"
                :key="prod._id"
                v-bind="prod"
              />
            </swiper-slide>
          </template>
        </awesomeSlider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.2rem;
}

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
