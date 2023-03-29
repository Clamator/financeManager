<template>
  <total-money></total-money>
</template>

<script>
import store from "@/store";
import TotalMoney from "@/components/homePageComponents/TotalMoney";
export default {
  name: "HomeView",
  components: {
    TotalMoney,
  },

  computed: {
    userData() {
      return store.getters.userData;
    },
  },
  async mounted() {
    store.state.userData =
      (await this.$store.dispatch("getUserDataBase")) || {};
  },
};
</script>

<style scoped></style>
