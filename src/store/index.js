import { createStore } from "vuex";
import auth from "./auth";
import categories from "@/store/categories";

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
      localStorage.removeItem("userData");
    },
    ADD_CURRENCY(state, { name, money, currency }) {
      state.accounts = {
        ...state.accounts,
        [name]: {
          name: name,
          money: money,
          currency: currency,
        },
      };
      store.commit("ADD_ACCS_TO_LOCAL_STORAGE");
    },
    ADD_ACCS_TO_LOCAL_STORAGE(state) {
      if (state.accounts && state.categoriesAll) {
        localStorage.setItem("accounts", JSON.stringify(state.accounts));
      }
    },
    GET_ACCS_FROM_LOCAL_STORAGE(state) {
      state.accounts = JSON.parse(localStorage.getItem("accounts"));
    },
    DELETE_CHOSEN_CATEGORY(state, catName) {
      delete state.categoriesAll[catName.catName];
      localStorage.setItem("categories", JSON.stringify(state.categoriesAll));
    },
  },
  actions: {},
  modules: {
    auth,
    categories,
  },
});
export default store;
