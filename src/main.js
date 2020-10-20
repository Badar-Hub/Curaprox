import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));

// import style
import "swiper/swiper-bundle.min.css";
Vue.config.productionTip = false;

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.component("blog-post", {
  // camelCase in JavaScript
  props: ["postTitle"],
  template: "<h3>{{ postTitle }}</h3>",
  inheritAttrs: false,
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
