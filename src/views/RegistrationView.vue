<template>
  <form @submit.prevent="registerUser">
    <h1 class="h3 mb-3 fw-normal">Registration</h1>
    <div id="main-wrapper">
      <div class="row">
        <div class="col">
          <input
            v-model="this.firstName"
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            v-model="this.lastName"
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>

        <div class="col">
          <input
            v-model="this.nickName"
            type="text"
            class="form-control"
            placeholder="Nickname"
            aria-label="Nickname"
          />
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="this.email"
          placeholder="Email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="this.password"
          placeholder="Password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Repeat password</label
        >
        <input
          @input="this.isPasswordsSimilar"
          v-model="this.passwordAgain"
          placeholder="Password"
          type="password"
          class="form-control"
          id="exampleInputPassword2"
        />
      </div>

      <div v-show="this.isSimilar === false">
        <p class="red-alert">Passwords should be similar</p>
      </div>

      <div class="form-check">
        <input
          v-model="this.gender"
          class="gender form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="male"
        />
        <label class="form-check-label" for="male"> Male </label>
      </div>

      <div class="form-check">
        <input
          v-model="this.gender"
          class="gender form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="female"
        />
        <label class="form-check-label" for="female"> Female </label>
      </div>

      <div class="form-check mb-4">
        <input
          v-model="this.gender"
          class="gender pers-gender form-check-input"
          type="radio"
          name="gender"
          id="other"
          value="other"
        />
        <label class="form-check-label" for="other"> Other </label>

        <input
          @input="getOtherGender"
          v-model="customGender"
          type="text"
          name="gender"
          class="mx-3 other-gender"
          placeholder="Write here"
          id="personalGender"
        />
      </div>
      <div class="checkbox mb-3">
        <label>
          <input
            type="checkbox"
            value="agree-with-terms"
            v-model="agreeWithTerms"
          />
          I agree with terms
        </label>
      </div>
      <button type="submit" class="btn btn-primary me-3">Let's start!</button>
      <router-link class="btn btn-outline-success" to="/auth"
        >Log in</router-link
      >
    </div>
  </form>
</template>

<script>
import store from "@/store";

export default {
  name: "RegistrationView",
  data() {
    return {
      firstName: "",
      lastName: "",
      nickName: "",
      email: "",
      password: "",
      passwordAgain: "",
      isSimilar: true,
      gender: "",
      customGender: "",
      agreeWithTerms: false,
    };
  },

  methods: {
    isPasswordsSimilar() {
      this.isSimilar = this.password === this.passwordAgain;
    },
    // registerUser() {
    //   if (!this.agreeWithTerms || !this.isSimilar) return;
    //
    //   console.log("user is registered ");
    //   const formData = {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     nickName: this.nickName,
    //     email: this.email,
    //     password: this.password,
    //     gender: this.gender,
    //     customGender: this.customGender,
    //     agreeWithTerms: this.agreeWithTerms,
    //   };
    //   for (let el of Array.from(Object.entries(formData))) {
    //     if (el[1] === "") {
    //       alert("Enter correct data");
    //       return;
    //     }
    //   }
    //   console.log(formData);
    //   this.$router.push("/");
    // },
    async registerUser() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.firstName,
      };

      try {
        console.log("dispatch done");
        this.$router.push("/");
        await store.dispatch("registerNewUser", formData);
      } catch (e) {
        this.isAuthFalse = true;
      }
    },
    getOtherGender() {
      // let otherGender = document.querySelector(".other-gender");
      let otherCheckBox = document.querySelector(".pers-gender");
      // this.customGender = otherGender.value;
      this.gender = otherCheckBox.value;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 1000px;
  margin: 200px auto 0;
  text-align: left;
}
.red-alert {
  color: red;
}
</style>
