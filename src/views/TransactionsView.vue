<template>
  <div>
    <div>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb history-button"
          >История</router-link
        >
        <a class="breadcrumb"> Расход </a>
      </div>
      <div class="row d-flex flex-wrap">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-body white-text">
              <p>Описание: купил что-то для чего-то просто так</p>
              <p>Сумма:</p>
              <p>Категория:</p>

              <small>12.12.12</small>
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
</style>
