import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import firebase from "firebase/compat/app";
const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main", auth: true },
    component: HomeView,
  },
  {
    path: "/diagrams",
    name: "diagrams",
    meta: { layout: "main", auth: true },
    component: () => import("../views/DiagramView.vue"),
  },
  {
    path: "/detail/:id",
    name: "details",
    meta: { layout: "main", auth: true },
    component: () => import("../views/DetailsView"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { layout: "main", auth: true },
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main", auth: true },
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
    meta: { layout: "main", auth: true },
    component: () => import("../views/HistoryView"),
  },
  {
    path: "/limits",
    name: "limits",
    meta: { layout: "main", auth: true },
    component: () => import("../views/LimitsView"),
  },
  {
    path: "/account",
    name: "account",
    meta: { layout: "main", auth: true },
    component: () => import("../views/AccountView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const isRequiredAuth = to.matched.some((record) => record.meta.auth);

  if (!currentUser && isRequiredAuth) {
    next("/auth");
  } else {
    next();
  }
});
export default router;
