<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <side-bar class="py-2"></side-bar>
      <main-window> </main-window>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import MainWindow from "@/components/MainWindow";
import store from "@/store";
export default {
  name: "App",
  components: {
    SideBar,
    MainWindow,
  },
  created() {
    store.commit("GET_ACCS_FROM_LOCAL_STORAGE");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
