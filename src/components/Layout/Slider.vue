<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="text">
        <h2>PINK LIMITED EDITION</h2>
        <h3>THINK PINK!</h3>
        <button>SHOP</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.slider {
  background-color: #ef7fb1;
  margin-bottom: 3%;
}

.slider-inner {
  display: flex;
  position: relative;
  background-image: url(../../assets/img/header.png);
  background-size: cover;
  width: 100%;
  height: 70vh;
  max-width: 1200px;
  margin: auto;
}

.slider-inner .text {
  top: 25%;
  position: absolute;
}

.slider-inner .text h2 {
  font-size: 20px;
  margin: 20px;
  padding: 2px;
  text-align: left;
  color: white;
  font-size: 23px;
}
.slider-inner .text h3 {
  font-size: 50px;
  margin: 20px;
  text-align: left;
  color: white;
  font-size: 80px;
}

.slider-inner button {
  margin-top: 40px;
  margin-left: 20px;
  float: left;
  color: white;
  padding: 15px 50px;
  border-radius: 15%;
  background-color: #ef7fb1;
}

.slider-inner button:hover {
  border: rgb(37, 29, 29) 1px solid;
}
</style>