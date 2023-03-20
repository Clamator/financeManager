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
    component: () => import("../views/DiagramView.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () => import("../views/TransactionsView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/CategoriesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
