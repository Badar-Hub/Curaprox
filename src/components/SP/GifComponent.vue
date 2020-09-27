<template>
  <div class="gif">
    <div class="gif-inner">
      <img :src="require(`@/assets/img/${img}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GifComponent",
  props: {
    img: String,
  },
};
</script>

<style scoped>
.gif {
  padding: 3% 0;
}
.gif-inner {
  max-width: 1200px;
  margin: auto;
}
img {
  width: 100%;
}
</style>