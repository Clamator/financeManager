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
          {{ cat.catSpent }} / {{ cat.catLimit }}
        </span>
      </div>
      <div @click="editCategory" class="edit-img">
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
          v-model.number="this.limit"
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
      category: "",
      categoryToDelete: "",
      spentMoney: 0,
      limit: null,
    };
  },
  computed: {
    allCategories() {
      return store.getters.allCategories;
    },
  },
  async mounted() {
    store.state.categoriesAll = await this.$store.dispatch("getAllCategories");
  },
  methods: {
    editCategory() {
      alert("Edit me");
    },
    async addCategory() {
      if (this.category !== "" && this.limit !== "") {
        const cat = await store.dispatch("upload_category", {
          catName: this.category,
          catSpent: this.spentMoney,
          catLimit: this.limit,
        });
        store.state.categoriesAll = {
          ...store.state.categoriesAll,
          cat,
        };
        store.commit("ADD_ACCS_TO_LOCAL_STORAGE");
      } else {
        alert("Enter data!!!");
      }
      this.category = "";
      this.spentMoney = 0;
      this.limit = "";
    },
    deleteCategory(event) {
      const target = event.target.parentNode.innerText.split("\n")[0];
      console.log(event.target.parentNode.innerText.split("\n")[0]);
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
