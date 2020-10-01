<template>
  <div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 30px;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

img {
  width: 100%;
  padding-bottom: 15px;
}

a {
  color: #ff8484;
  text-decoration: none;
}

a:hover {
  color: #9ea8a8;
}
h2 {
  text-transform: uppercase;
  line-height: 1.3;
}

@media (max-width: 500px) {
  .c1 {
    margin: auto;
    width: 85%;
  }
}
</style>