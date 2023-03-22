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

        <refill-withdraw-buttons></refill-withdraw-buttons>

        <diagram-area></diagram-area>

        <wallet-side-bar></wallet-side-bar>

        <options-buttons></options-buttons>

        <transaction-area></transaction-area>
        <categories-area></categories-area>

        <router-link class="btn btn-outline-success" to="/auth"
          >Sign up / Log in</router-link
        >
      </ul>
      <hr />
      <user-account></user-account>
    </div>
  </div>
</template>

<script>
import LogoMain from "@/components/LogoMain";
import UserAccount from "@/components/UserAccount";
import TransactionArea from "@/components/TransactionArea";
import OptionsButtons from "@/components/OptionsButtons";
import WalletSideBar from "@/components/WalletButton";
import DiagramArea from "@/components/DiagramArea";
import HomeButton from "@/components/HomeButton";
import RefillWithdrawButtons from "@/components/RefillWithdrawButtons";
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
    UserAccount,
    TransactionArea,
    OptionsButtons,
    WalletSideBar,
    DiagramArea,
    HomeButton,
    RefillWithdrawButtons,
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
