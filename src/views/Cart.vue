<template>
  <div>
    <header2 />
    <CartfinaL />
    <Footer />
  </div>
</template>

<script>
import header2 from "../components/Layout/Header2";
import CartfinaL from "../components/SP/Cart-finaL";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cart",
  components: {
    header2,
    CartfinaL,
    Footer,
  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style scoped lang="sass">
</style>