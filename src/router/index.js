import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/diagrams",
    name: "diagrams",
    component: () =>
      import(/* webpackChunkName: "diagrams" */ "../views/DiagramView.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () =>
      import(
        /* webpackChunkName: "diagrams" */ "../views/TransactionsView.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "diagrams" */ "../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
