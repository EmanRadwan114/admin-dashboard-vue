<template>
  <LoadingScreen v-if="!products.length" />
  <LoadingScreen v-if="productId && products.length" />
  <main>
    <section class="table-responsive pt-4">
      <table class="table table-striped">
        <thead class="mb-5">
          <tr>
            <th scope="col" class="text-capitalize text-default">ID</th>
            <th scope="col" class="text-capitalize text-default">Image</th>
            <th scope="col" class="text-capitalize text-default">Title</th>
            <th scope="col" class="text-capitalize text-default">
              Description
            </th>
            <th scope="col" class="text-capitalize text-default">Price</th>
            <th scope="col" class="text-capitalize text-default">Quantity</th>
            <th scope="col" class="text-capitalize text-default">View</th>
            <th scope="col" class="text-capitalize text-default">Edit</th>
            <th scope="col" class="text-capitalize text-default">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>
              <img
                :src="item.thumbnail"
                :alt="item.title"
                class="w-100 thumbnail"
              />
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.description.slice(0, 50) }}...</td>
            <td>{{ item.price }}$</td>
            <td>{{ item.stock }}</td>
            <td>
              <i
                class="fa-solid fa-eye text-blue p-1"
                @click="getProductDetails(item.id)"
              ></i>
            </td>
            <td>
              <i
                class="fa-solid fa-pen-to-square text-secondary p-1"
                @click="editProduct(item.id)"
              ></i>
            </td>
            <td>
              <i
                class="fa-solid fa-trash text-danger p-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showModal(item.id)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p
              class="modal-title fs-6 fw-semibold text-center text-blue"
              id="exampleModalLabel"
            >
              Are you sure you want to delete this?
            </p>
          </div>
          <div class="modal-footer m-auto">
            <button
              type="button"
              class="btn btn-sm btn-danger me-2 px-5"
              @click="deleteProduct()"
              data-bs-dismiss="modal"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-sm btn-blue px-5"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import LoadingScreen from "./LoadingScreen.vue";

export default {
  name: "ProductsComp",
  components: { LoadingScreen },
  setup() {
    const store = useStore();
    const route = useRouter();

    const products = computed(() => store.getters.getAllProducts);
    const productId = ref(0);

    const getProductDetails = (id) => {
      route.push(`/products/${id}`);
    };

    const editProduct = async (id) => {
      try {
        await store.dispatch("getProductById", id);
        productId.value = id;
        route.push(`/edit-product/${id}`);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    const showModal = (id) => {
      productId.value = id;
    };

    const deleteProduct = async () => {
      try {
        await store.dispatch("deleteProduct", productId.value);
        store.dispatch("getAllProducts");
      } catch (err) {
        console.error("Failed to delete product:", err);
      }
    };

    onMounted(() => store.dispatch("getAllProducts"));
    return {
      products,
      editProduct,
      deleteProduct,
      showModal,
      getProductDetails,
      productId,
    };
  },
};
</script>

<style scoped>
td i {
  cursor: pointer;
}

@media screen and (min-width: 1200px) {
  img.thumbnail {
    width: 50% !important;
  }
}
</style>
