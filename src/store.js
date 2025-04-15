import axios from "axios";
import { createStore } from "vuex";
const PRODUCTS_API = import.meta.env.PRODUCTS_API_URL;

const store = createStore({
  state() {
    return {
      products: [],
      product: {},
    };
  },

  mutations: {
    GET_PRODUCTS(state, data) {
      state.products = data;
      state.categories = new Set(
        data.map((item) => {
          return item.category;
        })
      );
    },

    ADD_PRODUCT(state, data) {
      state.products.push(data);
    },

    GET_PRODUCT_ID(state, product) {
      state.product = product;
    },

    SEARCH_PRODUCT(state, data) {
      state.products = data;
    },
  },
  actions: {
    getAllProducts({ commit }) {
      axios
        .get(PRODUCTS_API)
        .then((res) => {
          commit("GET_PRODUCTS", res.data);
        })
        .catch((err) => console.log(err));
    },

    addNewProduct({ commit }, data) {
      axios
        .post(PRODUCTS_API, data)
        .then(() => {
          commit("ADD_PRODUCT", data);
        })
        .catch((err) => console.log(err));
    },

    getProductById({ commit }, id) {
      return axios
        .get(`${PRODUCTS_API}/${id}`)
        .then((res) => {
          commit("GET_PRODUCT_ID", res.data);
          return res.data;
        })
        .catch((err) => console.log(err));
    },

    editProduct(_, data) {
      return axios
        .put(`${PRODUCTS_API}/${this.state.product.id}`, data)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    },

    deleteProduct(_, id) {
      return axios
        .delete(`${PRODUCTS_API}/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    },

    searchProduct({ commit }, term) {
      return axios
        .get(`${PRODUCTS_API}?q=${term}`)
        .then((res) => {
          commit("SEARCH_PRODUCT", res.data);
          return res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
  },
});

export default store;
