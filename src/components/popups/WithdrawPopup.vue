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
              placeholder="Reason to waste your money"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter an amount of money"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <select class="form-select" aria-label="Default select">
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
            Cancel
          </button>
          <button
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
// import store from "@/store";

export default {
  name: "WithdrawPopup",
  data() {
    return {
      isWithdrawPopupOpen: false,
      expense: "",
      moneyWasted: null,
      category: "",
    };
  },
  methods: {
    withdrawMoney() {
      this.isWithdrawPopupOpen = this.isWithdrawPopupOpen === false;
    },
  },
};
</script>

<style scoped></style>
