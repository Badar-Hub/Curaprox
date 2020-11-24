<template>
  <div>
    <div class="row subbar">
      <div class="subcategory">
        <h4 style="text-align: left;">Filter</h4>
      </div>
      <div class="product-inner">
        <h4 style="text-align: right;">Sort By</h4>
      </div>
    </div>
    <hr  style="margin: 0"/>
    <div class="row">
      <div class="subcategory">
        <h4>Categories</h4>
        <hr />
        <h4>Categories</h4>
        <hr />
        <h4>Categories</h4>
        <hr />
        <h4>Categories</h4>
        <hr />
        <h4>Categories</h4>
        <hr />
        <h4>Categories</h4>
        <hr />
      </div>
      <div class="product-inner">
        <div class="row">
          <SingleProduct v-for="prod of products" :key="prod._id" v-bind="prod" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./SingleProduct";
import axios from "axios";
import productData from "../data/database";
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
    axios
      .get("/api/products")
      .then((res) => {
        this.products = res.data;
        console.log(res, "result");
      })
      .catch((ex) => {
        console.log("mocking!", productData, ex);
        this.products = productData;
      });
  },
};
</script>

<style scoped lang='scss'>
.row {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
}
.subcategory{
  flex: 3;
  text-align: left;
  margin: 0 50px;
}
.product-inner{
  flex: 9;
  margin: 30px;
}
.subbar{
  background-color: white;
}
</style>