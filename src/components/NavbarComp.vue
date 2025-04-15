<template>
  <header>
    <nav class="navbar bg-white shadow-sm fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand text-blue w-25" to="/">
          <img src="../assets/logo.png" alt="butterfly logo" class="logo" />{{
            siteName
          }}</router-link
        >
        <div
          class="row justify-content-between align-items-center d-none d-xl-flex w-75"
        >
          <div class="col-8">
            <ul class="navbar-nav flex-row gap-4 justify-content-center">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :class="$route.fullPath == '/' ? 'active' : ''"
                  active-class="active"
                  to="/products"
                  >Products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/categories"
                  >Categories</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/add-product"
                  >Add Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/add-category"
                  >Add Category</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-4">
            <form
              method="get"
              class="d-flex"
              role="search"
              @input="
                $route.fullPath.includes('categories')
                  ? searchCateg()
                  : searchProduct()
              "
              @submit.prevent="
                $route.fullPath.includes('categories')
                  ? searchCateg()
                  : searchProduct()
              "
              v-if="
                !(
                  $route.fullPath.includes('add') ||
                  $route.fullPath.includes('edit')
                )
              "
            >
              <input
                class="form-control form-control-sm me-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="search.term"
              />
              <button class="btn btn-sm btn-outline-blue" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <button
          class="navbar-toggler d-xl-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end d-xl-none"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <router-link class="navbar-brand text-blue" to="/">
                <img
                  src="../assets/logo.png"
                  alt="butterfly logo"
                  class="logo"
                />{{ siteName }}</router-link
              >
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :class="$route.fullPath == '/' ? 'active' : ''"
                  active-class="active"
                  to="/products"
                  >Products</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/categories"
                  >Categories</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/add-product"
                  >Add Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  active-class="active"
                  to="/add-category"
                  >Add Category</router-link
                >
              </li>
            </ul>
            <form
              method="get"
              class="d-flex w-100 mt-4"
              role="search"
              @input="
                $route.fullPath.includes('categories')
                  ? searchCateg()
                  : searchProduct()
              "
              @submit.prevent="
                $route.fullPath.includes('categories')
                  ? searchCateg()
                  : searchProduct()
              "
              v-if="
                !(
                  $route.fullPath.includes('add') ||
                  $route.fullPath.includes('edit')
                )
              "
            >
              <input
                class="form-control form-control-sm py-1 me-2 d-inline-block w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="search.term"
              />
              <button
                class="btn btn-sm btn-outline-blue py-1 d-inline-block"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Mixin from "/public/mixins/mixin.js";
export default {
  name: "NavBar",
  mixins: [Mixin],
  data() {
    return {
      search: { term: "" },
      searchedCategories: [],
      isSearching: false,
    };
  },
  methods: {
    searchProduct() {
      this.$store.dispatch("searchProduct", this.search.term);
    },
    async searchCateg() {
      try {
        this.searchedCategories = await this.searchCategory(this.search.term);
        if (this.search.term) this.isSearching = true;
        else this.isSearching = false;
        this.$emit("searchedData", this.searchedCategories);
        this.$emit("isSearching", this.isSearching);
        this.$emit("searchTerm", this.search.term);
      } catch (err) {
        console.log(`error in searching category`, err);
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 50px;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 var(--blueTextColor);
}
</style>
