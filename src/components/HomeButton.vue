<template>
  <router-link to="/" class="nav-link align-middle px-0">
    <i class="fs-4 bi-house"></i>

    <div class="d-flex flex-row">
      <div class="icon-general me-2">
        <img
          src="https://icon-library.com/images/home-icon-white-png/home-icon-white-png-11.jpg"
        />
      </div>
      <span class="ms-1 d-none d-sm-inline my-text">Home</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HomeButton",
};
</script>

<style scoped>
.my-text {
  color: white;
}
</style>
