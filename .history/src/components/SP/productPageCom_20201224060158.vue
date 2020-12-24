<template>
  <div>
      <div class="main-shop-page">
          <div class="row">
              <div class="col">
                  <h1>CS 5460</h1>
                  <p>Rs. 250</p>
                  <div class="row">
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
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
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
}
</script>

<style scoped>
.main-shop-page {
    max-width: 1200px;
    margin: auto;
}
</style>