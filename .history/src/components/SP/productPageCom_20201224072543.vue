<template>
  <div>
    <div class="main-shop-page">
      <div class="row cont">
        <div class="col left-side">
          <h1>{{ product.name }}</h1>
          <h6 class="q-my-md" style="font-size:2rem">
            Rs. {{ product.price }}
          </h6>
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
            <br />
            <p class="font-info" v-if="qtyAbove">
              Available Quantity: {{ product.qty }}
            </p>
          </div>
          <q-btn
            @click="
              $set(product, 'cartQty', quantity);
              $set(product, 'total', product.price * quantity);
              updateCart(product);
            "
            size="22px"
            class="q-px-xl q-py-xs q-my-md"
            color="purple"
            :label="!isInvalidQty ? 'ADD TO CART' : 'OUT OF STOCK!'"
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
          <img
            class="prod-img"
            :src="`${(!isDev ? '/admin/' : '') + product.img}`"
          />
          <div class="row justify-center">
            <img class="sub-imgs" src="@/assets/1.jpg" />
            <img class="sub-imgs" src="@/assets/2.jpg" />
            <img class="sub-imgs" src="@/assets/3.jpg" />
          </div>
        </div>
      </div>
      <div @click="show" class="desc">
        <h3>Description</h3>
        <h3>+</h3>
      </div>
      <div :style="`display:${display ? 'block' : 'none'}`" class="desc">
        <hr style="width:100%; color:black;" />
      </div>
      <div class="desc">
        <div
          :style="`display:${display ? 'block' : 'none'}`"
          class="text-left desctxt"
          v-html="product.description"
        ></div>
      </div>
      <div class="recommended">
        <div class="q-pa-md">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            arrows
            height="300px"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <div
                  v-for="prod in relatedProducts"
                  :key="prod._id"
                  class="rounded-borders col-3 full-height"
                >
                  <img :src="`require(admin/${prod.img})`" alt="" />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
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
      slide: 1,
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
  max-height: 500px;
  max-width: 400px;
  padding-bottom: 10px;
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
.sub-imgs {
  max-width: 120px;
  height: 85px;
  padding-right: 10px;
}
.desc {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
}
.desctxt {
  font-size: 2rem;
}
</style>
