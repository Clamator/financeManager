<template>
  <div
    v-show="true"
    class="modal fade"
    ref="myModal2"
    id="editCategory"
    data-bs-backdrop="static"
    data-bs-keyboard="true"
    tabindex="-1"
    aria-labelledby="editCategoryLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editCategoryLabel">
            You are about to edit category:
            {{ this.$store.state.accNameToEdit }}
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
              v-model="newCategoryName"
              placeholder="New category name"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div class="input-group">
            <input
              v-model="newCategoryLimit"
              type="text"
              class="form-control"
              placeholder="Enter new limit"
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
            Cancel editing
          </button>
          <button
            @click="editCategoryInsidePopup"
            type="button"
            class="btn btn-primary btn-success"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Edit!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "EditCategoryPopup",
  data() {
    return {
      isEditCatPopupOpen: false,
      newCategoryName: "",
      newCategoryLimit: null,
    };
  },
  methods: {
    async editCategoryInsidePopup() {
      if (this.newCategoryName === "" || this.newCategoryLimit === null) {
        alert("Enter data!!!");
        return;
      }
      try {
        await store.dispatch("editCategory", {
          id: store.state.accFullToEdit.id,
          catSpent: store.state.accFullToEdit.catSpent,
          catName: this.newCategoryName,
          catLimit: this.newCategoryLimit,
        });
      } catch (e) {
        console.log(e);
      }
      this.newCategoryName = "";
      this.newCategoryLimit = null;
      this.isEditCatPopupOpen = this.isEditCatPopupOpen === false;
    },
  },
};
</script>

<style scoped></style>
