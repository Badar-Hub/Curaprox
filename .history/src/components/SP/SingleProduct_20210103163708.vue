<template>
  <div class="prodmain">
    <router-link :to="`/shop/${_id}`">
      <div class="singleProduct">
        <q-btn
          dense
          color="blue"
          round
          label="Sale"
          size="md"
          class="q-ml-md q-mt-md badgee"
        >
        </q-btn>
        <div class="img">
          <img :src="`${(!isDev ? '/admin/' : '') + img}`" />
        </div>
        <hr />
        <h2
          style="font-size: 2rem; max-width: 245px"
          class="font-futura-medium"
        >
          {{ name }}
        </h2>
        <div class="row">
          <p
            :class="[discount ? 'simple-price-after' : 'simple-price']"
            class="q-ma-none simple-price"
          >
            RS: {{ price }}
          </p>
          <p
            class="q-pl-sm"
            :class="[
              discount
                ? 'simple-price-after-discount'
                : 'simple-price-discount',
            ]"
            style="color: #FF0000; font-size:18px"
          >
            RS: {{ discount }}
          </p>
        </div>
        <h3 style="font-size:17px" class="font-futura-semi-bold">
          RS: {{ price }}
        </h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    _id: String,
    img: String,
    name: String,
    price: Number,
  },
  data() {
    return {
      isDev: false,
    };
  },
  mounted() {
    this.isDev = process.env.NODE_ENV == "development";
  },
};
</script>

<style scoped>
.prodmain {
  margin-right: 20px;
  cursor: pointer;
  padding: 5px;
}

.single-product {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: auto;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.prodmain:hover {
  transition: background 250ms ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
}

.img {
  width: 265px;
}

img {
  width: auto;
  max-height: 400px;
}

a {
  text-decoration: none !important;
  color: black;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 0 !important;
}

h3 {
  margin-top: 0 !important;
}
.badgee {
  display: flex;
  position: absolute;
  z-index: 1;
}
.simple-price {
  font-size: 18px;
  color: #ff0000;
}
.simple-price-after {
  font-size: 13px;
  color: #ff0000;
  text-decoration: line-through;
  margin-top: 5px;
}
.simple-price-discount {
  display: none;
}
.simple-price-after-discount {
  font-size: 18px;
  color: #ff0000;
}
</style>
