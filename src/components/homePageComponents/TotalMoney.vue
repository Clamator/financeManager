<template>
  <div class="totalMoney"></div>

  <div class="card" style="width: 18rem; background: #5fd59a; color: white">
    <div class="card-body">
      <h5 class="card-title">My wallet</h5>
      <p class="card-text">
        You have {{ this.$store.state.userData.bill }} money in your wallet
      </p>
      <refill-withdraw-buttons></refill-withdraw-buttons>
      <div
        v-if="this.$store.state.userData.bill === 0"
        class="info-null-balance"
      >
        <span
          >If you want to record money wasting, add income or current bill
          state</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import refillWithdrawButtons from "@/components/RefillWithdrawButtons";
export default {
  name: "TotalMoney",
  components: {
    refillWithdrawButtons,
  },
  data() {
    return {
      isRefillPopupOpen: false,
    };
  },
};
</script>

<style scoped></style>
