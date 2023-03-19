import { createStore } from "vuex";

const store = createStore({
  state: {
    accounts: {
      Sberbank: {
        name: "Sberbank",
        money: 5000,
        currency: "$",
      },
      Cash: {
        name: "Cash",
        money: 5000,
        get currency() {
          return store.state.currency.dollar;
        },
      },
    },
    currency: {
      dollar: "$",
      euro: "€",
      rouble: "₽",
      tenge: "₸",
    },
    accountToAddName: "",
    moneyToAddQuantity: null,
    moneyToAddCurrency: "",
    withdrawCategories: [],
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
    ADD_CURRENCY(state, { accName, money, currency }) {
      state.accounts = {
        ...state.accounts,
        [accName]: {
          name: accName,
          money: money,
          currency: currency,
        },
      };
    },
  },
  actions: {},
  modules: {},
});
export default store;
