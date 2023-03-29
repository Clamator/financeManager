<template>
  <div class="totalMoney"></div>

  <div class="card" style="width: 18rem; background: #5fd59a; color: white">
    <div class="card-body">
      <h5 class="card-title">My wallet</h5>
      <p class="card-text">
        You have {{ this.$store.state.userData.bill }} money in your wallet
      </p>
      <div
        v-if="this.$store.state.userData.bill === 0"
        class="info-null-balance"
      >
        <span
          >If you want to record money wasting, add income or current bill
          state</span
        >
      </div>
      <button
        type="button"
        style="width: 10rem; text-align: center"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#refillBackdrop"
        @click="isRefillPopupOpen = true"
      >
        Refill
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalMoney",
  data() {
    return {
      isRefillPopupOpen: false,
    };
  },
};
</script>

<style scoped></style>
