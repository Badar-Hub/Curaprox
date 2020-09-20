<template>
  <div>
    <div class="Slider">
      <div class="text">
        <slot name="textOverlay"></slot>
      </div>
    </div>
    <hr style="margin:0; max-width:1200px; margin: auto" />
    <div class="smShow">
      <slot name="smShow"></slot>
    </div>
    <div class="Slider-after">
      <div class="col">
        <div class="text-after"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Slider {
  background-image: url("../../assets/img/curaprox-toothbrush-overview-header-cs5460-blue-green.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1200px;
  margin: auto;
  text-align: justify;
}

.text {
  padding: 13% 0;
  background-size: cover;
  line-height: 1.4;
}

h2 {
  font-family: futura-pt, sans-serif;
  font-size: 70px;
  margin: 30px 0;
}

p {
  font-family: ff-info-text-web-pro, sans-serif;
  font-size: 22px;
  margin: 0;
  letter-spacing: 3px;
}

.col {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
}

.col .text-after {
  text-align: left;
}

.col img {
  max-width: 250px;
}

.smShow {
  display: none;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

@media (max-width: 910px) {
  .text {
    padding-top: 9%;
  }

  h2 {
    font-family: futura-pt, sans-serif;
    font-size: 50px;
    margin: 20px 0;
  }

  p {
    font-family: ff-info-text-web-pro, sans-serif;
    font-size: 15px;
    margin: 0;
    letter-spacing: 2px;
  }
}

@media (max-width: 650px) {
  .smShow {
    display: block;
  }

  .text {
    color: #f9f9f9;
  }

  .text {
    padding-top: 6%;
  }

  h2 {
    font-family: futura-pt, sans-serif;
    font-size: 40px;
    margin: 10px 0;
  }

  p {
    font-family: ff-info-text-web-pro, sans-serif;
    font-size: 15px;
    margin: 0;
    letter-spacing: 2px;
  }
}
</style>