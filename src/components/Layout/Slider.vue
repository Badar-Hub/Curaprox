<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="text">
        <p>PURE JOY</p>
        <h3>
          FOR TEETH
          <br />FOR GUMS.
          <br />AND FOR YOU.
        </h3>
        <!-- <h3>THINK PINK!</h3> -->
        <button>SHOP NOW</button>
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
  background-color: #fcb6b6;
  margin-bottom: 3%;
}

.slider-inner {
  display: flex;
  background-image: url(../../assets/img/HomeSlider01.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 70vh;
  max-width: 1200px;
  margin: auto;
}

.slider-inner .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slider-inner .text p {
  color: white;
  text-align: left;
  margin: 20px;
  padding: 2px;
  font-size: 1.5rem;
}

.slider-inner .text h2 {
  font-size: 20px;
  margin: 20px;
  margin-top: 0px;
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
  width: 300px;
  margin: 0 auto;
  float: left;
  color: white;
  padding: 15px 50px;
  /* border-radius: 15%; */
  background-color: #fcb6b6;
}

.slider-inner button:hover {
  border: rgb(37, 29, 29) 1px solid;
}
</style>