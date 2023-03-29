<template>
  <div>
    <div class="page-title d-flex flex-wrap flex-row justify-content-around">
      <h3 class="h1">Planning</h3>
      <h4 class="h1">Now in your wallet: {{ this.userData.bill }}</h4>
    </div>
    <div v-if="this.allCategories.length < 1">No categories yet</div>
    <section class="card p-4">
      <div class="mb-3" v-for="cat in this.categories" :key="cat.id">
        <p class="text-start">
          <strong>{{ cat.catName }}:</strong>
          {{ cat.spend }} из {{ cat.catLimit }}
        </p>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            :class="[cat.progressBapColor]"
            role="progressbar"
            :style="{ width: cat.progressBarPercent + '%' }"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "LimitsView",
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    allCategories() {
      return store.getters.allCategories;
    },
    userData() {
      return store.getters.userData;
    },
  },
  async mounted() {
    store.state.userData =
      (await this.$store.dispatch("getUserDataBase")) || {};

    const transactions = (await store.dispatch("getTransactions")) || {};
    const categories = (await store.dispatch("getAllCategories")) || {};
    // const categories = this.allCategories; // так можно, но хз
    this.categories = categories.map((cat) => {
      const spend = transactions
        .filter((t) => t.categoryId === cat.id)
        .filter((t) => t.type === "withdraw")
        .reduce((total, transaction) => {
          return (total += +transaction.moneyAmount);
        }, 0);
      const percent = (+spend * 100) / +cat.catLimit;
      const progressBarPercent = percent > 100 ? 100 : percent;
      const progressBapColor =
        percent < 60 ? "bg-success" : percent < 80 ? "bg-warning" : "bg-danger";
      return {
        ...cat,
        progressBarPercent,
        progressBapColor,
        spend,
      };
    });
  },
};
</script>

<style scoped></style>
