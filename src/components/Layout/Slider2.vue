<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="img">
        <img :src="require(`@/assets/img/Slider/${img}`)" />
      </div>
    </div>
    <div class="slider-inner-after">
      <div class="default">
        <img :src="require(`@/assets/img/${text1.img}`)" />
        <p>{{text1.pText}}</p>
      </div>
      <div class="default">
        <img :src="require(`@/assets/img/${text2.img}`)" />
        <p>{{text2.pText}}</p>
      </div>
      <div class="default">
        <img :src="require(`@/assets/img/${text3.img}`)" />
        <p>{{text3.pText}}</p>
      </div>
      <div class="default">
        <img :src="require(`@/assets/img/${text4.img}`)" />
        <p>{{text4.pText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider2",
  props: {
    img: String,
    text1: {
      img: String,
      pText: String,
    },
    text2: {
      img: String,
      pText: String,
    },
    text3: {
      img: String,
      pText: String,
    },
    text4: {
      img: String,
      pText: String,
    },
  },
};
</script>

<style scoped>
.slider {
  background-color: #f9f9f9;
  margin-bottom: 3%;
}

.slider .slider-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

.slider .slider-inner img {
  position: relative;
  width: 100%;
}

.slider .text {
  top: 25%;
  position: absolute;
}

.slider .text h2 {
  margin: 0;
  padding: 0;
  font-size: 28px;
}

.slider .text h3 {
  margin: 0;
  padding: 0;
  font-size: 100px;
}

.slider .text p {
  margin: 0;
  padding: 0;
  font-size: 30px;
}

.slider .slider-inner-after {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.slider .default {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  max-width: 22%;
}

.slider .default img {
  max-width: 200px;
  margin: 0 auto;
  width: 100%;
}
</style>
