<template>
  <div>
    <div class="cart">
      <div class="cart-inner">
        <div class="title">
          <div class="product-main">Product</div>
          <div class="price-main">Price</div>
          <div class="quantity-main">Quantity</div>
          <div class="total-main">Total</div>
        </div>
        <hr />
        <div v-for="prod in getAllProducts" :key="prod.id" class="title-inner">
          <div class="product">
            <div class="textP">
              <img :src="require(`@/assets/img/products/${prod.img}`)" />
              <div class="text">
                <p>{{prod.name}}</p>
              </div>
            </div>
          </div>
          <div class="price">
            <p>Rs. {{prod.price}}</p>
          </div>
          <div class="quantity">
            <div class="qty">
              <button v-on:click="qtyPlus">+</button>
              <p>{{quantity}}</p>
              <button v-on:click="qtyMinus">-</button>
            </div>
          </div>
          <div v-on="totalP" class="total">Rs. {{Total}}</div>
        </div>
        <hr />
      </div>

      <div class="row">
        <div class="promo">
          <div class="promo-inner">
            <div class="promo-text">
              <h3>Have A Promotional Code?</h3>
              <hr />
              <input type="text" placeholder="Coupon code" />
              <input type="Submit" placeholder="Submit" />
            </div>
          </div>
        </div>
        <div class="checkout">
          <div class="checkout-inner">
            <h3>Cart Total</h3>
            <hr />
            <div class="subtotal">
              <p>
                <strong>subtotal</strong>
              </p>
              <p>
                <strong>Rs. {{getTotalCost}}</strong>
              </p>
            </div>
            <hr />
            <div class="total">
              <p>
                <strong>Total</strong>
              </p>
              <p>
                <strong>Rs. {{getTotalCost}}</strong>
              </p>
            </div>
            <hr />
            <div class="btn">
              <button>Update Cart</button>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart-finaL",
  data() {
    return {
      quantity: 0,
      Total: 0,
    };
  },
  methods: {
    qtyPlus() {
      this.quantity++;
    },
    qtyMinus() {
      this.quantity--;
    },
    totalP() {
      this.Total = this.quantity * this.getAllProducts.price;
    },
  },
  computed: mapGetters(["getAllProducts", "getTotalCost"]),
};
</script>

<style scoped lang="sass">
.cart
  padding: 3%
  .cart-inner
    max-width: 1200px
    margin: auto
    text-align: left
    .title
      display: flex
      .product-main
        flex: 6
      .price-main
        flex: 2
      .quantity-main
        flex: 2 
      .total-main
        flex: 2
    .title-inner
      display: flex
      padding: 1% 0
      .product
        flex: 6
      .price
        flex: 2
        margin: auto 0
      .quantity
        flex: 2 
        margin: auto 0
      .total
        flex: 2
        margin: auto 0
      img
        max-width: 100px
      .textP
        display: flex
      .text
        margin: auto 0
      .qty
        display: flex      
  .row
    display: flex
    max-width: 1200px
    margin: auto
    justify-content: space-between
    padding: 2% 0
    column-gap: 5em

    .promo
      border: black 1px solid
      flex: 5
      max-width: 400px
      padding: 20px

    .checkout
      border: black 1px solid
      max-width: 400px
      flex: 5
      padding: 20px
      .subtotal
        display: flex
        justify-content: space-between    
      .total
        display: flex
        justify-content: space-between    
      .btn
        display: flex
        flex-direction: column
      button
        max-width: 200px
        margin: 5px auto  


</style>