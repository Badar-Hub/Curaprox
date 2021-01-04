<template>
  <div>
    <shop-head class="q-py-xl" HeadingText="ALL PRODUCTS" />
    <div class="row-page">
      <div style="text-align:left" class="categoryBar">
        <h4 style="margin-right:10px; font-size:2rem">FILTERS</h4>
      </div>
      <div class="prod">
        <div style="justify-content: flex-end;" class="smrow">
          <h4 style="margin-right:10px; font-size:14px">SORT BY</h4>
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
    <div class="row-page">
      <div class="categoryBar">
        <div class="subcategory">
          <template v-if="this.filteredProducts">
            <div style="justify-content: space-between;" class="row-page">
              <p @click="loadCategory(null)" class="custom-link">Show All</p>
            </div>
            <hr style="margin:0" />
          </template>
          <div v-for="(category, index) in metadata.categories" :key="index">
            <div
              style="font-size:1.8rem; justify-content: space-between;"
              class="row-page q-pa-sm"
            >
              <p @click="loadCategory(category)" class="custom-link">
                {{ category.label }}
              </p>
              <p
                style="cursor:pointer"
                @click="category.displaySub = !category.displaySub"
              >
                ▼
              </p>
            </div>
            <hr style="margin:0" />
          </div>
        </div>
      </div>
      <div class="prod">
        <div class="smrow">
          <SingleProduct
            v-for="prod of getProducts"
            :key="prod._id"
            v-bind="prod"
          />
          <template v-if="!getProducts.length">
            <b style="margin: 20px 0"
              >No products found in the selected category.</b
            >
          </template>
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
  methods: {
    loadCategory(category) {
      if (category == null) {
        this.filteredProducts = null;
        return;
      }
      this.filteredProducts = this.products.filter((product) => {
        return product.category.toLowerCase() === category.label.toLowerCase();
      });
    },
  },
  computed: {
    getProducts() {
      return this.filteredProducts ? this.filteredProducts : this.products;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    axios
      .get("/api/products")
      .then((res) => {
        this.products = res.data;
      })
      .catch(() => {
        this.products = productData;
      });
  },
};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: black;
  font-size: 19px;
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
.row-page {
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
