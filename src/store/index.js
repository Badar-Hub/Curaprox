import Vue from "vue";
import Vuex from "vuex";
import Cart from "./modules/Cart";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: [Cart],
});

export default store;
