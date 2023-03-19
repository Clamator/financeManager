<template>
  <li>
    <a
      href="#submenu2"
      data-bs-toggle="collapse"
      class="nav-link px-0 align-middle"
    >
      <i class="fs-4 bi-bootstrap"></i>
      <div class="d-flex flex-row">
        <div class="icon-general me-2">
          <img src="https://cdn-icons-png.flaticon.com/512/6404/6404254.png" />
        </div>
        <span class="ms-1 d-none d-sm-inline">Options</span>
      </div>
    </a>
    <ul
      class="collapse nav flex-column ms-1"
      id="submenu2"
      data-bs-parent="#menu"
    >
      <li class="w-100">
        <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Goals</span> 1</a
        >
      </li>
      <li>
        <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Limits</span> 2</a
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "OptionsButtons",
};
</script>

<style scoped></style>
