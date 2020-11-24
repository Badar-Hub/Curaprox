<template>
  <div class="prodmain" @click="$router.push({name: 'shop-product', params: {id: _id}})">
    <div class="singleProduct">
      <div class="img">
        <img :src="`${(!isDev? '/admin/' : '' ) + img}`" />
      </div>
      <hr />
      <h2>{{name}}</h2>
      <h3>RS: {{price}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    price: String,
  },
};
</script>

<style>
.prodmain {
}

.single-product {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 400px;
  width: auto;
}
img {
  max-height: 400px;
}
</style>