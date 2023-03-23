import firebase from "firebase/compat/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      console.log(dispatch, commit);
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("a");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
