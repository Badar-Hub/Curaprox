<template>
  <div>
    <div class="text">
      <div class="text-inner">
        <h2>{{h2Text}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingText",
  props: {
    h2Text: String,
  },
};
</script>

<style scoped>
.text .text-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 2%;
  text-align: left;
}

.text .text-inner h2 {
  font-size: 4rem;
  color: #652d89;
}
</style>