const state = {
  products: [],
};

const getters = {
  getAllProducts: (state) => state.products,
  getTotalCost: (state) => state.products.reduce((pV, cV) => (pV += cV)),
};

const actions = {
  async addProduct({ commit }, product) {
    commit("addProduct", product);
    console.log(product);
    console.log(state.products);
  },
};

const mutations = {
  addProduct: (state, product) => state.products.push(product),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
