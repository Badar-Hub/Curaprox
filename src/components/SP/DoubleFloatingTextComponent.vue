<template>
  <div>
    <div class="main">
      <div class="main-inner">
        <div class="leftText">
          <h2>{{left.title}}</h2>
          <p>{{left.desc}}</p>
        </div>
        <div class="rightText">
          <h2>{{right.title}}</h2>
          <p>{{right.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoubleFloatingTextComponent",
  props: {
    left: {
      title: String,
      desc: String,
    },
    right: {
      title: String,
      desc: String,
    },
  },
};
</script>

<style scoped>
.main-inner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  column-gap: 5em;
  justify-content: center;
}
.leftText {
  max-width: 450px;
  text-align: left;
  padding: 30px;
}
.rightText {
  max-width: 450px;
  text-align: left;
  padding: 30px;
}
p {
  font-size: 20px;
  text-align: justify;
}

h2 {
  font-size: 2.2rem;
  margin: 0;
}
@media (max-width: 910px) {
  .main-inner {
    flex-direction: column;
    justify-content: center;
  }
  p {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.9rem;
    margin: 0;
  }
}
</style>