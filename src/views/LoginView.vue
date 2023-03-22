<template>
  <form @submit.prevent="authUser">
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
        v-model="this.password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <br />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <router-link class="w-50 btn btn-lg btn-primary rega" to="/reg">
      Registration</router-link
    >
    <p class="mb-3 text-muted">&copy; 2017–2023</p>
  </form>
  <router-view></router-view>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    authUser() {
      console.log("user authorized");
    },
  },
};
</script>

<style scoped>
form {
  margin: 120px auto 0;
  max-width: 300px;
}
.rega {
  display: block;
  margin: 20px auto 20px;
}
</style>
