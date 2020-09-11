import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("blog-post", {
  // camelCase in JavaScript
  props: ["postTitle"],
  template: "<h3>{{ postTitle }}</h3>",
  inheritAttrs: false,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
