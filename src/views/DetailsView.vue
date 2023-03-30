<template>
  <div>
    <div>
      <div class="breadcrumb-wrap justify-content-start">
        <router-link to="/history" class="breadcrumb history-button"
          >History
        </router-link>
        <strong> > &emsp; </strong>
        <span
          class="type"
          :class="{
            'btn-success': this.trnsType === 'refill',
            'btn-danger': this.trnsType === 'withdraw',
          }"
        >
          {{ transaction ? transaction.type : "" }}
        </span>
      </div>
      <div class="row d-flex flex-wrap">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-body white-text">
              <p>
                Description: {{ transaction ? transaction.description : "" }}
              </p>
              <p>Sum: {{ transaction ? transaction.moneyAmount : "" }}</p>
              <p>
                Category:
                {{
                  transaction
                    ? transaction.category || "it is Refill, has no category"
                    : ""
                }}
              </p>

              <p>Date: {{ transaction ? transaction.date : "" }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "DetailsView",
  data() {
    return {
      transaction: null,
      trnsType: "",
    };
  },
  async mounted() {
    // params.id - path: "/detail/:id",
    const id = this.$route.params.id;
    const transaction = await store.dispatch("getTransactionById", id);
    this.trnsType = await transaction.type;
    const category = await store.dispatch(
      "getCategoryById",
      transaction.categoryId
    );
    this.transaction = {
      ...transaction,
      category: category.catName,
    };
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
.breadcrumb {
  margin-right: 20px;
  margin-bottom: 0;
  margin-left: 15px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-weight: 700;
}
.card-body {
  max-width: 350px;
}
.type {
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  width: 150px;
}
.breadcrumb-wrap {
  margin-bottom: 50px;
}
</style>
