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
}

.pro-featured-inner .text a {
  color: inherit;
  text-decoration: none;
  padding-right: 5px;
  font-size: 22px;
}

.pro-featured-inner .text h2 {
  font-size: 25px;
}

.pro-featured-inner .text h3 {
  font-size: 50px;
}

.pro-featured-inner .text span {
  padding-right: 20px;
}

.pro-featured-inner .text a:hover {
  text-decoration: underline;
}
</style>