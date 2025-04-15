<template>
  <LoadingScreen v-if="!myCategories.length" />
  <div class="row">
    <div
      class="col-md-6 col-lg-4"
      v-for="category in myCategories"
      :key="category.id"
    >
      <div class="card pb-1 mb-3 m-auto shadow-sm border-0">
        <img
          :src="category.thumbnail ? category.thumbnail : '/logo.png'"
          class="card-img-top w-100"
          style="height: 200px"
          :alt="category?.title"
        />
        <div class="card-body p-3 row">
          <div class="col-md-8 col-lg-7">
            <h2 class="card-title h6 text-blue fw-semibold text-capitalize">
              {{ category?.title }}
            </h2>
          </div>
          <div class="col-md-4 col-lg-5 text-end">
            <span class="me-2">
              <i
                class="fa-solid fa-pen-to-square text-secondary p-1"
                @click="editCategory(category.id)"
              ></i>
            </span>
            <span>
              <i
                class="fa-solid fa-trash text-danger p-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showModal(category.id)"
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

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
            @click="deleteCateg()"
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
</template>

<script>
import LoadingScreen from "./LoadingScreen.vue";
import Categories from "/public/mixins/mixin.js";

export default {
  name: "CategoriesComp",
  components: { LoadingScreen },
  mixins: [Categories],
  props: ["searchedCategories", "isSearching"],
  data() {
    return {};
  },

  computed: {
    myCategories() {
      return this.isSearching ? this.searchedCategories : this.categories;
    },
  },

  methods: {
    editCategory(id) {
      this.$router.push(`/categories/edit-category/${id}`);
      this.$emit("refresh");
    },

    showModal(id) {
      this.getCategoryById(id);
    },

    async deleteCateg() {
      await this.deleteCategory(this.category.id);
      this.$emit("refresh");
      this.getAllCategories();
    },
  },

  created() {
    this.getAllCategories();
  },
};
</script>

<style scoped>
.card {
  transition: transform 500ms;
}

.card:hover {
  transform: scale(1.05);
}

i {
  cursor: pointer;
}
</style>
