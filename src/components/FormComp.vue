<template>
  <LoadingScreen v-if="isLoading" />
  <h1 class="text-center text-blue mb-4 h3 fw-semibold">
    {{ isEdit ? "Edit" : "Add" }} New Product
  </h1>
  <form
    class="border-blue p-3 rounded-3"
    method="post"
    @submit.prevent="isEdit ? editProduct() : addNewProduct()"
  >
    <div class="row g-3 align-items-center mb-3">
      <div class="col-12">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Product Title"
          aria-label="Product Title"
          v-model.lazy.trim="formValues.title"
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Product Description"
          aria-label="Product Description"
          v-model.lazy.trim="formValues.description"
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Product Image Link"
          aria-label="Product Image Link"
          v-model.lazy.trim="formValues.thumbnail"
        />
      </div>
      <div class="col-12 col-md-6">
        <input
          type="number"
          class="form-control form-control-sm"
          placeholder="Product Price"
          aria-label="Product Price"
          v-model.lazy.trim.number="formValues.price"
        />
      </div>
      <div class="col-12 col-md-6">
        <input
          type="number"
          class="form-control form-control-sm"
          placeholder="Product Quantity"
          aria-label="Product Quantity"
          v-model.lazy.trim.number="formValues.stock"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-sm btn-blue w-100">Submit</button>
    <p
      class="text-success text-center mt-2 mb-0 fw-bold"
      :style="submitted ? { display: 'block' } : { display: 'none' }"
    >
      Your data is submitted Successfully
      <i class="fa-solid fa-circle-check"></i>
    </p>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import LoadingScreen from "./LoadingScreen.vue";
import { watch } from "vue";
import { onMounted } from "vue";

export default {
  name: "FormComp",
  components: { LoadingScreen },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    let submitted = ref(false);
    const product = reactive(store.state.product);
    const isLoading = ref(false);

    const isEdit = ref(route.fullPath.includes("edit"));

    const formValues = reactive({
      title: "",
      description: "",
      price: "",
      stock: "",
      thumbnail: "",
    });

    const formReset = () => {
      formValues.title = "";
      formValues.description = "";
      formValues.thumbnail = "";
      formValues.price = "";
      formValues.stock = "";
    };

    const addNewProduct = async () => {
      try {
        isLoading.value = true;
        await store.dispatch("addNewProduct", formValues);
        formReset();
        submitted.value = true;
        isLoading.value = false;
      } catch (err) {
        console.log(`error in posting product`, err);
      }
    };

    const showProductData = () => {
      formValues.title = product.title;
      formValues.description = product.description;
      formValues.thumbnail = product.thumbnail;
      formValues.price = product.price;
      formValues.stock = product.stock;
    };

    const editProduct = async () => {
      try {
        isLoading.value = true;
        await store.dispatch("editProduct", formValues);
        isLoading.value = false;
        router.push(`/products`);
      } catch (err) {
        console.error("Failed to update product:", err);
      }
    };

    // 👉 Run once on mount
    onMounted(() => {
      if (isEdit.value) {
        showProductData();
      } else {
        formReset();
      }
    });

    watch(
      () => route.fullPath,
      (newPath) => {
        isEdit.value = newPath.includes("edit");
        if (isEdit.value) {
          showProductData();
        } else {
          formReset();
        }
      }
    );

    return {
      formValues,
      addNewProduct,
      submitted,
      editProduct,
      isLoading,
      isEdit,
    };
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
