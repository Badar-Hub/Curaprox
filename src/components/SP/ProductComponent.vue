<template>
  <div>
    <div class="productContainer">
      <div class="productContainer-inner">
        <div v-for="prod of products" :key="prod.id" class="productContainer-single">
          <div class="img">
            <img :src="require(`@/assets/img/products/${prod.img}`)" />
          </div>
          <div class="text">
            <a href="#">{{prod.name}}</a>
            <p>RS: {{prod.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: {
    products: [],
  },
};
</script>

<style scoped>
.productContainer {
}

.productContainer-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

.productContainer-single {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  width: 300px;
}

.productContainer-single img {
  max-width: 300px;
  width: 100%;
  margin: auto;
}

.productContainer-single .text {
  max-width: 300px;
}
</style>