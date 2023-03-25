<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import store from "@/store";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import firebase from "firebase/compat/app";

export default {
  name: "App",
  data() {
    return {
      user: {
        userId: "",
        name: "",
        email: "",
        lastName: "",
        nickName: "",
        gender: "",
        customGender: "",
      },
    };
  },
  components: {
    AuthLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    },
  },
  created() {
    if (!firebase.auth().currentUser) {
      console.log(firebase.auth().currentUser);
      this.$router.push("/auth");
    }
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", JSON.stringify({}));
    }
    if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", JSON.stringify(this.user));
    }
    store.commit("GET_ACCS_FROM_LOCAL_STORAGE");
  },
};
</script>

<style>
@import "@/assets/main.css";
/*@import "@/assets/index.css";*/
/*@import "~materialize-css/dist/css/materialize.min.css";*/
</style>
