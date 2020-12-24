<template>
  <div>
    <div class="product">
      <div class="product-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product {
  background-color: #fbf4f8;
}
.product-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  color: #0060aa;
  text-align: left;
  max-width: 1200px;
  margin: auto;
}

.prodis {
  max-width: 450px;
  margin: 0 auto;
}

/* .img {
  border-radius: 50%;
  background-color: white;
} */

img {
  max-width: 400px;
  border-radius: 33%;
  background-color: white;
  width: 100%;
}

h4 {
  font-size: 20px;
}

h2 {
  font-size: 51px;
}

p {
  font-size: 24px;
}

a {
  padding-right: 20px;
  text-decoration: none;
  font-size: 18px;
}
</style>
