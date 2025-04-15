import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import store from "./store";

// ^--------------routing
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("./components/ProductsComp.vue") },
  {
    path: "/products",
    component: () => import("./components/ProductsComp.vue"),
  }, // lazy loaded },
  {
    path: "/categories",
    component: () => import("./components/CategoriesComp.vue"),
  }, // lazy loaded },
  {
    path: "/add-product",
    component: () => import("./components/FormComp.vue"),
  },
  {
    path: "/edit-product/:id",
    component: () => import("./components/FormComp.vue"),
  },
  {
    path: "/add-category",
    component: () => import("./components//CategoryForm.vue"),
  },
  {
    path: "/edit-category/:id",
    component: () => import("./components//CategoryForm.vue"),
  },
  {
    path: "/products/:id",
    component: () => import("./components/ProductDetails.vue"),
  },
  {
    path: "/:NotFound(.*)*",
    component: () => import("./components/NotFound.vue"),
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
