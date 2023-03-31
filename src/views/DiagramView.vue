<template>
  <div v-if="this.transactions.length || this.categories.length">
    <div class="h1">Your money wasting for all periods</div>
    <div class="h2">separated by categories</div>
    <div class="history-chart my-4">
      <Pie :data="pieDataWastes" :options="pieOptions" />
    </div>
    <div class="h1">Info about your incomes</div>
    <div class="h2">separated by source</div>
    <div class="history-chart my-4">
      <Pie :data="pieDataIncome" :options="pieOptions" />
    </div>
  </div>
  <div class="h1" v-if="!this.transactions.length">
    <p>Here will be displayed diagrams about your incomes and withdraws</p>
    <refill-withdraw-buttons></refill-withdraw-buttons>
  </div>
</template>

<script>
import store from "@/store";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import refillWithdrawButtons from "@/components/RefillWithdrawButtons";
ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  name: "DiagramView",
  components: {
    Pie,
    refillWithdrawButtons,
  },
  data() {
    return {
      transactions: [],
      categories: [],
      pieDataWastes: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      pieDataIncome: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
    };
  },
  async mounted() {
    const transactions = (await store.dispatch("getTransactions")) || {};
    this.categories = (await store.dispatch("getAllCategories")) || {};
    this.transactions = transactions.map((transaction) => {
      return {
        ...transaction,
        catName: transaction.description,
        type: transaction.type === "refill" ? "bg-success" : "bg-danger",
        typeText: transaction.type === "refill" ? "Income" : "Withdraw",
      };
    });
    this.createPieChartWastes();
    this.createPieChartIncomes();
  },
  methods: {
    createPieChartWastes() {
      if (this.categories && this.transactions && this.categories.length > 0) {
        this.pieDataWastes = {
          labels: this.categories.map((c) => c.catName),
          datasets: [
            {
              backgroundColor: this.generateRandomColorsArray(
                this.categories.length
              ),
              data: this.categories.map((c) => {
                return this.transactions.reduce((total, trns) => {
                  if (
                    trns.categoryId === c.id &&
                    trns.typeText === "Withdraw"
                  ) {
                    total += +trns.moneyAmount;
                  }
                  return total;
                }, 0);
              }),
            },
          ],
        };
      }
    },
    createPieChartIncomes() {
      if (this.transactions && this.transactions.length > 0) {
        const dataIncome = this.transactions.filter(
          (trns) => trns.categoryId === ""
        );
        console.log(dataIncome);
        this.pieDataIncome = {
          labels: dataIncome.map((trns) => trns.description),
          datasets: [
            {
              backgroundColor: this.generateRandomColorsArray(
                dataIncome.length
              ),
              data: dataIncome.map((trns) => trns.moneyAmount),
            },
          ],
        };
      }
    },
    generateRandomColorsArray(length) {
      const colors = [];
      for (let i = 0; i < length; i++) {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(color);
      }

      return colors;
    },
  },
};
</script>

<style scoped></style>
