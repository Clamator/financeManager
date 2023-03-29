<template>
  <form @submit.prevent="authUser" class="needs-validation" novalidate>
    <h1 class="h3 mb-3 fw-normal">Please log in</h1>

    <div class="form-floating">
      <input
        v-model="this.email"
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <br />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        @input="isAuthFalse = false"
        v-model="this.password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <br />
      <label for="floatingPassword">Password</label>
      <div
        v-show="isAuthFalse"
        @input="isAuthFalse = false"
        class="error-text my-2 text-danger"
      >
        Invalid email or password
      </div>
    </div>

    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <router-link class="w-50 btn btn-lg btn-primary rega" to="/reg">
      Registration</router-link
    >
  </form>
  <router-view></router-view>
</template>

<script>
import store from "@/store";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      isAuthFalse: false,
    };
  },
  methods: {
    async authUser() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      for (let el of Array.from(Object.entries(formData))) {
        if (el[1] === "") {
          alert("Enter correct data");
          return;
        }
      }
      try {
        await store.dispatch("login", formData);
        console.log("logged in 1");
        this.$router.push("/");
      } catch (e) {
        console.log("not logged in");
        this.isAuthFalse = true;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 120px auto 0;
  width: 300px;
}
.rega {
  display: block;
  margin: 20px auto 20px;
}
</style>
