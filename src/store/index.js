import { createStore } from "vuex";

const store = createStore({
  state: {
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
    getDollarCurrency: (state) => {
      return state.currency.dollar;
    },
    getEuroCurrency: (state) => {
      return state.currency.euro;
    },
    allCategories: (state) => Object.values(state.categories),
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
      localStorage.setItem("accounts", JSON.stringify(state.accounts));
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    GET_ACCS_FROM_LOCAL_STORAGE(state) {
      state.accounts = JSON.parse(localStorage.getItem("accounts"));
      state.categories = JSON.parse(localStorage.getItem("categories"));
      console.log(state.accounts);
    },
    ADD_CATEGORY(state, catName) {
      state.categories = {
        ...state.categories,
        [Object.entries(state.categories).length + 1]: {
          catId: Object.entries(state.categories).length + 1,
          catName: catName.catName,
          userId: state.categories["1"].userId,
        },
      };
      store.commit("ADD_ACCS_TO_LOCAL_STORAGE");
    },
  },
  actions: {},
  modules: {},
});
export default store;
