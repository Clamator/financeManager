<template>
  <li>
    <router-link to="/limits" class="nav-link px-0 align-middle">
      <i class="fs-4 bi-people"></i>
      <div class="d-flex flex-row">
        <div class="icon-general me-2">
          <img
            src="https://icon-library.com/images/warning-icon/warning-icon-0.jpg"
          />
        </div>
        <span class="ms-1 d-none d-sm-inline my-text">Limits</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "LimitsArea",
};
</script>

<style scoped>
.my-text {
  color: white;
}
</style>
