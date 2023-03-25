<template>
  <div class="dropdown pb-4">
    <a
      href="#"
      class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/clamator.png"
        alt="hugenerd"
        width="30"
        height="30"
        class="rounded-circle"
      />
      <span ref="username" class="d-none d-sm-inline mx-1">
        {{ userData.name }}
      </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><a class="dropdown-item" href="#">Settings</a></li>
      <li><a class="dropdown-item" href="#">Profile</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li>
        <a class="dropdown-item" @click.prevent="logout" href="#">Sign out</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";
export default {
  name: "UserAccount",
  // computed: {
  //   userData() {
  //     return store.getters.userData;
  //   },
  // },
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    async logout() {
      console.log("logged out");
      await store.dispatch("logout");
      this.$router.push("/auth?message=logout");
      localStorage.removeItem("userData");
    },
  },
};
</script>

<style scoped></style>
