<template>
  <div class="main">
    <div class="imgBack">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
  },
};
</script>

<style scoped>
.main {
  background-color: #f9f9f9;

  padding: 3% 0;
}

.imgBack {
}

.imgBack-inner {
  background-size: cover;
  width: auto;
  background-repeat: no-repeat;
  max-width: 1200px;
  margin: auto;
  height: 700px;
  text-align: left;
}

.imgBack-inner h3,
.hidden h3 {
  font-size: 3rem;
  margin-bottom: 0;
}

.imgBack-inner p,
.hidden p {
  font-size: 1.4rem;
}

.txt {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

.c1 {
}

.c1 h4 {
  font-size: 1.3rem;
}

.c1 p {
  font-size: 1.1rem;
}

.hidden {
  display: none;
  text-align: left;
  max-width: 1200px;
  margin: auto;
}

@media (max-width: 910px) {
  .c1 h4 {
    font-size: 1rem;
  }

  .c1 p {
    font-size: 0.9rem;
  }
  .hidden h3 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .imgBack-inner p,
  .hidden p {
    font-size: 1rem;
  }
}

@media (max-width: 650px) {
  .imgBack-inner {
    height: 200px;
    width: 100%;
  }

  .heading {
    display: none;
  }
  .hidden {
    display: block;
  }
}
</style>