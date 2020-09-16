<template>
  <div class="pro-featured">
    <div class="pro-featured-inner">
      <img :src="require(`@/assets/img/${img}`)" />
      <div class="text">
        <h2>{{h2Text}}</h2>
        <h3>{{h3Text}}</h3>
        <p>
          <span>
            <a :href="link1.href">{{link1.text}}</a>
            >
          </span>
          <span>
            <a :href="link2.href">{{link2.text}}</a>
            >
          </span>
        </p>
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
    h2Text: {
      type: String,
    },

    h3Text: {
      type: String,
    },

    link1: {
      href: String,
      text: String,
    },

    link2: {
      href: String,
      text: String,
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
  max-width: 500px;
}

.pro-featured-inner .text a {
  color: inherit;
  text-decoration: none;
  padding-right: 5px;
  font-size: 22px;
}

h2 {
  font-size: 25px;
  margin: 0;
}

h3 {
  font-size: 50px;
  margin: 20px 0;
}

span {
  padding-right: 20px;
}

.pro-featured-inner .text a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  h3 {
    font-size: 45px;
    margin: 5px 0;
  }

  h2 {
    font-size: 25px;
    margin: 0;
  }

  a,
  p,
  span {
    font-size: 25px;
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
    font-size: 30px;
    margin: 5px 0;
    line-height: 40px;
  }

  h2 {
    font-size: 15px;
    margin: 0;
  }

  a,
  p,
  span {
    font-size: 17px;
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
    max-width: 300px;
  }
}
</style>