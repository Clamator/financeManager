<template>
  <div class="acc-cats d-flex flex-wrap gap-3 justify-content-sm-center">
    <div
      class="card bg-opacity-75 bg-info"
      style="width: 18rem; min-height: 130px"
      v-for="(cat, indx) in allCategories"
      :key="indx"
    >
      <div class="card-body d-flex flex-column justify-content-sm-center">
        <span class="card-title fw-bold fs-4 text-white">
          {{ cat.catName }}
        </span>
        <span class="card-text fw-bold fs-4 text-white">
          {{ cat.catLimit }}
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
          placeholder="Enter category name."
          class="my-3 rounded ps-2 border-1 bg-opacity-75"
          type="text"
        />
        <input
          v-model="this.limit"
          placeholder="Enter category limit"
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
      limit: null,
    };
  },
  computed: {
    allCategories() {
      return store.getters.allCategories;
    },
  },
  methods: {
    addCategory() {
      if (this.category !== "" && this.limit !== "") {
        store.commit("ADD_CATEGORY", {
          catName: this.category,
          catLimit: +this.limit,
        });
      } else {
        alert("Enter data!!!");
      }
      this.category = "";
      this.limit = "";
    },
    deleteCategory(event) {
      const target = event.target.parentNode.innerText.split("\n")[0];
      store.commit("DELETE_CHOSEN_CATEGORY", {
        catName: target,
      });
    },
  },
};

//         <span> {{ cat.limit }} </span>
</script>

<style scoped>
@import "@/assets/main.css";
</style>
