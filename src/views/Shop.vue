<template>
  <div>
    <Header2 />
    <!-- <ProductPageComponent /> -->
    <!-- <ProductListingComponent /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Footer from "../components/Layout/Footer";
export default {
  components: {
    Header2,
    Footer,
  },
};
</script>

<style>
</style>