<template>
  <div>
    <div :style="`background-color:${backgroundColor}`" class="sub">
      <div :style="`flex-direction:${rowDirection}`" class="sub-inner">
        <div class="text">
          <h2>{{h2text}}</h2>
          <p>{{ptext}}</p>
        </div>
        <div class="img">
          <img :src="require(`@/assets/img/${img}`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubPage",
  inheritAttrs: false,
  props: {
    h2text: String,
    ptext: String,
    img: String,
    rowDirection: {
      type: String,
      default: function () {
        return "row";
      },
    },
    backgroundColor: {
      type: String,
      default: function () {
        return "white";
      },
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.sub {
  margin-bottom: 3%;
}
.sub .sub-inner {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
}

.sub .sub-inner .text {
  padding-top: 10%;
  text-align: left;
  max-width: 48%;
}

.sub .sub-inner img {
  max-width: 600px;
  width: 100%;
}

.sub .sub-inner .text h2 {
  font-size: 50px;
  margin: 0;
  padding: 0;
}

.sub .sub-inner .text p {
  font-size: 22px;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-family: ff-info-text-web-pro, sans-serif;
}

@media (max-width: 1124px) {
  .sub .sub-inner {
    flex-direction: column-reverse !important;
  }

  .sub .sub-inner .text {
    padding-top: 10%;
    text-align: left;
    max-width: 48%;
    margin: auto;
  }
  .sub .sub-inner .text h2 {
    font-size: 2.3rem;
    margin: 0;
    padding: 0;
  }

  .sub .sub-inner .text p {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: ff-info-text-web-pro, sans-serif;
  }
}

@media (max-width: 600px) {
  .sub .sub-inner .text {
    margin: auto;
  }
  .sub .sub-inner .text h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .sub .sub-inner .text p {
    font-size: 1.22rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: ff-info-text-web-pro, sans-serif;
  }
}

/* 
@media (max-width: 910px) {
  .sub .sub-inner .text h2 {
    font-size: 42px;
  }

  .sub .sub-inner .text p {
    font-size: 20px;
  }
}

@media (max-width: 750px) {
  .sub .sub-inner .text h2 {
    font-size: 32px;
  }

  .sub .sub-inner .text p {
    font-size: 16px;
  }
} */
</style>