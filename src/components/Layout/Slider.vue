<template>
  <div>
    <div class="backimg">
      <div class="slider">
        <h3 class="font-futura-semi-medium">PURE JOY</h3>
        <h1 class="font-futura-medium">
          FOR TEETH
          <br />FOR GUMS.
          <br />AND FOR YOU.
        </h1>
        <a href="/#/shop" class="btn font-futura-semi-bold">SHOP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.backimg {
  background-color: #fcb6b6;
}
.btn{
  background-color: #fcb6b6!important;
  border: white 1px solid;
  color: white;
  text-align: center;
  text-decoration: none;
  max-width: 120px;
  padding: 12px;
  border-radius: 8%;
}
.slider {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  text-align: left;
  background-image: url("../../assets/img/HomeSlider01.jpg");
  background-size: contain;
  height: 600px;
  justify-content: center;
  color: white;
}

h1 {
  font-size: 4.3rem;
  margin-top: 0;
  margin-bottom: 1.5rem;

}
h3 {
  font-size: 1.3rem;
  margin: 0!important;
}
</style>