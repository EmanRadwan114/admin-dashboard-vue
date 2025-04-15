<template>
  <LoadingScreen v-if="isLoading" />
  <h1 class="text-center text-blue mb-4 h3 fw-semibold">
    {{ isEdit ? "Edit" : "Add" }} New Category
  </h1>
  <form
    class="border-blue p-3 rounded-3"
    method="post"
    @submit.prevent="isEdit ? editCategory() : addCategory()"
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
          placeholder="Product Image Link"
          aria-label="Product Image Link"
          v-model.lazy.trim="formValues.thumbnail"
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
import LoadingScreen from "./LoadingScreen.vue";
import Category from "/public/mixins/mixin.js";

export default {
  name: "CategoryForm",
  components: { LoadingScreen },
  mixins: [Category],

  data() {
    return {
      formValues: {
        title: "",
        thumbnail: "",
      },
      submitted: false,
      isLoading: false,
    };
  },

  computed: {
    isEdit() {
      return this.$route.fullPath.includes("edit");
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    resetForm() {
      this.formValues.title = "";
      this.formValues.thumbnail = "";
    },

    async addCategory() {
      try {
        this.isLoading = true;
        await this.addNewCategory(this.formValues);
        this.resetForm();
        this.submitted = true;
        this.$emit("refresh");
        this.isLoading = false;
      } catch (err) {
        console.log(`error in adding category`, err);
      }
    },

    async editCategory() {
      try {
        this.isLoading = true;
        await this.updateCategory(this.category.id, this.formValues);
        this.submitted = true;
        this.$router.push(`/categories`);
        this.isLoading = false;
      } catch (err) {
        console.log(`cannot update category`, err);
      }
    },

    async showCategory() {
      this.isLoading = true;
      await this.getCategoryById(this.id);
      this.formValues.title = this.category.title;
      this.formValues.thumbnail = this.category.thumbnail;
      this.isLoading = false;
    },
  },

  async created() {
    if (this.isEdit) {
      await this.showCategory();
    } else {
      this.resetForm();
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.fullPath.includes("edit")) {
          this.showCategory();
        } else {
          this.resetForm();
        }
      },
    },
  },
};
</script>

<style scoped></style>
