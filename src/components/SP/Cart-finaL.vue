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
        <div v-for="prod in getAllProducts" :key="prod._id" class="title-inner">
          <div class="product">
            <div class="textP">
              <img :src="`${(!isDev? '/admin/' : '' ) + prod.img}`" />
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
              <button
                class="btn-secondary bg-danger"
                v-on:click="$set(prod, 'qty', prod.qty-1); $set(prod, 'total', prod.qty * prod.price)"
              >-</button>
              <p>{{prod.qty}}</p>
              <button
                class="btn-secondary"
                v-on:click="$set(prod, 'qty', prod.qty+1); $set(prod, 'total', prod.qty * prod.price)"
              >+</button>
            </div>
          </div>
          <div class="total">
            <p>Rs. {{prod.total}}</p>
          </div>
        </div>
        <hr />
      </div>
      <Modal @click="display = !display" :style="[display ? 'block' : 'none']">
        <template>
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
                    <strong>Subtotal</strong>
                  </p>
                  <p>
                    <strong>Rs. {{getTotalCost}}</strong>
                  </p>
                </div>
                <hr />
                <div class="shipping">
                  <p>
                    <strong>Shipping</strong>
                  </p>
                  <p>
                    <strong>Rs. {{shippingPrice}}</strong>
                  </p>
                </div>
                <hr />
                <div class="total">
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>Rs. {{getTotalCost + shippingPrice}}</strong>
                  </p>
                </div>
                <hr />
                <div class="btn">
                  <button>Proceed To Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Modal>

    </div>
    <CheckOut />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./Modal"
import CheckOut from "../Layout/Checkout";
export default {
  components: {
    CheckOut,
    Modal
  },
  data() {
    return {
      shippingPrice: 200,
      isDev: false,
      display:false
    };
  },
  methods: {
    ...mapActions(["names", "updateCart"]),
  },
  mounted() {
    this.isDev = process.env.NODE_ENV === "development";
  },
  computed: mapGetters(["getAllProducts", "getTotalCost", "getAllNames"]),
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
      .shipping
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