import { createStore } from "vuex";

const store = createStore({
  state: {
    accounts: {
      1: {
        name: "Sberbank",
        money: 5000,
        currency: "$",
      },
      2: {
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
  },
  getters: {
    getDollarCurrency: (state) => {
      return state.currency.dollar;
    },
    getEuroCurrency: (state) => {
      return state.currency.euro;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
export default store;
