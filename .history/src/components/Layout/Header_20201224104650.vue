<template>
  <div>
    <header>
      <div class="social-top">
        <div class="social-top-inner">
          <p style="margin:none">
            <img src="../../assets/img/flag-swiss-16X16.png" alt="Swiss" />
            Swiss premium oral care / Free delivery for all orders!
          </p>
          <p>
            <a href="#">Sign In</a>
            <a href="#">Pakistan</a>
          </p>
        </div>
      </div>
      <div class="navigation">
        <div class="navigation-inner">
          <a style="margin: auto 0" href="/">
            <img src="../../assets/img/logo.jpg" alt="logo" />
          </a>
          <nav>
            <ul>
              <li>
                <router-link class="font-futura-semi-bold" to="/Toothbrush"
                  >TOOTHBRUSHES</router-link
                >
              </li>
              <li>
                <router-link class="font-futura-semi-bold" to="/BLACK-IS-WHITE"
                  >TOOTHPASTE</router-link
                >
              </li>
              <li>
                <router-link
                  class="font-futura-semi-bold"
                  to="/InterdentalBrush"
                  >INTERDENTAL</router-link
                >
              </li>
              <li>
                <router-link class="font-futura-semi-bold" to="/MouthwashPerio"
                  >MOUTHWASH</router-link
                >
              </li>
              <li>
                <router-link
                  class="font-futura-semi-bold"
                  style="background-color:#0167b1; color: white; padding:6px; border-radius: 15%"
                  to="/shop"
                  >SHOP</router-link
                >
              </li>
            </ul>
            <ul>
              <li>
                <div class="cart">
                  <a href="blog">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="25"
                      src="https://curaprox.ch/themes/classic-rocket/assets/img/tooth.svg"
                    >
                      <path
                        d="M6.491 24c1.222 0 1.466-.853 1.466-4.812 0-2.934 1.466-5.084 3.526-5.118 2.059.034 3.525 2.15 3.525 5.118 0 3.959.28 4.812 1.466 4.812 1.431 0 2.373-3.788 2.373-9.453 0-1.74 2.653-5.596 2.653-8.292C21.5 3.525 19.79 1 16.23 1c-3.56 0-4.747 1.98-4.747 1.98S10.33 1 6.77 1C3.21 1 1.5 3.525 1.5 6.255c0 2.696 2.653 6.552 2.653 8.292 0 1.707-.07 9.453 2.338 9.453z"
                        stroke-width="2"
                        fill="none"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </a>

                  <div class="showOrder">
                    <a href="/#/cart">
                      <p style="padding-left:8px">{{ productsCounts }}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="25"
                        src="/themes/classic-rocket/assets/img/basket.svg"
                      >
                        <g
                          transform="translate(0 1)"
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            x="1"
                            y="5"
                            width="19"
                            height="18"
                            rx="2"
                          ></rect>
                          <path
                            d="M15 4c0-2.21-2.015-4-4.5-4S6 1.79 6 4"
                          ></path>
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
svg {
  stroke: white;
  margin-right: 20px;
}

svg:hover {
  stroke: #0167b1 !important;
}

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

a {
  color: white;
  text-decoration: none;
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

header .navigation:hover svg {
  stroke: black;
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
  margin: auto 0;
  padding-right: 1.3rem;
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
