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
        data-bs-target="#staticBackdrop"
      >
        Add account
      </button>
    </li>
    <li class="w-100" v-for="acc in accounts" :key="acc">
      <button type="button" class="btn btn-link">
        {{ acc.name }} / {{ acc.money }} {{ acc.currency }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalletAccounts",
  data() {
    return {};
  },
  computed: mapState({
    accounts: (state) => state.accounts,
    // currency: (state) => state.currency,
  }),
};
</script>

<style scoped></style>
