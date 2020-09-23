<template>
  <div>
    <div class="text">
      <div class="text-inner">
        <h2>
          Experience the difference.
          <p>Dental professionals have been recommending our toothbrushes for more than 40 years. Once you’ve tried these brushes… you won’t go back. Developed and manufactured in Switzerland.</p>
        </h2>
        <!-- <p>{{pText}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingText",
  props: {
    h2Text: String,
    // pText: String,
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
  font-size: 73px;
  color: #652d89;
}

.text .text-inner p {
  font-size: 73px;
}
</style>