<template>
  <div>
    <footer>
      <!-- <div class="footer-inner">
        <div class="NewsLetter">
          <p>
            <strong>NewsLetter</strong>
          </p>
          <ul>
            <li>
              <a href="#">Sign up for the CURAPROX Newsletter.</a>
            </li>
          </ul>
          <button>Newsletter Registration</button>
        </div>
        <div class="account">
          <p>
            <strong>Your Account</strong>
          </p>
          <ul>
            <li>
              <a href="#">Personal info</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Credit slips</a>
            </li>
            <li>
              <a href="#">Addresses</a>
            </li>
            <li>
              <a href="#">Vouchers</a>
            </li>
            <li>
              <a href="#">Register Product</a>
            </li>
          </ul>
        </div>

        <div class="help">
          <p>
            <strong>Help</strong>
          </p>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Terms and conditions of shipping and delivery</a>
            </li>
          </ul>
        </div>

        <div class="about">
          <p>
            <strong>About CURAPROX</strong>
          </p>
          <ul>
            <li>
              <a href="#">Other countries</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </div>-->
      <div class="footer-af">
        <div class="footer-after">
          <div class="footer-after-inner">
            <div class="footer-after-inner-text">
              <!-- <p>
                <a href="#">GTB of the Online Shop</a> |
                <a href="#">Legal Notice</a> |
                <a href="#">Privacy Notice</a>
              </p>-->
              <p>© Curaprox.PK - All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #f0f0f0;
}

footer .footer-inner {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1200px;
  text-align: left;
  color: #002440;
  transition: all 500ms ease;
  line-height: 1.5;
}

footer .footer-inner div {
  padding: 10px;
  margin: 20px;
}

footer .footer-inner ul {
  list-style-type: none;
  padding: 0;
}

footer .footer-inner li {
  padding-left: 0;
}

footer .footer-inner li a {
  text-decoration: none;
  color: black;
}

footer .footer-inner li a:hover {
  text-decoration: underline;
}

.footer-af {
  background-color: #002440;
  color: white;
}

.footer-after {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

.footer-after .footer-after-inner {
  display: flex;
  flex-direction: column;

  background-color: #002440;
  text-align: left;
}

.footer-after .footer-after-inner ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  color: white;
}

.footer-after .footer-after-inner a {
  color: white;
}
</style>