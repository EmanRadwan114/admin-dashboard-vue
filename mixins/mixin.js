import axios from "axios";
const CATEGORIES_API = process.env.VUE_APP_CATEGORIES_API_URL;

export default {
  data() {
    return {
      siteName: "Butterfly",
      categories: [],
      category: {},
    };
  },

  methods: {
    getAllCategories() {
      return axios
        .get(CATEGORIES_API)
        .then((res) => {
          this.categories = res.data;
          return this.categories;
        })
        .catch((err) => {
          console.error("Could not fetch categories", err);
        });
    },
    searchCategory(term) {
      return axios
        .get(`${CATEGORIES_API}?q=${term}`)
        .then((res) => {
          this.categories = res.data;
          return this.categories;
        })
        .catch((err) => {
          console.error("Could not fetch categories", err);
        });
    },
    addNewCategory(data) {
      return axios
        .post(CATEGORIES_API, data)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.error("Could not post category", err);
        });
    },

    getCategoryById(id) {
      return axios
        .get(`${CATEGORIES_API}/${id}`)
        .then((res) => {
          this.category = res.data;
          return this.category;
        })
        .catch((err) => {
          console.error("Could not fetch category by ID", err);
        });
    },

    updateCategory(id, data) {
      return axios
        .put(`${CATEGORIES_API}/${id}`, data)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.error("Could not updated category", err);
        });
    },
    deleteCategory(id) {
      return axios
        .delete(`${CATEGORIES_API}/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.error("Could not delete category", err);
        });
    },
  },
};
