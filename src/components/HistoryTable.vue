<template>
  <table id="main-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Sum</th>
        <th>Date</th>
        <th>Description</th>
        <th>Type</th>
        <th>Details</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(trnc, indx) in transactions" :key="trnc.id">
        <td class="td">{{ indx + 1 }}</td>
        <td class="td">{{ trnc.moneyAmount }}</td>
        <td class="td">{{ trnc.date }}</td>
        <td class="td">{{ trnc.catName }}</td>
        <td class="td">
          <span class="transaction-sing white-text" :class="[trnc.type]">{{
            trnc.typeText
          }}</span>
        </td>
        <td class="td">
          <div class="breadcrumb-wrap">
            <button
              class="breadcrumb history-button btn-small"
              @click="this.$router.push('/detail/' + trnc.id)"
            >
              Open
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HistoryTable",
  props: {
    transactions: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
@import "@/assets/index.css";
.transaction-sing {
  padding: 8px;
  border-radius: 5px;
}
</style>
