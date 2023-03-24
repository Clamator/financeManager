import firebase from "firebase/compat/app";
import { getDatabase, ref, set } from "firebase/database";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      console.log(dispatch, commit);
      await firebase.auth().signInWithEmailAndPassword(email, password);
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
        userId,
        name,
        email,
        lastName,
        nickName,
        gender,
        customGender,
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
  },
};
