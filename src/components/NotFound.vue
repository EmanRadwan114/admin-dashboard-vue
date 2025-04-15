<template>
  <main
    class="d-flex justify-content-center align-items-center min-vh-100 flex-column"
  >
    <div class="container text-center py-4">
      <img
        src="../assets/logo.png"
        alt="butterfly logo"
        class="w-25 h-25 rounded mb-1"
      />
      <h1 class="mb-4 h4 text-default">Butterfly</h1>
      <div class="alert alert-dark text-center">
        <p class="fw-semibold fs-5">The Page you are requesting is not found</p>
        <p class="fs-1 fw-bolder">404</p>
        <button class="btn btn-default w-100 fw-semibold">Home</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound",
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
