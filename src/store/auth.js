import firebase from "firebase/compat/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import store from "@/store/index";
export default {
  mutations: {
    clearUserData(state) {
      state.userData = {};
    },
  },
  actions: {
    async login(context, { email, password }) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userData = await context.dispatch("getUserDataBase");
      store.state.userData = await userData;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("clearUserData");
    },
    async registerNewUser(
      { dispatch },
      { email, password, name, lastName, nickName, gender, customGender, bill }
    ) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userId = await dispatch("getUid");

      await dispatch("writeFirstUserDataAfterRegistration", {
        userId: userId,
        name: name,
        email: email,
        lastName: lastName,
        nickName: nickName,
        gender: gender,
        customGender: customGender,
        bill: bill,
      });
    },
    async getUid() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async writeFirstUserDataAfterRegistration(
      { dispatch },
      { userId, name, email, lastName, nickName, gender, customGender, bill }
    ) {
      console.log(dispatch);
      const db = getDatabase();
      try {
        console.log("start write");
        await set(ref(db, `users/${userId}/info`), {
          name: name,
          email: email,
          lastName,
          nickName,
          gender,
          customGender,
          bill,
        });
      } catch (error) {
        console.error("Error writing user data: ", error);
      }
    },
    async getUserDataBase({ dispatch }) {
      let userId = await dispatch("getUid");
      const dbRef = ref(getDatabase());
      let data = await get(child(dbRef, `users/${userId}/info`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            return snapshot.val();
            // commit("setUserData", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      return data;
    },
  },
};
