<template>
  <div>
    <div class="main">
      <div class="contact-us">
        <div class="imgtxt">
          <h3>✔</h3>
          <h3>HELLO</h3>
        </div>
        <h3>Need Assistance? Call customer service at 0323-7672072</h3>
        <div class="imgtxt2">
          <a href>
            <img src="@/assets/img/cart.png" />
            <h3>VIEW CART</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-us {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 1200px;
  margin: auto;
  border: 1px solid black;
}
.imgtxt {
  display: flex;
  flex-wrap: wrap;
}

.imgtxt2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.imgtxt2 a {
  display: flex;
  flex-wrap: wrap;
}

.imgtxt2 img {
  max-width: 40px;
  max-height: 35px;
}

h3 {
  margin: 5px;
}
</style>