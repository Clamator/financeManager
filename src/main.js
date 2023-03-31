import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "firebase/auth";
import "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

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
const head = createHead();

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(head)
      .use(router)
      .use(BootstrapVue3)
      .mount("#app");
  }
});
