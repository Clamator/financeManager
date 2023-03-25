import { createStore } from "vuex";
import auth from "./auth";

const store = createStore({
  state: {
    userData: {},
    accounts: {},
    categories: {},
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
    allCategories: (state) => Object.values(state.categories),
    allAccounts: (state) => Object.values(state.accounts),
    // userData: (state) => state.userData,
    userData: (state) => state.userData,
  },
  mutations: {
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
      if (state.accounts && state.categories) {
        localStorage.setItem("accounts", JSON.stringify(state.accounts));
        localStorage.setItem("categories", JSON.stringify(state.categories));
        localStorage.setItem("userData", JSON.stringify(state.userData));
      }
    },
    GET_ACCS_FROM_LOCAL_STORAGE(state) {
      state.accounts = JSON.parse(localStorage.getItem("accounts"));
      state.categories = JSON.parse(localStorage.getItem("categories"));
      state.userData = JSON.parse(localStorage.getItem("userData"));
    },
    ADD_CATEGORY(state, catName) {
      console.log(catName);
      state.categories = {
        ...state.categories,
        [catName.catName]: {
          catId: Object.entries(state.categories).length + 1,
          catName: catName.catName,
          catLimit: catName.catLimit,
          userId: 1,
        },
      };
      store.commit("ADD_ACCS_TO_LOCAL_STORAGE");
    },
    DELETE_CHOSEN_CATEGORY(state, catName) {
      // мы получаем имя категории в виде текста, его надо убирать из категории
      console.log(catName);
      delete state.categories[catName.catName];
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
export default store;
