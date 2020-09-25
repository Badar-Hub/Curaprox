<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
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

.btn-secondary {
  padding: 0;
  margin: auto 10px;
  font-size: 18px;
  background-color: white;
  color: #0167b1;
  border: #0167b1 1px solid;
  padding: 0 7px;
  border-radius: 10%;
}

.btn-secondary:hover {
  background-color: #0167b1;
  color: white;
}

.bg-danger:hover {
  background-color: #b32d28;
}

.bg-primary {
  background-color: #0167b1;
}
</style>
