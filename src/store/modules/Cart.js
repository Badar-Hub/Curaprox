const state = {
  products: [],
  namen: ["Badar"],
};

const getters = {
  getAllProducts: (state) => state.products,
  // productsCount: (state) => state.products,
  productsCounts: (state) =>
    state.products.reduce((prev, cur) => (prev += cur.cartQty), 0),
  getTotalCost: (state) =>
    state.products.reduce(
      (pV, cV) => pV + parseFloat(cV.price * (cV.cartQty ? cV.cartQty : 1)),
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
      prod.cartQty += product.cartQty;
      prod.total = prod.qty * prod.price;
      console.log(
        "test",
        state.products.find((p) => p.id == product.id)
      );
    } else {
      // product.total = product.price;
      console.log(product);
      state.products.push({ ...product });
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
