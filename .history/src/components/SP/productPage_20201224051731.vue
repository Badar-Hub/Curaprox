<template>
  <div>
    <div>
      <div class="main-shop">
        <div class="row justify-center q-pa-sm q-ma-md">
          <div style="margin-left:100px" class="col q-my-auto text-left">
            <h3 class="q-my-none font-futura-semi-bold">{{ product.name }}</h3>
            <h6 class="q-mt-lg q-pl-xs font-info">Rs. {{ product.price }}</h6>
            <div class="row q-mb-xl">
              <h5 class="q-pr-md" style="margin:auto 0">Quantity</h5>
              <div class="input">
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
              class="q-px-xl q-py-xs"
              color="blue"
              :label="!isInvalidQty ? 'Add To Cart' : 'Out Of Stock'"
            />
          </div>
          <div class="col text-center">
            <img
              class="prod-img"
              :src="`${(!isDev ? '/admin/' : '') + product.img}`"
            />
            <div class="row justify-center">
              <img
                @click="img = require('@/assets/cs-5460.jpg')"
                class="sub-image"
                src="@/assets/cs-5460.jpg"
              />
              <img
                @click="img = require('@/assets/1.jpg')"
                class="sub-image"
                src="@/assets/1.jpg"
              />
              <img
                @click="img = require('@/assets/2.jpg')"
                class="sub-image"
                src="@/assets/2.jpg"
              />
              <img
                @click="img = require('@/assets/3.jpg')"
                class="sub-image"
                src="@/assets/3.jpg"
              />
            </div>
          </div>
        </div>
        <div
          @click="show"
          style="margin-top:30px"
          class="row desc justify-between"
        >
          <h4 class="q-my-lg">DESCRIPTION</h4>
          <h4 class="q-my-lg">+</h4>
        </div>
        <div
          :style="`display:${display ? 'block' : 'none'}`"
          class="row desc text-left"
          :class="[!display ? 'hide' : '']"
        >
          <hr class="q-mb-lg" style="width:100%" />
          <div v-html="product.description"></div>
        </div>
      </div>
      <div class="recommended q-pa-md">
        <div>
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            arrows
            height="210px"
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
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
  computed: {
    isInvalidQty() {
      return this.quantity < 1 || this.quantity > this.product.qty;
    },
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
.main-shop {
  max-width: 1200px;
  margin: auto;
}

.input {
  border: 1px solid rgba(187, 182, 182, 0.678);
}

.prod-img {
  max-width: 483px;
  max-height: 400px;
}

.sub-image {
  max-width: 90px;
  max-height: 70px;
  padding-right: 15px;
}

.desc {
  max-width: 800px;
  margin: auto;
}

.recommended {
  max-width: 1200px;
  margin: auto;
}

.hide {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.row {
  margin: 0!Important;
}
</style>
