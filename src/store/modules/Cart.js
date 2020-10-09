const state = {
  products: [],
  namen: ["Badar"],
};

const getters = {
  getAllProducts: (state) => state.products,
  getTotalCost: (state) =>
    state.products.reduce(
      (pV, cV) => pV + parseFloat(cV.price * (cV.qty ? cV.qty : 1)),
      0
    ),
  getAllNames: (state) => state.namen,
};

const actions = {
  async updateCart({ commit }, product) {
    commit("updateCart", product);
    console.log(product);
    console.log(state.products);
  },
  async qtyPlus({ commit }, prod) {
    commit("qtyPlusM", prod);
  },
  async qtyMinus({ commit }, prod) {
    commit("qtyMinusM", prod);
  },
  async names({ commit }, name) {
    commit("namenn", name);
  },
};

const mutations = {
  updateCart: (state, product) => {
    const prod = state.products.find((p) => p.id == product.id);
    if (prod) {
      prod.qty+=product.qty;
      prod.total = prod.qty * prod.price;
      console.log(
        "test",
        state.products.find((p) => p.id == product.id)
      );
    } else {
      // product.total = product.price;
      console.log(product);
      state.products.push({...product});
    }
  },


  namenn: (state, name) => {
    state.namen = name;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};