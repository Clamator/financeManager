<template>
  <div>
    <div>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb history-button"
          >Return to history</router-link
        >
        <span class="btn-danger type"> Wasted </span>
      </div>
      <div class="row d-flex flex-wrap">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-body white-text">
              <p>Description: lorem ipsum</p>
              <p>Sum:</p>
              <p>Category:</p>

              <small>Date: 12.12.12</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionsView",
};
</script>

<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
.breadcrumb {
  background-color: #f3c410;
  margin-right: 20px;
  margin-bottom: 0;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  max-width: 150px;
  color: white;
  font-weight: 700;
}
.card-body {
  max-width: 350px;
}
.type {
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
}
.breadcrumb-wrap {
  margin-bottom: 50px;
}
</style>
