<template>
  <div class="main">
    <div
      :style="`background-image: url(${require(`@/assets/img/${image}`)});`"
      class="Slider"
    >
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
        <img :src="require(`@/assets/img/${content1.img}`)" />
        <div class="text-after">
          <p class="font-info">{{ content1.pText }}</p>
        </div>
      </div>
      <div class="col">
        <img :src="require(`@/assets/img/${content2.img}`)" />
        <div class="text-after">
          <p class="font-info">{{ content2.pText }}</p>
        </div>
      </div>
      <div class="col">
        <img :src="require(`@/assets/img/${content3.img}`)" />
        <div class="text-after">
          <p class="font-info">{{ content3.pText }}</p>
        </div>
      </div>
      <div class="col">
        <img :src="require(`@/assets/img/${content4.img}`)" />
        <div class="text-after">
          <p class="font-info">{{ content4.pText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    content1: {
      img: {
        Type: String,
        required: false,
      },
      pText: String,
    },
    content2: {
      img: {
        type: String,
        required: false,
      },
      pText: String,
    },
    content3: {
      img: {
        type: String,
        required: false,
      },
      pText: String,
    },
    content4: {
      img: {
        type: String,
        required: false,
      },
      pText: {
        type: String,
        required: false,
      },
    },
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 3%;
  padding-bottom: 3%;
  background-color: #f9f9f9;
}

.Slider {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 1200px;
  margin: auto;
  text-align: justify;
}

.text {
  padding: 5% 0;
  background-size: contain;
  line-height: 1.4;
}

h2 {
  font-size: 83px;
  margin: 30px 0;
}

p {
  font-size: 19px;
  letter-spacing: 3px;
}

h3 {
  font-size: 24px;
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

.Slider-after {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

.Slider-after img {
  margin: auto;
  width: 100%;
}

.Slider-after .text-after {
  text-align: center;
  max-width: 300px;
  margin: auto 0;
}

.Slider-after .text-after p {
  font-size: 14px;
}

@media (max-width: 910px) {
  .Slider {
    min-height: 600px;
  }

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
    letter-spacing: 2px;
  }
}

@media (max-width: 650px) {
  .Slider {
    min-height: 400px;
  }

  .smShow {
    display: block;
  }

  .text {
    display: none;
  }

  .text {
    padding-top: 6%;
  }

  h2 {
    font-size: 40px;
    margin: 10px 0;
  }

  p {
    font-size: 15px;
    letter-spacing: 2px;
  }
}
</style>
