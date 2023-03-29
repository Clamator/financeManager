<template>
  <div
    v-show="true"
    class="modal fade"
    ref="withdraw"
    id="withdrawBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="true"
    tabindex="-1"
    aria-labelledby="withdrawBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="withdrawBackdropLabel">
            Wasting money...
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              v-model="description"
              placeholder="Reason to waste your money"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="input-group">
            <input
              type="text"
              v-model="moneyAmount"
              class="form-control"
              placeholder="Enter an amount of money"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <select
              v-if="allCategories.length > 0"
              id="categorySelect"
              v-model="chosenCategoryId"
              class="form-select"
              aria-label="categorySelect"
            >
              <option
                v-for="cat in allCategories"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.catName }}
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <p v-if="allCategories.length === 0">
            No categories
            <router-link
              v-if="allCategories.length === 0"
              class="btn btn-primary btn-success"
              to="/categories"
              >Add Category</router-link
            >
          </p>
          <button
            v-if="allCategories.length > 0"
            @click="withdrawMoney"
            type="button"
            class="btn btn-primary btn-success"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Withdraw my money!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "WithdrawPopup",
  computed: {
    allCategories() {
      return store.getters.allCategories;
    },
    isAbleToWithdrawMoney() {
      return store.state.userData.bill >= this.moneyAmount;
    },
  },
  async mounted() {
    store.state.categoriesAll =
      (await this.$store.dispatch("getAllCategories")) || {};
    // chooses the category on mounting
    if (this.allCategories.length) {
      this.chosenCategoryId = this.allCategories[0].id;
    }
  },
  data() {
    return {
      chosenCategoryId: "",
      isWithdrawPopupOpen: false,
      description: "",
      moneyAmount: null,
    };
  },
  methods: {
    async withdrawMoney() {
      if (
        this.description === "" ||
        this.moneyAmount === null ||
        this.moneyAmount < 0
      ) {
        alert("Enter correct data!!!");
        return;
      }
      if (this.isAbleToWithdrawMoney) {
        console.log("Ok");
        console.log(this.chosenCategoryId);
        try {
          await store.dispatch("withdrawMoney", {
            categoryId: this.chosenCategoryId,
            moneyAmount: this.moneyAmount,
            description: this.description,
            type: "withdraw",
            date: new Date().toJSON(),
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        alert(`you need ${this.moneyAmount - store.state.userData.bill} more`);
        return;
      }

      this.isWithdrawPopupOpen = this.isWithdrawPopupOpen === false;
      this.description = "";
      this.moneyAmount = null;
      this.chosenCategoryId = this.allCategories[0].id;
    },
  },
};
</script>

<style scoped></style>
