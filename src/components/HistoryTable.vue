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
      <tr v-for="(trnc, indx) in transacts()" :key="trnc.id">
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
  <br />
  <div class="d-flex flex-row justify-content-sm-center">
    <button
      v-if="this.page >= 2"
      class="btn btn-secondary me-3"
      @click="page = page - 1"
    >
      Prev
    </button>
    <div class="btn btn-success me-3">
      {{ this.page }}
    </div>
    <button
      v-if="hasNextPage"
      class="btn btn-secondary"
      @click="page = page + 1"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "HistoryTable",
  data() {
    return {
      page: 1,
      hasNextPage: true,
    };
  },
  props: {
    transactions: {
      required: true,
      type: Array,
    },
  },
  created() {},
  methods: {
    transacts() {
      const start = (this.page - 1) * 7;
      const end = this.page * 7;
      this.hasNextPage = this.transactions.length > end;
      return this.transactions.slice(start, end);
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
