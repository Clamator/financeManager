<template>
  <div class="acc-cats d-flex flex-wrap gap-3 justify-content-sm-center">
    <div
      class="card bg-opacity-75 bg-info"
      style="width: 18rem; min-height: 130px"
      v-for="(cat, indx) in allCategories"
      :key="indx"
    >
      <div class="card-body">
        <span class="card-title fw-bold fs-4 text-white">
          {{ cat.catName }}
        </span>
      </div>
      <div class="edit-img">
        <img
          class="image-main"
          src="https://cdn-icons-png.flaticon.com/512/259/259450.png"
          alt=""
        />
      </div>
      <button @click="deleteCategory($event)" class="remove-button">x</button>
    </div>

    <div class="card" style="width: 18rem; min-height: 130px">
      <div class="card-body">
        <input
          v-model="this.category"
          placeholder="Enter category name"
          class="my-3 rounded ps-2 border-1 bg-opacity-75"
          type="text"
        />
        <button class="btn btn-primary" @click="addCategory">
          Add category
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "CategoriesView",
  data() {
    return {
      categories: store.state.categories,
      category: "",
      categoryToDelete: "",
    };
  },
  computed: {
    allCategories() {
      return store.getters.allCategories;
    },
  },
  methods: {
    addCategory() {
      // if (this.category === "") return;
      // store.commit("ADD_CATEGORY", {
      //   catName: this.category,
      // });
      if (this.category !== "") {
        store.commit("ADD_CATEGORY", {
          catName: this.category,
        });
      } else {
        alert("Enter data!!!");
      }
      this.category = "";
    },
    deleteCategory(event) {
      const target = event.target.parentNode.innerText.slice(0, -2);
      store.commit("DELETE_CHOSEN_CATEGORY", {
        catName: target,
      });
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  vertical-align: middle;
}
.card-title {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.remove-button {
  position: absolute;
  font-size: 110%;
  top: 0;
  color: darkred;
  right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
}
.edit-img {
  max-width: 18px;
  max-height: 18px;
  position: absolute;
  top: 2px;
  right: 40px;
  cursor: pointer;
}
.image-main {
  max-width: 100%;
  max-height: 100%;
}
.acc-cats {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
