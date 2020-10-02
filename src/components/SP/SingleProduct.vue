<template>
  <div @click="$router.push({name: 'shop-product', params: {id: id}})">
    <div class="singleProduct">
      <div class="img">
        <!-- <img :src="require(`@/assets/img/products/${img}`)" /> -->
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
  props: {
    id: Number,
    name: String,
    price: Number,
    // shortDesc: { type: String, required: false },
    // img: { type: String, required: false },
  },
};
</script>

<style scoped lang="sass">
.singleProduct
  display: flex
  flex-wrap: wrap
  flex-direction: column
  max-width: 1200px
  margin: auto
  transition: 0.2s
  box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  -webkit-box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  -moz-box-shadow: 0px 0px 5px 0px rgba(207,201,201,1)
  cursor: pointer
  &:hover
    box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)
    -webkit-box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)
    -moz-box-shadow: 0px 0px 5px 3px rgba(204,198,198,1)

  img
    max-width: 350px
  .text
    padding: 20px
    text-align: left  
        
</style>