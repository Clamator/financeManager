<template>
  <div
    v-show="true"
    class="modal fade"
    ref="addAccModal"
    id="addAccBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="true"
    tabindex="-1"
    aria-labelledby="addAccBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addAccBackdropLabel">
            You are about to add new Account
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
              v-model="accName"
              type="text"
              placeholder="Account name"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="input-group">
            <input
              v-model="moneyAmount"
              type="text"
              class="form-control"
              placeholder="Enter an amount of money"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <select
              v-model="currency"
              class="form-select"
              aria-label="Default select"
            >
              <option selected value="$">$</option>
              <option value="€">€</option>
              <option value="₽">₽</option>
              <option value="₸">₸</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel adding
          </button>
          <button
            @click="addCurrency"
            type="button"
            class="btn btn-primary btn-success"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Add account!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "AddAccountPopup",
  data() {
    return {
      accName: "",
      moneyAmount: "",
      currency: "$",
      isAddAccPopupOpen: false,
    };
  },
  methods: {
    addCurrency() {
      if (this.accName !== "" && this.moneyAmount !== "") {
        store.commit("ADD_CURRENCY", {
          name: this.accName,
          money: this.moneyAmount,
          currency: this.currency,
        });
        this.isAddAccPopupOpen = this.isAddAccPopupOpen === false;
        this.accName = "";
        this.moneyAmount = "";
      } else {
        alert("Enter data!!!");
      }
    },
  },
};
</script>

<style scoped></style>
