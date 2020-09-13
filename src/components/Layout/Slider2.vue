<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="text">
        <h2>TOOTHBRUSH CS 5460</h2>
        <h3>
          GENTLE ON
          <br />TEETH AND
          <br />GUMS
        </h3>
        <p>
          Each and every one of the 5,460 CUREN®
          <br />filaments works together to combat plaque.
          <br />Hard on plaque. Gentle on teeth and gums.
        </p>
      </div>
    </div>
    <hr style="max-width: 1200px;
    margin: auto;" />
    <div class="slider-inner-after">
      <div class="default">
        <img src="@/assets/img/5460.png" />
        <span>5,460 filaments densely packed on the brush head to give exceptional cleaning power</span>
      </div>
      <div class="default">
        <img src="@/assets/img/Curaprox_Badge_Small-Head.png" />
        <span>Compact brush head. Slight angle. Optimal cleaning</span>
      </div>
      <div class="default">
        <img src="@/assets/img/Curaprox_Badge_Feder.png" />
        <span>CUREN® filaments. Incredibly gentle, incredibly thin – just 0.1mm in diameter</span>
      </div>
      <div class="default">
        <img src="@/assets/img/Curaprox_Badge_Zahl-45.png" />
        <span>Octagonal handle. It’s almost impossible NOT to clean at the correct angle</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider2",
};
</script>

<style scoped>
.slider {
  background-color: #f9f9f9;
  margin-bottom: 3%;
}

.slider-inner {
  display: flex;
  position: relative;
  background-image: url(../../assets/img/curaprox-toothbrush-overview-header-cs5460-blue-green.jpg);
  background-size: cover;
  width: 100%;
  height: 85vh;
  max-width: 1200px;
  margin: auto;
}

.slider-inner .text {
  top: 15%;
  position: absolute;
}

.slider-inner .text h2 {
  font-size: 20px;
  margin: 0;
  padding: 0;
  text-align: left;
  color: black;
  font-size: 23px;
  line-height: 1.1;
}
.slider-inner .text h3 {
  margin: 20px 0;
  padding: 0;
  text-align: left;
  color: black;
  font-size: 6.25rem;
  font-weight: 100;
  line-height: 1.1;
}

.slider-inner p {
  font-size: 30px;
  margin: 20px;
  padding: 0;
  color: black;
}

.slider-inner-after {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
}

.default {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  max-width: 22%;
}

.default span {
  font-size: 18px;
  font-family: ff-info-text-web-pro, sans-serif;
}

.slider-inner-after img {
  max-width: 200px;
  margin: 0 auto;
  width: 100%;
}
</style>