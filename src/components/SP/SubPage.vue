<template>
  <div>
    <div :style="`background-color:${backgroundColor}`" class="sub">
      <div :style="`flex-direction:${rowDirection}`" class="sub-inner">
        <div class="text">
          <h2>{{h2text}}"</h2>
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
    backgroundColor: {
      type: String,
      default: function(){
        return "white"
      }
    }
    },
  },
};
</script>

<style scoped>
.sub {
  padding: 5rem;
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

.sub .sub-inner .img {
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
</style>