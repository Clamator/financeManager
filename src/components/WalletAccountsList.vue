<template>
  <ul
    class="collapse show nav flex-column ms-1"
    id="submenu1"
    data-bs-parent="#menu"
  >
    <li class="w-100">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addAccBackdrop"
        @click="isAddAccPopupOpen = true"
      >
        Add account
      </button>
    </li>
    <li class="w-100" v-for="acc in allAccounts" :key="acc">
      <button type="button" class="btn btn-link">
        {{ acc.name }} / {{ acc.money }} {{ acc.currency }}
      </button>
    </li>
  </ul>
</template>

<script>
import store from "@/store";
export default {
  name: "WalletAccounts",
  data() {
    return {
      isAddAccPopupOpen: false,
    };
  },
  computed: {
    allAccounts() {
      if (store.state.accounts === null) return;
      return store.getters.allAccounts;
    },
  },
};
</script>

<style scoped></style>
