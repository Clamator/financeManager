import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: HomeView,
  },
  {
    path: "/diagrams",
    name: "diagrams",
    meta: { layout: "main" },
    component: () => import("../views/DiagramView.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    meta: { layout: "main" },
    component: () => import("../views/TransactionsView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { layout: "main" },
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/CategoriesView.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    meta: { layout: "auth" },
    component: () => import("../views/LoginView"),
  },
  {
    path: "/reg",
    name: "reg",
    meta: { layout: "auth" },
    component: () => import("../views/RegistrationView"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main" },
    component: () => import("../views/HistoryView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
