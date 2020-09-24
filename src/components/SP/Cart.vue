<template>
  <div class="cart">
    <div class="cart-inner">
      <h3>You Have 1 Item In Your Cart</h3>
      <div class="container">
        <div class="main">
          <div class="product-main">
            <p>Product</p>
          </div>
          <div class="price-main">
            <p>Price</p>
          </div>
          <div class="quantity-main">
            <p>Quantity</p>
          </div>
          <div class="total-main">
            <p>Total</p>
          </div>
        </div>
        <hr />
        <div class="product">
          <div class="content">
            <div class="img">
              <img src="@/assets/img/products/cs-5460.png" />
            </div>
            <div class="text">
              <p>Curaprox Ultra Soft CS-5460</p>
            </div>
          </div>
        </div>
        <div class="price">
          <p>Price</p>
          <hr />
          <div class="content">
            <p>Rs. 650</p>
          </div>
        </div>
        <div class="quantity">
          <p>Quantity</p>
          <hr />
          <div class="content">
            <button>+</button>
            <p>0</p>
            <button>-</button>
          </div>
        </div>
        <div class="total">
          <p>Total</p>
          <hr />
          <div class="content">
            <p>Rs. 650</p>
          </div>
        </div>
      </div>
      <hr style="max-width:1100px;" />
    </div>
    <div class="row">
      <div class="promo">
        <div class="promo-inner">
          <h3>Have A Promotional Code?</h3>
          <hr />
          <div class="cuponCode">
            <input type="text" placeholder="Cupon Code" />
            <input type="submit" placeholder="Submit" />
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
            <p>Rs. 2,250</p>
          </div>
          <div class="total">
            <p>
              <strong>Total</strong>
            </p>
            <p>Rs. 2,250</p>
          </div>
          <div class="btn">
            <button>UPDATE CART</button>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped lang="sass">
hr
  width: 100%



.cart
  padding: 3% 0
  .cart-inner
    border: black 1px solid
    max-width: 1200px
    margin: 2em auto
    text-align: left
    
    .container
      display: flex
      max-width: 1100px
      flex-wrap: wrap
      margin: auto

      .main
        display: flex

        .product-main
          display: flex
          flex: 6

        .price-main
          display: flex
          flex: 6

        .quantity-main
          display: flex
          flex: 6

        .total-main
          display: flex
          flex: 6

      .product
        display: flex
        flex-direction: column
        background-color: aliceblue
        flex-wrap: wrap
        flex: 6

      .price
        display: flex
        flex-direction: column
        background-color: antiquewhite
        flex-wrap: wrap
        flex: 2

      .quantity
        display: flex
        flex-direction: column
        background-color: aqua
        flex-wrap: wrap
        flex: 2

      .total
        display: flex
        flex-direction: column
        background-color: aquamarine
        flex-wrap: wrap
        flex: 2

      .content
        display: flex

      .product img 
        max-width: 100px

  .row
    display: flex
    flex-wrap: wrap
    max-width: 1200px
    margin: auto
    justify-content: space-between
    gap: 2

  .promo
    display: flex
    flex-direction: row
    text-align: left
    flex: 4
    padding-right: 10px

    .promo-inner
      display: flex
      flex-direction: column
      border: black 1px solid
      width: 100%

      .cuponCode
        display: flex
        input[type="text"]
          flex: 10

        input[type="submit"]
          flex: 2
        

  .checkout
    padding-left: 10px
    display: flex
    flex-direction: row
    justify-content: space-between
    margin: auto
    text-align: left
    flex: 4

    .subtotal
      display: flex
      justify-content: space-between

    .total
      display: flex
      justify-content: space-between

    .btn
      display: flex
      flex-directi
      on: column
      padding: 20px

      button
        margin: 10px


    .checkout-inner
      display: flex
      flex-direction: column
      border: black 1px solid
      justify-content: space-between
      width: 100%

</style>