<template>
  <div class="featured-category">
    <div class="left">
      <img :src="require(`@/assets/img/${leftImg}`)" />
      <div class="text">
        <h2>ORTHODONTICS</h2>
        <h3>
          BRUSHING
          <br />YOUR TEETH
          <br />WITH CLAS
        </h3>
        <div class="ptext">
          <p>
            <a href="#">Learn More</a>
          </p>
          <p>
            <a href="#">Buy</a>
          </p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="text">
        <h2>INTERDENTAL BRUSHES</h2>
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
        </div>
      </div>
      <img :src="require(`@/assets/img/${rightImg}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedCategoryComponent",
  props: {
    leftImg: {
      type: String,
      required: true,
    },
    rightImg: {
      type: String,
      required: true,
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