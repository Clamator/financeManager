import firebase from "firebase/compat/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      console.log(dispatch, commit);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    },
  },
};
