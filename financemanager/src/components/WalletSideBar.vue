<template>
  <li>
    <a
      href="#submenu1"
      data-bs-toggle="collapse"
      class="nav-link px-0 align-middle"
    >
      <i class="fs-4 bi-speedometer2"></i>
      <div class="d-flex flex-row">
        <div class="icon-general me-2">
          <img src="https://cdn-icons-png.flaticon.com/512/272/272889.png" />
        </div>
        <span class="ms-1 d-none d-sm-inline">Accounts</span>
      </div>
    </a>

    <wallet-accounts></wallet-accounts>
  </li>
</template>

<script>
import WalletAccounts from "@/components/WalletAccounts";
export default {
  name: "WalletSideBar",
  components: {
    WalletAccounts,
  },
};
</script>

<style scoped></style>
