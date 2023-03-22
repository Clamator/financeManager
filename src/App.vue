<template>
  <div class="container-fluid">
    <div class="row flex-wrap">
      <side-bar class="py-2"></side-bar>
      <div class="col py-3">
        <div class="py-3">
          <router-view />
        </div>
        <add-account-popup></add-account-popup>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
// import MainWindow from "@/components/MainWindow";
import AddAccountPopup from "@/components/popups/AddAccountPopup";
import store from "@/store";
// import { createDB } from "@/sqlDB";

export default {
  name: "App",
  components: {
    SideBar,
    AddAccountPopup,
    // MainWindow,
  },
  created() {
    if (!localStorage.getItem("categories")) {
      localStorage.setItem("categories", JSON.stringify({}));
    }
    store.commit("GET_ACCS_FROM_LOCAL_STORAGE");
    // createDB();
  },
};
</script>

<style>
@import "@/assets/main.css";
/*@import "@/assets/index.css";*/
/*@import "~materialize-css/dist/css/materialize.min.css";*/
</style>
