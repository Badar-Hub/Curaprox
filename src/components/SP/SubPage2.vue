<template>
  <div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 1200px;
  margin: auto;
  text-align: left;
  padding: 1rem;
}

.sp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
}

h2 {
  font-size: 3rem;
  color: #005ea8;
  margin: 1.5rem 0;
}

p {
  font-size: 1.4rem;
  color: #a1a1a1;
  line-height: 1.5;
  margin-top: 1.2rem;
}
</style>