<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <side-bar class="py-2"></side-bar>
      <main-window> </main-window>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import MainWindow from "@/components/MainWindow";
import store from "@/store";
// import { createDB } from "@/sqlDB";

export default {
  name: "App",
  components: {
    SideBar,
    MainWindow,
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
</style>
