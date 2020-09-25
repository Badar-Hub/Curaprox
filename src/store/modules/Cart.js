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
  async addProduct({ commit }, product) {
    commit("addProduct", product);
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
  addProduct: (state, product) => {
    const prod = state.products.find((p) => p.id == product.id);
    if (prod) {
      prod.qty++;
      prod.total = prod.qty * prod.price;
      console.log(
        "test",
        state.products.find((p) => p.id == product.id)
      );
    } else {
      if (!product.qty) product.qty = 1;
      product.total = product.price;
      state.products.push(product);
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
