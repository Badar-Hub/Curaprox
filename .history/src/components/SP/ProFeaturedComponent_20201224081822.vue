<template>
  <div class="pro-featured">
    <div class="pro-featured-inner">
      <img :src="require(`@/assets/img/${img}`)" />
      <div class="text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProFeaturedComponent",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.pro-featured div {
  margin: 3% 0;
}

.pro-featured {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.pro-featured-inner {
  position: relative;
  text-align: left;
  color: inherit;
}

.pro-featured-inner img {
  width: 100%;
}

.pro-featured-inner .text {
  position: absolute;
  top: 8px;
  left: 16px;
}

.pro-featured-inner .text a {
  font-size: 19px;
  color: inherit;
  text-decoration: none;
  padding-right: 5px;
}

h2 {
  font-size: 26px;
  margin: 0;
  letter-spacing: 1px;
}

h3 {
  font-size: 32px;
  margin: 20px 0;
  letter-spacing: 0px;
}

span {
  padding-right: 20px;
}

.pro-featured-inner .text a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  h3 {
    margin: 5px 0;
  }

  h2 {
    margin: 0;
  }

  a,
  p,
  span {
    font-size: 19px;
    margin: 0;
  }
  .pro-featured-inner img {
    width: 100%;
    max-height: 550px;
    min-height: 350px;
  }
}
@media (max-width: 600px) {
  h3 {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
  }

  a,
  p,
  span {
    font-size: 0.8rem;
    margin: 0;
  }
  .pro-featured-inner img {
    width: 100%;
    height: 350px;
  }

  .pro-featured-inner .text {
    position: absolute;
    top: 8px;
    left: 16px;
  }
}
</style>
