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
                <router-link to="/InterdentalBrush">INTERDENTAL</router-link>
              </li>
              <li>
                <router-link to="/MouthwashPerio">MOUTHWASH</router-link>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="25"
                        src="https://curaprox.ch/themes/classic-rocket/assets/img/basket.svg"
                      >
                        <g
                          transform="translate(0 1)"
                          stroke="#000000"
                          stroke-width="2px"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            x="1"
                            y="5"
                            width="19"
                            height="18"
                            rx="2"
                            stroke="#ffffff"
                            fill="none"
                            stroke-width="2px"
                          />
                          <path
                            d="M15 4c0-2.21-2.015-4-4.5-4S6 1.79 6 4"
                            stroke="#ffffff"
                            fill="none"
                            stroke-width="2px"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="sub-bar">
        <hr />
        <div class="sub-bar-inner">
          <ul>
            <slot></slot>
          </ul>
          <span>
            <button>BUY</button>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["productsCount", "productsCounts"]),
};
</script>

<style scoped>
hr {
  margin-top: 0;
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
}

header .navigation {
  background-color: white;
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
  color: black;
}

header img {
  width: 180px;
  height: 35px;
  margin: auto 0;
}

header .navigation:hover a {
  color: black;
}

nav {
  display: flex;
}

nav img {
  max-width: 25px;
  height: auto;
  cursor: pointer;
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
.sub-bar {
  transition: background 250ms ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}

.sub-bar-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.sub-bar-inner ul {
  padding: 0;
  margin: 0;
  margin-top: 6px;
}

.sub-bar-inner a {
  padding-right: 20px;
  text-decoration: none;
  color: black;
  font-size: 23px;
}

.sub-bar-inner button {
  background-color: white;
  color: #0167b1;
  border: #0167b1 1px solid;
  padding: 5px 20px;
  border-radius: 10%;
  font-size: 20px;
}

.sub-bar-inner button:hover {
  border: #007bff 2px solid;
}

.sub-bar-inner a:hover {
  color: #0167b1;
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