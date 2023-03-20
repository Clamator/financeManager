import { createStore } from "vuex";

const store = createStore({
  state: {
    accounts: {},
    categories: {
      // Medicine: {
      //   catId: 1,
      //   catName: "Medicine",
      //   userId: 1,
      // },
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
    allCategories: (state) => Object.values(state.categories),
    allAccounts: (state) => Object.values(state.accounts),
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
      }
    },
    GET_ACCS_FROM_LOCAL_STORAGE(state) {
      state.accounts = JSON.parse(localStorage.getItem("accounts"));
      state.categories = JSON.parse(localStorage.getItem("categories"));
    },
    ADD_CATEGORY(state, catName) {
      // console.log(state.categories);
      // null на state.categories
      // if (state.categories === null) return;
      state.categories = {
        ...state.categories,
        [catName.catName]: {
          // нужен обработчик для категории
          catId: Object.entries(state.categories).length + 1,
          catName: catName.catName,
          userId: 1,
        },
      };
      store.commit("ADD_ACCS_TO_LOCAL_STORAGE");
    },
    DELETE_CHOSEN_CATEGORY(state, catName) {
      // мы получаем имя категории в виде текста, его надо убирать из категории
      delete state.categories[catName.catName];
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
  },
  actions: {},
  modules: {},
});
export default store;
