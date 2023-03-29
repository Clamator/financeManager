import { createStore } from "vuex";
import auth from "./auth";
import categories from "@/store/categories";
import transactions from "@/store/transactions";
import info from "@/store/info";

const store = createStore({
  state: {
    userData: {},
    accounts: {},
    categoriesAll: {},
    currency: {
      dollar: "$",
      euro: "€",
      rouble: "₽",
      tenge: "₸",
    },
    accountToAddName: "",
    moneyToAddQuantity: null,
    moneyToAddCurrency: "",
  },
  getters: {
    allCategories: (state) => Object.values(state.categoriesAll),
    allAccounts: (state) => Object.values(state.accounts),
    userData: (state) => state.userData,
  },
  mutations: {
    DELETE_AFTER_LOGOUT(state) {
      state.categoriesAll = {};
      store.state.userData = {};
    },
  },
  actions: {},
  modules: {
    auth,
    categories,
    transactions,
    info,
  },
});
export default store;
