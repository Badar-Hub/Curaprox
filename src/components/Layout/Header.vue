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
          <img src="../../assets/img/logo.jpg" alt="logo" />
          <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </div>-->
          <nav>
            <ul>
              <li>
                <router-link to="/about">TOOTHBRUSHES</router-link>
              </li>
              <li>
                <router-link to="/sonic-toothbrushes">SONIC TOOTHBRUSHES</router-link>
              </li>
              <li>
                <router-link to="/interdental">INTERDENTAL</router-link>
              </li>
              <li>
                <router-link to="/baby">BABY</router-link>
              </li>
              <li>
                <router-link to="/more">MORE</router-link>
              </li>
              <li>
                <router-link to="/shop">SHOP</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="slider">
      <div class="slider-inner">
        <div class="text">
          <h2>PINK LIMITED EDITION</h2>
          <h3>THINK PINK!</h3>
          <button>SHOP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
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
  background-color: #ef7fb1;
}

header .navigation {
  background-color: #ef7fb1;
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

header img {
  width: 180px;
  height: 35px;
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

.slider {
  background-color: #ef7fb1;
}

.slider-inner {
  display: flex;
  position: relative;
  background-image: url(../../assets/img/header.png);
  background-size: cover;
  width: 100%;
  height: 70vh;
  max-width: 1200px;
  margin: auto;
}

.slider-inner .text {
  top: 25%;
  position: absolute;
}

.slider-inner .text h2 {
  font-size: 20px;
  margin: 20px;
  padding: 2px;
  text-align: left;
  color: white;
  font-size: 23px;
}
.slider-inner .text h3 {
  font-size: 50px;
  margin: 20px;
  text-align: left;
  color: white;
  font-size: 80px;
}

.slider-inner button {
  margin-top: 40px;
  margin-left: 20px;
  float: left;
  color: white;
  padding: 15px 50px;
  border-radius: 15%;
  background-color: #ef7fb1;
}

.slider-inner button:hover {
  border: rgb(37, 29, 29) 1px solid;
}
</style>