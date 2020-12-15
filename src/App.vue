<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  p {
    font-family: info-light!important;
  }
}

@font-face {
  font-family: futura-light;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_light/curaprox-font-futura_light.otf");
}
@font-face {
  font-family: futura-medium;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_medium/curaprox-font-futurapro_medium.otf");
}
@font-face {
  font-family: futura-bold;
  src: url("./assets/fonts/curaprox/futurapro/futurapro_bold/curaprox-font-futura_bold.otf");
}

@font-face {
  font-family: info-light;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_book.otf");
}
@font-face {
  font-family: info-medium;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_semibold.otf");
}
@font-face {
  font-family: info-bold;
  src: url("./assets/fonts/curaprox/infodisplaypro/curaprox-font-infodisplaypro_bold.otf");
}

.font-futura {
  font-family: 'futura-light' !important;
  font-weight: 300!important;
  letter-spacing: 2px;
  &-semi-medium {
    font-family: 'futura-medium'!important;
    font-weight: 400!important;
    letter-spacing: 2px;
    }
    &-medium {
    font-family: 'futura-medium'!important;
    font-weight: 500!important;
    letter-spacing: 2px;
  }
  &-semi-bold {
    font-family: 'futura-bold'!important;
    font-weight: 600!important;
    letter-spacing: 2px;
  }
  &-bold {
    font-family: 'futura-bold'!important;
    font-weight: 700!important;
    letter-spacing: 2px;
  }
}

.font-info {
  font-family: 'info-light' !important;
  font-weight: 300!important;
  letter-spacing: 2px;
  &-semi-medium {
    font-family: 'info-medium'!important;
    font-weight: 400!important;
    letter-spacing: 2px;
    }
    &-medium {
    font-family: 'info-medium'!important;
    font-weight: 500!important;
    letter-spacing: 2px;
  }
  &-semi-bold {
    font-family: 'info-bold'!important;
    font-weight: 600!important;
    letter-spacing: 2px;
  }
  &-bold {
    font-family: 'info-bold'!important;
    font-weight: 700!important;
    letter-spacing: 2px;
  }
}

.default {
  max-width: 1200px;
  margin: auto;
}

.btn-shop {
  background-color: #0060aa; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  width: 250px;
}

.btn-shop a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
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
  line-height: normal!important;
  font-style: normal;
}

p {
  font-family: ff-info-text-web-pro, sans-serif;
  font-weight: 200;
  font-style: normal;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

#app {
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
