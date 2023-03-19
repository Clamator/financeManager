<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
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
              aria-label="Default select example"
            >
              <option selected>Choose currency</option>
              <option value="$">$</option>
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
            @click="
              $store.mutations.ADD_CURRENCY(accName, moneyAmount, currency)
            "
            type="button"
            class="btn btn-primary"
          >
            Add account!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAccountPopup",
  data() {
    return {
      accName: "",
      moneyAmount: "",
      currency: "Choose currency",
    };
  },
};
</script>

<style scoped></style>
