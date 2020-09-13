<template>
  <div class="product">
    <div class="product-inner">
      <div class="product-left">
        <div>
          <img :src="require(`@/assets/img/products/${left.img}`)" />
          <div class="text">
            <h4>{{left.h4Text}}</h4>
            <h2>{{left.h2Text}}</h2>
            <p>{{left.pText}}</p>
            <p>
              <a href="#">{{left.a1Text}}</a>
              <a href="#">{{left.a2Text}}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="product-right">
        <img :src="require(`@/assets/img/products/${right.img}`)" />
        <div class="text">
          <h4>{{right.h4Text}}</h4>
          <h2>{{right.h2Text}}</h2>
          <p>{{right.pText}}</p>
          <p>
            <a href="#">{{right.a1Text}}</a>
            <a href="#">{{right.a2Text}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDisplay",
  props: {
    left: {
      img: {
        type: String,
      },
      h4Text: {
        type: String,
      },
      h2Text: {
        type: String,
      },
      pText: {
        type: String,
      },
      a1Text: {
        type: String,
      },
      a2Text: {
        type: String,
      },
    },
    right: {
      img: {
        type: String,
      },
      h4Text: {
        type: String,
      },
      h2Text: {
        type: String,
      },
      pText: {
        type: String,
      },
      a1Text: {
        type: String,
      },
      a2Text: {
        type: String,
      },
    },
  },
};
</script>

<style>
.product {
  background-color: #fbf4f8;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 1% 0;
}

.product .product-inner {
  display: grid;
  grid-template: auto / auto auto;
  text-align: left;
  max-width: 1200px;
}

.product .product-inner .text {
  padding: 30px;
  color: #0060aa;
}

.product .product-inner .text h4 {
  font-size: 23px;
}

.product .product-inner .text h2 {
  font-size: 50px;
}

.product .product-inner .text p {
  font-size: 22px;
}

.product .product-inner .text a {
  padding-right: 20px;
  text-decoration: none;
}

.product .product-inner .product-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 45%; */
}

.product .product-inner .product-right {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 45%; */
}

.product .product-inner img {
  border-radius: 50%;
  background-color: transparent;
  max-width: 400px;
  border-radius: 50%;
  background-color: white;
}
</style>