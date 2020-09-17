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
                <router-link to="/Toothbrush">TOOTHBRUSHES</router-link>
              </li>
              <li>
                <router-link to="/Toothpaste">TOOTHPASTE</router-link>
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
export default {
  name: "Header2",
};
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
.sub-bar {
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
</style>