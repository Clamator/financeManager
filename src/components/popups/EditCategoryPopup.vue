<template>
  <div
    v-show="true"
    class="modal fade"
    ref="myModal"
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
              type="text"
              placeholder="Account name"
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
              <!--              <option selected>Choose currency</option>-->
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
export default {
  name: "EditCategoryPopup",
  data() {
    return {
      isEditCatPopupOpen: false,
    };
  },
  methods: {
    addCurrency() {
      this.isEditCatPopupOpen = this.isEditCatPopupOpen === false;
    },
  },
};
</script>

<style scoped></style>
