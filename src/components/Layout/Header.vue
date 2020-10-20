<template>
  <div>
    <header>
      <div class="social-top">
        <div class="social-top-inner">
          <p>
            <img src="../../assets/img/flag-swiss-16X16.png" alt="Swiss" /> Swiss premium
            oral care / Free delivery for all orders!
          </p>
          <p>
            <a href="#">Sign In</a>
            <a href="#">Pakistan</a>
          </p>
        </div>
      </div>
      <div class="navigation">
        <div class="navigation-inner">
          <a href="/">
            <img src="../../assets/img/logo.jpg" alt="logo" />
          </a>
          <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </div>-->
          <nav>
            <ul>
              <li>
                <router-link to="/Toothbrush">TOOTHBRUSHES</router-link>
              </li>
              <li>
                <router-link to="/BLACK-IS-WHITE">TOOTHPASTE</router-link>
              </li>
              <li>
                <router-link to="/Interdental">INTERDENTAL</router-link>
              </li>
              <li>
                <router-link to="/Mouthwash">MOUTHWASH</router-link>
              </li>
              <li>
                <router-link to="/shop">SHOP</router-link>
              </li>
            </ul>
            <ul>
              <li>
                <div class="cart">
                  <a href="blog">
                    <img style="padding-right:8px;" src="@/assets/img/blog.svg" />
                  </a>

                  <div class="showOrder">
                    <a href="/#/cart">
                      <p style="padding-left:8px">{{productsCounts}}</p>
                      <img src="@/assets/img/bag.svg" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["productsCounts"]),
};
</script>

<style scoped>
.router-link-active {
  color: #0167b1;
}

header .social-top {
  background-color: #414141;
}

header .social-top-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

header .social-top p {
  color: white;
}

header .social-top a {
  color: white;
  text-decoration: none;
  padding-right: 10px;
}

header .social-top-inner img {
  width: 16px;
  height: 16px;
  margin-bottom: -3px;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fcb6b6;
  padding: 0 !important;
}

header .navigation {
  background-color: #fcb6b6;
}

header .navigation-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  max-width: 1200px;
  margin: auto;
}

header .navigation-inner a {
  font-family: futura-pt, sans-serif;
  font-size: 14px;
  color: white;
}

nav {
  display: flex;
}

nav img {
  max-width: 25px;
  height: 25px !important;
  cursor: pointer;
}

header img {
  width: 180px;
}

header .navigation:hover {
  background-color: white;
  color: black;
}

header .navigation:hover a {
  color: black;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
}

nav ul li {
  padding-left: 15px;
}

nav ul li a {
  text-decoration: none;
}

nav ul li a:hover {
  color: pink;
}
.cart {
  display: flex;
  flex-wrap: wrap;
}

.cart p {
  position: absolute;
  /* bottom: 700px; */
  top: 93px;
}
</style>