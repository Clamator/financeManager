// import store from "@/store/index";
import {
  getDatabase,
  ref,
  push,
  get,
  child,
  // remove,
  // get,
  // child,
  // update,
} from "firebase/database";
export default {
  actions: {
    async recordTransaction(context, transData) {
      try {
        const db = getDatabase();
        const userId = await context.dispatch("getUid");
        return await push(ref(db, `users/${userId}/transactions`), {
          ...transData,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getTransactions(context) {
      try {
        let userId = await context.dispatch("getUid");
        const dbRef = ref(getDatabase());
        const transactionsFetched = await get(
          child(dbRef, `users/${userId}/transactions`)
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
        // const transactions = [];
        if (!transactionsFetched) return;
        return Object.keys(transactionsFetched).map((key) => ({
          ...transactionsFetched[key],
          id: key,
        }));
      } catch (e) {
        console.log(e);
      }
    },
  },
};
