<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                :src="userData.photoURL"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-3">{{ userData.nickName }}</h5>
              <p class="text-muted mb-1">
                {{ userData.post ? userData.post : "Post not provided" }}
              </p>
              <p class="text-muted mb-4">
                {{
                  userData.address ? userData.address : "Address not provided"
                }}
              </p>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center p-3"
                >
                  <i class="fas fa-globe fa-lg text-warning"></i>
                  <p class="mb-0">Links</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ userData.name }} {{ userData.lastName }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userData.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{
                      userData.phone ? userData.phone : "Number not provided "
                    }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Mobile</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{
                      userData.mobile ? userData.mobile : "Number not provided"
                    }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{
                      userData.address
                        ? userData.address
                        : "Address not provided"
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store";
// import { mapGetters } from "vuex";
export default {
  name: "AccountView",
  data() {
    return {
      userData: [],
    };
  },
  // computed: {
  //   ...mapGetters(["userData"]),
  // },
  async mounted() {
    const userDataMain = await store.dispatch("getUserDataBase");
    this.userData = await userDataMain;
  },
};
</script>

<style scoped></style>
