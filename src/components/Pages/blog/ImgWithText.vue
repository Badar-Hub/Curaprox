<template>
  <div>
    <div class="imgtxt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imgtxt {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: auto;
  text-align: left;
  padding: 3% 0;
}

img {
  max-width: 550px;
  width: 100%;
  margin-bottom: 20px;
}

a {
  font-size: 1.2rem;
  margin-top: 0;
  color: #ff8484;
  text-decoration: none;
}

a:hover {
  color: #9ea8a8;
}

h2 {
  font-size: 3rem;
  margin-top: 1.5rem;
  line-height: 1.4;
  text-transform: uppercase;
}

@media (max-width: 500px) {
  .text {
    margin: auto;
    width: 85%;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>