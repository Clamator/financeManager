import firebase from "firebase/compat/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

export default {
  mutations: {
    setUserData(state, userData) {
      // state.userData = Object.assign({}, userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      // state.userData = userData;
    },
  },
  actions: {
    async login(context, { email, password }) {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userData = await context.dispatch("getUserDataBase");
      console.log(userData);
      context.commit("setUserData", userData);
    },
    async logout() {
      await firebase.auth().signOut();
    },
    async registerNewUser(
      { dispatch },
      { email, password, name, lastName, nickName, gender, customGender }
    ) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userId = await dispatch("getUid");

      await dispatch("writeFirstUserDataAfterRegistration", {
        user: {
          userId,
          name,
          email,
          lastName,
          nickName,
          gender,
          customGender,
        },
      });
    },
    async getUid() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async writeFirstUserDataAfterRegistration(
      { dispatch },
      { userId, name, email, lastName, nickName, gender, customGender }
    ) {
      console.log(dispatch);
      const db = getDatabase();
      try {
        await set(ref(db, `users/${userId}/info`), {
          name: name,
          email: email,
          lastName,
          nickName,
          gender,
          customGender,
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
