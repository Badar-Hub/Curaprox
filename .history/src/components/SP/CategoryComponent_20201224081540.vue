<template>
  <div class="main">
    <div class="main-inner">
      <div
        :style="`background-image: url(${require(`@/assets/img/${imgLeft}`)});`"
        class="left"
      >
        <div class="text">
          <slot name="left"></slot>
        </div>
      </div>
      <div
        :style="
          `background-image: url(${require(`@/assets/img/${imgRight}`)});`
        "
        class="right"
      >
        <div class="text">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgLeft: String,
    imgRight: String,
  },
};
</script>

<style scoped>
.main {
  padding: 3% 0;
}
.main-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  max-width: 1200px;
  margin: auto;
  text-align: left;
  grid-gap: 20px;
}

.left {
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
}
.right {
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
}

.onel {
  display: flex;
}

h2 {
  font-size: 21px;
  margin: 1.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 30px;
  line-height: 2.5rem;
  margin: 0 1.5rem;
  letter-spacing: 3px;
}
p {
  font-size: 19px;
  margin: 1.5rem;
}
a {
  text-decoration: none;
  font-size: 1.2rem;
}
a:hover {
  text-decoration: underline;
}

@media (max-width: 1099px) {
  h2 {
    font-size: 19px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 28px;
  }
  p {
    font-size: 13px;
    margin: 1.5rem;
  }
}

@media (max-width: 650px) {
  h2 {
    font-size: 16px;
    margin: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 25px;
    line-height: 2.5rem;
    margin: 0 1rem;
  }
  p {
    font-size: 1rem;
    margin: 1rem;
  }
  .left {
    height: 450px;
  }
  .right {
    height: 450px;
  }
}
</style>
