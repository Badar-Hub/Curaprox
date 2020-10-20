<template>
  <div>
    <div class="backimg">
      <div class="slider">
        <h3>PURE JOY</h3>
        <h1>
          FOR TEETH
          <br />FOR GUMS.
          <br />AND FOR YOU.
        </h1>
        <button class="btn-shop">
          <a href="/#/shop">SHOP NOW</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.backimg {
  background-color: #fcb6b6;
}

.slider {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  text-align: left;
  background-image: url("../../assets/img/HomeSlider01.jpg");
  background-size: contain;
  height: 600px;
  justify-content: center;
  color: white;
}

h1 {
  font-size: 4rem;
  margin-top: 0;
}
h3 {
  font-size: 1.3rem;
  margin-top: 0;
}
</style>