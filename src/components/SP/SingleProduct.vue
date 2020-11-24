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
</style>