<template>
  <div class="pro-featured">
    <div class="pro-featured-inner">
      <img src="../../assets/img/Hydrosonic-Pro-toothbrush.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProFeaturedComponent",
};
</script>

<style scoped>
.pro-featured {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.pro-featured-inner img {
  width: 100%;
}
</style>