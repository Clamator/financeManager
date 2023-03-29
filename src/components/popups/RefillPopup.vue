<template>
  <div
    v-show="true"
    class="modal fade"
    ref="refill"
    id="refillBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="true"
    tabindex="-1"
    aria-labelledby="refillBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="refillBackdropLabel">Income</h5>
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
              placeholder="Income source"
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
            @click="refillWallet"
            type="button"
            class="btn btn-primary btn-success"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Refill the wallet!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "RefillPopup",
  data() {
    return {
      isRefillPopupOpen: false,
      description: "",
      moneyAmount: null,
    };
  },
  methods: {
    async refillWallet() {
      console.log(store.state.userData.bill);
      if (
        this.description === "" ||
        this.moneyAmount === null ||
        this.moneyAmount < 0
      ) {
        alert("Enter correct data!!!");
        return;
      }
      try {
        await store.dispatch("refillMoney", {});
      } catch (e) {
        console.log(e);
      }
      this.isRefillPopupOpen = this.isRefillPopupOpen === false;
      this.description = "";
      this.moneyAmount = null;
    },
  },
};
</script>

<style scoped></style>
