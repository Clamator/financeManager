<template>
  <div class="main-layout">
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
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import AddAccountPopup from "@/components/popups/AddAccountPopup";
export default {
  name: "MainLayout",
  components: {
    SideBar,
    AddAccountPopup,
    // MainWindow,
  },
};
</script>

<style scoped></style>
