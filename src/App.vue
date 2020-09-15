<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: futura-pt, sans-serif;
  font-weight: 200;
  font-style: normal;
}

p {
  font-family: ff-info-text-web-pro, sans-serif;
  font-weight: 200;
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
