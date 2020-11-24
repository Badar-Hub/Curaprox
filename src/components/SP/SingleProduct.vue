<template>
  <div class="prodmain" @click="$router.push({name: 'shop-product', params: {id: _id}})">
    <div class="singleProduct">
      <div class="img">
        <img :src="`${(!isDev? '/admin/' : '' ) + img}`" />
      </div>
      <div class="text">
        <hr />
        <h2>{{name}}</h2>
        <h3>RS: {{price}}</h3>
        <!-- <p>{{shortDesc}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDev: false,
    };
  },
  mounted() {
    this.isDev = process.env.NODE_ENV === "development";
  },
  props: {
    _id: String,
    name: String,
    price: Number,
    // shortDesc: { type: String, required: false },
    img: { type: String, required: false },
  },
};
</script>

<style scoped lang="sass">
.prodmain
  padding: 0.8rem
.singleProduct
  display: flex
  flex-wrap: wrap
  flex-direction: column
  max-width: 240px
  width: auto
  padding-right: 15px
  transition: 0.2s
  box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  -webkit-box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  -moz-box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  cursor: pointer
  &:hover
    box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)
    -webkit-box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)
    -moz-box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)
  .img
    width: 240px
    max-hight: 300px
    height: auto
    padding: 20px
  img
    max-width: 240px
    max-height: 300px
    width: auto

  .text
    padding: 0 20px
    text-align: left
</style>