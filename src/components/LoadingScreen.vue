<template>
  <div
    class="loading-screen d-flex justify-content-center align-items-center min-vh-100"
  >
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75) !important;
  z-index: 10000 !important;
}

.loader {
  position: relative;
  width: 100px;
  height: 16px;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 32px 0 #fff;
  left: 0;
  top: 0;
  animation: ballMoveX 2s linear infinite;
}
.loader:after {
  box-shadow: none;
  transform: translateX(64px) scale(1);
  z-index: 2;
  animation: none;
  animation: trfLoader 2s linear infinite;
}

@keyframes trfLoader {
  0%,
  5% {
    transform: translateX(64px) scale(1);
    background: var(--secondaryBgColor);
  }
  10% {
    transform: translateX(64px) scale(1);
    background: var(--blueBgColor);
  }
  40% {
    transform: translateX(32px) scale(1.5);
    background: var(--blueBgColor);
  }
  90%,
  95% {
    transform: translateX(0px) scale(1);
    background: var(--blueBgColor);
  }
  100% {
    transform: translateX(0px) scale(1);
    background: var(--secondaryBgColor);
  }
}
@keyframes ballMoveX {
  0%,
  10% {
    transform: translateX(0);
  }
  90%,
  100% {
    transform: translateX(32px);
  }
}
</style>
