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
                <router-link to="/TOOTHBRUSHES">TOOTHBRUSHES</router-link>
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
  padding: 0 !important;
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
</style>