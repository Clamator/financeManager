<template>
  <div class="mb-4">Here you can change basic information about you</div>
  <form class="main-form" @click.prevent>
    <div class="row">
      <div class="col">
        <input
          v-model="name"
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div class="col">
        <input
          v-model="lastName"
          type="text"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <input
          v-model="phone"
          type="text"
          class="form-control"
          placeholder="Phone"
          aria-label="phone"
        />
      </div>
      <div class="col">
        <input
          v-model="mobile"
          type="text"
          class="form-control"
          placeholder="Mobile"
          aria-label="mobile"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <input
          v-model="nickName"
          type="text"
          class="form-control"
          placeholder="Nickname"
          aria-label="nickname"
        />
      </div>
      <div class="col">
        <input
          v-model="post"
          type="text"
          class="form-control"
          placeholder="Post where you employed"
          aria-label="post"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          v-model="address"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input
          v-model="city"
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="City"
        />
      </div>
    </div>

    <div class="col-12 my-4">
      <label for="photoURL" class="form-label">Photo URL</label>
      <input
        v-model="photoURL"
        type="text"
        class="form-control"
        id="photoURL"
        placeholder="Set URL to your photo"
      />
    </div>

    <div class="col-12">
      <button type="submit" @click="updateInfo" class="btn btn-primary">
        Change info
      </button>
    </div>
  </form>
</template>

<script>
import store from "@/store";
export default {
  name: "SettingsView",
  data() {
    return {
      name: "",
      lastName: "",
      phone: "",
      mobile: "",
      nickName: "",
      address: "",
      post: "",
      city: "",
      photoURL: "",
    };
  },
  methods: {
    async updateInfo() {
      const formData = {
        name: this.name,
        lastName: this.lastName,
        phone: this.phone,
        mobile: this.mobile,
        nickName: this.nickName,
        address: this.address,
        post: this.post,
        city: this.city,
        photoURL: this.photoURL,
      };

      function getNonEmptyFormData(formData) {
        const nonEmptyEntries = {};
        for (const [key, value] of Object.entries(formData)) {
          if (value !== "") {
            nonEmptyEntries[key] = value;
          }
        }
        return nonEmptyEntries;
      }

      const nonEmptyFormData = getNonEmptyFormData(formData);
      await store.dispatch("updateInfo", nonEmptyFormData);
    },
  },
};
</script>

<style scoped>
.main-form {
  max-width: 80%;
  margin: 0 auto;
}
.row {
  margin-bottom: 25px;
}
</style>
