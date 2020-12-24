<template>
  <div>
    <div class="main-shop-page">
      <div class="row cont">
        <div class="col left-side">
          <h1>CS 5460</h1>
          <h6 class="q-my-md" style="font-size:2rem">Rs. 250</h6>
          <div class="row">
            <h5 class="q-pr-md" style="margin:auto 0">Quantity</h5>
            <div class="input q-my-md">
              <q-btn
                @click="minusQty"
                flat
                color="primary"
                size="1rem"
                label="-"
              />
              <input
                style="width: 70px; border:none; text-align:center"
                type="text"
                v-model.number="quantity"
              />
              <q-btn
                @click="plusQty"
                flat
                color="primary"
                size="1rem"
                label="+"
              />
            </div>
          </div>
            <q-btn
              size="22px"
              class="q-px-xl q-py-xs q-my-md"
              color="purple"
              label="ADD TO CART"
            />
            <div class="row q-px-lg">
                <div class="col col-2">
                    <img class="sugested" src="@/assets/1.jpg" />
                    <p>! CS1006</p>
                </div>
                <div class="col col-2">
                    <img class="sugested" src="@/assets/1.jpg" />
                    <p>! CS1006</p>
                </div>
            </div>
        </div>
        <div class="col">
          <img class="prod-img" src="@/assets/cs-5460.jpg" />
          <div class="row">
          <img class="prod-img" src="@/assets/1.jpg" />
          <img class="prod-img" src="@/assets/2.jpg" />
          <img class="prod-img" src="@/assets/2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import productData from "../data/database";

export default {
  data() {
    return {
      quantity: 1,
      display: "flex",
      displays: "flex",
      product: {},
      isDev: false,
      relatedProducts: [],
      qtyAbove: false,
      // New
      // quantity: 0,
      img: require(`@/assets/cs-5460.jpg`),
      // display: true,
      slide: 1,
    };
  },
  methods: {
    show() {
      this.display = !this.display;
    },
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
.cont {
  margin-top: 40px;
}
.main-shop-page {
  max-width: 1200px;
  margin: auto;
}
.prod-img {
  max-height: 400px;
  max-width: 400px;
}
.input {
  border: 1px solid rgb(128, 128, 128);
}
.left-side {
  margin-left: 150px;
  text-align: left;
}
.sugested {
    max-width: 130px;
    height: 80px;
}
</style>
