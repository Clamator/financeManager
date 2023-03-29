import {
  getDatabase,
  ref,
  push,
  remove,
  get,
  child,
  update,
} from "firebase/database";
import store from "@/store/index";
export default {
  state: {
    accNameToEdit: "",
    accFullToEdit: {},
  },
  actions: {
    async upload_category(context, { catName, catSpent, catLimit }) {
      try {
        const db = getDatabase();
        const userId = await context.dispatch("getUid");
        const category = await push(ref(db, `users/${userId}/categories`), {
          catName,
          catSpent,
          catLimit,
        });
        return { id: category.key, catName, catSpent, catLimit };
      } catch (e) {
        console.log(e);
      }
    },
    async delete_category(context, catId) {
      const db = getDatabase();
      const userId = await context.dispatch("getUid");
      try {
        await remove(ref(db, `users/${userId}/categories/${catId}`));
      } catch (e) {
        console.log(e);
      }
    },
    async editCategory(context, { id, catSpent, catName, catLimit }) {
      const db = getDatabase();
      const userId = await context.dispatch("getUid");

      const updates = {
        catSpent: catSpent,
        catName: catName,
        catLimit: catLimit,
        updatedAt: new Date(),
      };
      //   await store.dispatch("getAllCategories");
      const categoryPath = `users/${userId}/categories/${id}`;
      await update(ref(db, categoryPath), updates);
      store.state.categoriesAll = await context.dispatch("getAllCategories");
      // context.commit("updateCategory", { id, catSpent, catName, catLimit });
    },
    async getAllCategories(context) {
      let userId = await context.dispatch("getUid");
      const dbRef = ref(getDatabase());
      const categoriesFetched = await get(
        child(dbRef, `users/${userId}/categories`)
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val() || {};
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      const cats = [];
      if (!categoriesFetched) return;
      Object.keys(categoriesFetched).forEach((key) => {
        cats.push({
          catName: categoriesFetched[key].catName,
          catSpent: categoriesFetched[key].catSpent,
          catLimit: categoriesFetched[key].catLimit,
          id: key,
        });
      });
      return cats || {};
    },
  },
};
