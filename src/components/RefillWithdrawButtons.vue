<template>
  <li class="nav-item my-2">
    <button
      type="button"
      class="btn btn-success me-3"
      data-bs-toggle="modal"
      data-bs-target="#refillBackdrop"
      @click="isRefillPopupOpen = true"
    >
      Refill
    </button>
    <button
      type="button"
      class="btn btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#withdrawBackdrop"
      @click="isWithdrawPopupOpen = true"
    >
      Withdraw
    </button>
  </li>
</template>

<script>
export default {
  name: "RefillWithdrawButtons",
  data() {
    return {
      isWithdrawPopupOpen: false,
      isRefillPopupOpen: false,
    };
  },
};
</script>

<style scoped></style>
