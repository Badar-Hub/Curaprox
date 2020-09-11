<template>
  <div class="featured-category">
    <div class="left">
      <img :src="require(`@/assets/img/${left.img}`)" />
      <div class="text">
        <h2>{{left.h2Text}}</h2>
        <h3>{{left.h3Text}}</h3>
        <div class="ptext">
          <p>{{left.a1Text}}</p>
          <p>{{left.a1Text}}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="text">
        <h2>{{right.h2Text}}</h2>
        <h3>{{right.h3Text}}</h3>
        <div class="ptext">
          <p>{{right.a1Text}}</p>
          <p>{{right.a1Text}}</p>
        </div>
        <!-- <h2>INTERDENTAL BRUSHES</h2>
        <h3>
          RIGHT IN THE MIDDLE
          <br />OF THE INTERDENTAL
          <br />SPACE.
        </h3>
        <div class="ptext">
          <p>
            <a href="#">Learn More</a>
          </p>
          <p>
            <a href="#">Buy</a>
          </p>
        </div> -->
      </div>
      <img :src="require(`@/assets/img/${right.img}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedCategoryComponent",
  props: {
    left: {
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
      a1Text: {
        type: String,
      },
      a2Text: {
        type: String,
      },
    },
    right: {
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
      a1Text: {
        type: String,
      },
      a2Text: {
        type: String,
      },
    },
    
  },
};
</script>

<style scoped>
.featured-category {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
}

.featured-category .left {
  position: relative;
  text-align: left;
  color: black;
}

.featured-category .right {
  position: relative;
  text-align: left;
  color: black;
}

.featured-category .text {
  position: absolute;
  top: 8px;
  left: 16px;
}

.featured-category img {
  width: 100%;
}

.featured-category .left {
  border: black 2px solid;
}

.featured-category .right {
  border: black 2px solid;
}

.featured-category .ptext {
  display: flex;
  flex-wrap: wrap;
}

.featured-category .ptext p {
  padding-right: 20px;
}

.featured-category h2 {
  font-size: 25px;
}

.featured-category h3 {
  font-size: 45px;
  margin: 0;
}
</style>