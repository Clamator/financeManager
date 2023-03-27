import { getDatabase, ref, push, remove, get, child } from "firebase/database";

export default {
  state: {
    accToEdit: "",
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
