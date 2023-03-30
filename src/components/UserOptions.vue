<template>
  <div class="dropdown pb-4">
    <a
      href="#"
      class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <!--      <img-->
      <!--        src="https://github.com/clamator.png"-->
      <!--        alt="hugenerd"-->
      <!--        width="30"-->
      <!--        height="30"-->
      <!--        class="rounded-circle"-->
      <!--      />-->
      <span ref="username" class="d-none d-sm-inline mx-1">
        {{ userData.nickName }}
      </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
      <li>
        <router-link class="dropdown-item" to="/settings">Settings</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="/account">Profile</router-link>
      </li>

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
  name: "UserOptions",
  computed: {
    ...mapGetters(["userData"]),
  },
  methods: {
    async logout() {
      await store.dispatch("logout");
      this.$router.push("/auth?message=logout");
      store.commit("DELETE_AFTER_LOGOUT");
    },
  },
};
</script>

<style scoped></style>
