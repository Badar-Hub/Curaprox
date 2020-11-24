<template>
  <div class="shop-main">
    <div class="shop">
      <h1>{{ HeadingText }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    HeadingText: String,
  },
};
</script>

<style scoped>
.shop-main {
  transition: background 250ms ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}
.shop{
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;

}
h1{
  font-size: 60px;
}
</style>