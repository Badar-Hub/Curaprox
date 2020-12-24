<template>
  <div>
      <div class="main-shop-page">
          <div class="row">
              <div class="col">
                  <h1>CS 5460</h1>
                  <p>Rs. 250</p>
                  <div class="row">
                      <h5 class="q-pr-md" style="margin:auto 0">Quantity</h5>
              <div class="input">
                <q-btn
                  @click="minusQty"
                  flat
                  color="primary"
                  size="1rem"
                  label="-"
                />
                <input
                  style="width: 70px; border:none; text-align:center"
                  type="text"
                  v-model.number="quantity"
                />
                <q-btn
                  @click="plusQty"
                  flat
                  color="primary"
                  size="1rem"
                  label="+"
                />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-shop-page {
    max-width: 1200px;
    margin: auto;
}
</style>