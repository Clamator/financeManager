<template>
  <div>
    Home page, here will be a brief info from various sources about current
    finance state
  </div>
  <div>
    {{ this.$store.state.userData.bill }}
    {{ this.$store.state.userData.lastName }}
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "HomeView",
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
