<template>
  <div>
    <div class="shoptxt">
      <h4>{{ headingText }}</h4>
      <h4 class="font-roboto">{{ paragraphText }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headingText: String,
    paragraphText: String,
  },
};
</script>

<style scoped>
.shoptxt {
  text-align: center;
}
</style>