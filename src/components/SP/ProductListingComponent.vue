<template>
  <div>
    <div class="product">
      <div class="product-inner">
        <SingleProduct v-for="prod of products" :key="prod.id" v-bind="prod" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./SingleProduct";
import axios from "axios";
import productData from '../data/database'
export default {
  components: {
    SingleProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get("/api/products").then((res) => {
      console.log(res);
      this.products = res.data.default;
    }).catch(() => {
      console.log('mocking!', productData);
      this.products = productData;
    });
  },
};
</script>

<style scoped lang='sass'>
.product 
  .product-inner 
    display: flex
    flex-wrap: wrap
    justify-content: center
    max-width: 1200px
    margin: auto
    padding: 30px
    gap: 40px
  
</style>