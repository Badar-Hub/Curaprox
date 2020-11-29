<template>
  <div>
    <shop-head HeadingText="All Products" />
    <div class="row">
      <div style="text-align:left" class="categoryBar">
        <h4 style="margin-right:10px">FILTERS</h4>
      </div>
      <div class="prod">
        <div style="justify-content: flex-end;" class="smrow">
          <h4 style="margin-right:10px">SORT BY</h4>
          <select>
            <option>Relevance</option>
            <option>Name, A to Z</option>
            <option>Name, Z to A</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
          </select>
        </div>
      </div>
    </div>
    <hr style="margin:0" />
    <div class="row">
      <div class="categoryBar">
        <div class="subcategory">
          <div v-if="this.filteredProducts && this.filteredProducts.length" style="justify-content: space-between;" class="row">
            <p @click="loadCategory(null)" class="custom-link">Show All</p>
            <hr />
            <br />
          </div>
          <div v-for="(category, index) in metadata.categories" :key="index">
            <div style="justify-content: space-between;" class="row">
              <p @click="loadCategory(category)" class="custom-link">{{category.label}}</p>
              <p style="cursor:pointer" @click="category.displaySub = !category.displaySub">▼</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="prod">
        <div class="smrow">
          <SingleProduct v-for="prod of getProducts" :key="prod._id" v-bind="prod" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopHead from "@/components/Layout/ShopHead.vue";
import SingleProduct from "@/components/SP/SingleProduct.vue";
const categories = require("@/metadata/categories.json");
const productData = require("@/metadata/products.js");
import axios from "axios";
export default {
  components: { ShopHead, SingleProduct },
  data() {
    return {
      products: [],
      filteredProducts: null,
      metadata: {
        categories: categories.categories,
      },
    };
  },
  methods:{
    loadCategory(category) {
      if(category == null) {
        this.filteredProducts = null;
        return;
      }
      this.filteredProducts = this.products.filter((product) => {
        console.log(category, product.category);
        return product.category === category.label
      })
    }
  },
  computed: {
    getProducts() {
      return this.filteredProducts && this.filteredProducts.length ? this.filteredProducts : this.products
    }
  },
  mounted() {
    window.scrollTo(0,0);
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

<style scoped>
.custom-link {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
.custom-link:hover {
  text-decoration: underline;
}

.custom-link-sub a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
.custom-link-sub a:hover {
  text-decoration: underline;
}
.row {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
}
.categoryBar {
  flex: 3;
}
.prod {
  flex: 9;
  justify-content: center;
  text-align: center;
}
.smrow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
select {
  height: 20px;
  margin: auto 0;
}
.subcategory {
  padding-top: 40px;
}

p {
  margin: 0;
}

@media (max-width: 765px) {
  .categoryBar {
    display: none;
  }
  .prod {
    flex: 12;
  }
}
</style>