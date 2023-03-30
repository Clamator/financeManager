<template>
  <li>
    <router-link to="/categories" class="nav-link px-0 align-middle">
      <i class="fs-4 bi-people"></i>
      <div class="d-flex flex-row">
        <div class="icon-general me-2">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/list-circle-blue-512.png"
          />
        </div>
        <span class="ms-1 d-none d-sm-inline my-text">Categories</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "CategoriesArea",
  components: {},
};
</script>

<style scoped>
.my-text {
  color: white;
}
</style>
