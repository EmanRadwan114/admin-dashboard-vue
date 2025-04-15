<template>
  <Navbar
    v-if="!$route.meta.hideNavbar"
    @searchedData="getSearchedData"
    @isSearching="handleSearch"
  ></Navbar>
  <div class="container box">
    <router-view
      :searchedCategories="categories"
      :isSearching="isSearching"
      @refresh="refreshSearch"
    ></router-view>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: { Navbar },
  setup() {
    let categories = ref({});
    let isSearching = ref(false);

    const getSearchedData = (data) => {
      categories.value = data;
    };

    const handleSearch = (data) => {
      isSearching.value = data;
    };

    const refreshSearch = () => {
      isSearching.value = false;
    };

    return {
      getSearchedData,
      categories,
      handleSearch,
      isSearching,
      refreshSearch,
    };
  },
};
</script>

<style>
:root {
  --primaryBgColor: rgb(163, 56, 110);
  --secondaryBgColor: white;
  --tertiaryBgColor: black;
  --blueBgColor: #8192c0;
  --blueHoverColor: #576996;
  --primaryHoverColor: rgb(123, 23, 73);
  --primaryTextColor: rgb(163, 56, 110);
  --secondaryTextColor: white;
  --tertiaryTextColor: black;
  --blueTextColor: #8192c0;
}

body {
  font-family: cursive !important;
  font-size: 18px !important;
  position: relative !important;
}

.btn-default {
  background-color: var(--primaryBgColor) !important;
  color: var(--secondaryTextColor) !important;
  transition: background-color 500ms, color 500ms !important;
}

.btn-default:hover {
  background-color: var(--primaryHoverColor) !important;
  color: var(--secondaryTextColor) !important;
}

.btn-blue {
  background-color: var(--blueBgColor) !important;
  color: var(--secondaryTextColor) !important;
  transition: background-color 500ms, color 500ms !important;
}

.btn-blue:hover {
  background-color: var(--blueHoverColor) !important;
  color: var(--secondaryTextColor) !important;
}

.btn-outline-default {
  background-color: var(--secondaryBgColor) !important;
  color: var(--primaryTextColor) !important;
  border: 2px solid var(--primaryTextColor) !important;
  transition: background-color 500ms, color 500ms, border 500ms !important;
}

.btn-outline-default:hover {
  background-color: var(--primaryBgColor) !important;
  color: var(--secondaryTextColor) !important;
}

.btn-outline-blue {
  background-color: var(--secondaryBgColor) !important;
  color: var(--blueTextColor) !important;
  border: 2px solid var(--blueTextColor) !important;
  transition: background-color 500ms, color 500ms, border 500ms !important;
}

.btn-outline-blue:hover {
  background-color: var(--blueBgColor) !important;
  color: var(--secondaryTextColor) !important;
}

.nav-link {
  color: var(--tertiaryTextColor) !important;
  position: relative;
}

.nav-link.active {
  color: var(--primaryTextColor) !important;
}

.nav-link::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 0%;
  height: 4px;
  border-radius: 10px;
  background-color: var(--blueBgColor);
  transition: width 500ms;
}
.nav-link:hover:before {
  width: 100%;
}

.text-default {
  color: var(--primaryTextColor) !important;
}

.text-blue {
  color: var(--blueTextColor) !important;
}

.border-blue {
  border: 2px solid var(--blueTextColor) !important;
}

.border-default {
  border: 2px solid var(--primaryTextColor) !important;
}

.form-control:focus {
  box-shadow: 0 0 5px 2px var(--blueTextColor) !important;
  border: none;
}

@media screen and (max-width: 1200px) {
  .nav-item {
    width: fit-content !important;
    margin: auto !important;
  }
}

.container.box {
  margin-top: 100px;
}

h1 {
  text-shadow: 0px 5px 7px var(--blueTextColor);
}
</style>
