<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
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

        <analytics-area></analytics-area>

        <wallet-side-bar></wallet-side-bar>

        <options-buttons></options-buttons>

        <transaction-area></transaction-area>
        <categories-area></categories-area>
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
import WalletSideBar from "@/components/WalletSideBar";
import AnalyticsArea from "@/components/AnalyticsArea";
import HomeButton from "@/components/HomeButton";
import RefillWithdrawButtons from "@/components/RefillWithdrawButtons";
import CategoriesArea from "@/components/CategoriesArea";

export default {
  name: "SideBar",
  components: {
    LogoMain,
    UserAccount,
    TransactionArea,
    OptionsButtons,
    WalletSideBar,
    AnalyticsArea,
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
