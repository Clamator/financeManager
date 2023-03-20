import { createStore } from "vuex";

const store = createStore({
  state: {
    accounts: {},
    currency: {
      dollar: "$",
      euro: "€",
      rouble: "₽",
      tenge: "₸",
    },
    categories: {
      1: { catId: 1, catName: "Eating out", userId: 1 },
      2: { catId: 2, catName: "Eating at Home", userId: 1 },
      3: { catId: 3, catName: "Medicine", userId: 1 },
      // 4: { catId: 3, catName: "Medicine", userId: 1 },
      // 5: { catId: 3, catName: "Medicine", userId: 1 },
      // 6: { catId: 3, catName: "Medicine", userId: 1 },
      // 7: { catId: 3, catName: "Medicine", userId: 1 },
      // 8: { catId: 3, catName: "Medicine", userId: 1 },
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
    },
    GET_ACCS_FROM_LOCAL_STORAGE(state) {
      state.accounts = JSON.parse(localStorage.getItem("accounts"));
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
    },
  },
  actions: {},
  modules: {},
});
export default store;
