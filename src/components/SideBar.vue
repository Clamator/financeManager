<template>
  <div
    v-show="isSideBarShown"
    class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"
  >
    <div
      class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
    >
      <logo-main></logo-main>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <home-button></home-button>

        <diagram-area></diagram-area>

        <!--        <wallet-side-bar></wallet-side-bar>-->

        <limits-area></limits-area>

        <history-area></history-area>
        <categories-area></categories-area>
      </ul>
      <hr />
      <user-options></user-options>
    </div>
  </div>
</template>

<script>
import LogoMain from "@/components/LogoMain";
import UserOptions from "@/components/UserOptions";
import HistoryArea from "@/components/HistoryArea";
import LimitsArea from "@/components/LimitsArea";
// import WalletSideBar from "@/components/WalletButton";
import DiagramArea from "@/components/DiagramArea";
import HomeButton from "@/components/HomeButton";
import CategoriesArea from "@/components/CategoriesArea";

export default {
  name: "SideBar",
  data() {
    return {
      isSideBarShown: true,
    };
  },
  methods: {
    openLoggingPage() {
      if (this.isSideBarShown === false) {
        this.$router.push("/auth");
      }
    },
  },
  components: {
    LogoMain,
    UserOptions,
    HistoryArea,
    LimitsArea,
    // WalletSideBar,
    DiagramArea,
    HomeButton,
    CategoriesArea,
  },
};
</script>

<style>
.icon-general {
  width: 25px;
  height: 25px;
}

.icon-general img {
  width: 100%;
  height: 100%;
}
.nav-link {
  color: white;
}
</style>
