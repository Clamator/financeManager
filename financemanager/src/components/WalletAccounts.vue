<template>
  <ul
    class="collapse show nav flex-column ms-1"
    id="submenu1"
    data-bs-parent="#menu"
  >
    <li class="w-100">
      <button type="button" class="btn btn-info mx-3">Add account</button>
    </li>
    <li class="w-100">
      <a href="#" class="nav-link px-0">
        <span class="d-none d-sm-inline">Sberbank</span> 1
      </a>
    </li>
    <li>
      <a href="#" class="nav-link px-0">
        <span class="d-none d-sm-inline">Cash</span> 2
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WalletAccounts",
};
</script>

<style scoped></style>
