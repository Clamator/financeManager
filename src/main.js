import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";
// import MessagePlugin from "@/utils/message.plugin";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM7KB7E7yqvkLb85azoFuxRE1deHKndiE",
  authDomain: "financemanager-clamator.firebaseapp.com",
  projectId: "financemanager-clamator",
  storageBucket: "financemanager-clamator.appspot.com",
  messagingSenderId: "460635908786",
  appId: "1:460635908786:web:f8f700a72242f0bc87f7ab",
  measurementId: "G-1LHQF03ZLB",
};

firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();
// const analytics = getAnalytics(app);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      // .use(analytics)
      // .use(MessagePlugin)
      .use(BootstrapVue3)
      .mount("#app");
  }
});
