// import store from "@/store/index";
import {
  getDatabase,
  ref,
  push,
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
  },
};
