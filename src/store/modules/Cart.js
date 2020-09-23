const state = {
  products: [],
};

const getters = {
  getAllProducts: (state) => state.products,
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
