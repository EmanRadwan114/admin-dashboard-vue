<template>
  <LoadingScreen v-if="!product.title" />
  <div class="card mb-3 border-0 m-auto px-3 py-2 col-lg-9 shadow-lg">
    <div class="row g-0 justify-content-between align-items-center">
      <div class="col-md-4">
        <img
          :src="product.thumbnail ? product.thumbnail : '/logo.png'"
          class="img-fluid rounded-start w-100"
          :alt="product?.title"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title h6 text-blue fw-semibold text-capitalize">
            {{ product?.title }}
          </h2>
          <p class="card-text fs-6">
            {{ product?.description }}
          </p>
          <p
            class="card-text d-flex flex-column flex-md-row gap-2 justify-content-md-between align-items-md-center"
          >
            <span class="fs-6 fw-semibold d-block w-50"
              >In Stock:
              <span class="text-blue">{{ product?.stock }} Items</span></span
            >
            <span class="fs-6 fw-semibold d-block w-50"
              >Price:
              <span class="text-blue">{{ product?.price }} $</span></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import LoadingScreen from "./LoadingScreen.vue";

export default {
  name: "ProductDetails",
  components: { LoadingScreen },
  setup() {
    const store = useStore();
    const route = useRoute();

    const id = ref(route.params.id);

    let product = ref({});

    onMounted(async () => {
      await store.dispatch("getProductById", id.value);
      product.value = store.state.product;
    });

    return { product };
  },
};
</script>

<style scoped></style>
