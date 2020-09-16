<template>
  <div>
    <div class="burshing">
      <div class="burshing-inner">
        <h3>{{h3Text}}</h3>
        <h2>{{h2Text}}</h2>
        <p>{{pText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrushingText",
  props: {
    h3Text: String,
    h2Text: String,
    pText: String,
  },
};
</script>

<style scoped>
.burshing {
  margin: 3%;
}

.burshing .burshing-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}

.burshing .burshing-inner h3 {
  font-size: 28px;
  margin: 0;
}

.burshing .burshing-inner h2 {
  font-size: 100px;
  padding: 20px;
  margin: 0;
  color: #8dc73f;
}

.burshing .burshing-inner p {
  font-size: 30px;
  margin: 0;
}

@media (max-width: 900px) {
  /* Burshing Start */

  .burshing .burshing-inner h2 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 50px;
    margin: auto;
  }

  .burshing .burshing-inner p {
    font-size: 22px;
    text-align: center;
    margin: auto;
  }

  .burshing .burshing-inner {
    margin: auto;
  }

  /* Burshing End */
}

@media (max-width: 615px) {
  /* Burshing Start */

  .burshing .burshing-inner h2 {
    font-size: 34px;
    text-align: center;
    margin-bottom: 50px;
    margin: auto;
  }

  .burshing .burshing-inner p {
    font-size: 22px;
    text-align: center;
    margin: auto;
  }

  .burshing .burshing-inner {
    margin: auto;
  }

  /* Burshing End */
}
</style>