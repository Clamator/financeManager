<template>
  <li>
    <router-link to="/history" class="nav-link px-0 align-middle">
      <i class="fs-4 bi-people"></i>
      <div class="d-flex flex-row">
        <div class="icon-general me-2">
          <img src="https://cdn-icons-png.flaticon.com/512/3882/3882227.png" />
        </div>
        <span class="ms-1 d-none d-sm-inline my-text">History</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "HistoryArea",
};
</script>

<style scoped>
.my-text {
  color: white;
}
</style>
