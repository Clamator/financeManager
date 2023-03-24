import firebase from "firebase/compat/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      console.log(dispatch, commit);
      await firebase.auth().signInWithEmailAndPassword(email, password);
    },
    async logout() {
      await firebase.auth().signOut();
    },
    // need to send unique user id
    async registerNewUser({ dispatch }, { email, password, name }) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userId = await dispatch("getUserId");
      await firebase.database().ref(`/users/${userId}/info`).set({
        name: name,
      });
    },
    // this func gets unique user id
    getUserId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
};
