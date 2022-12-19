import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import ListView from "../views/ListView.vue";
import UploadView from "../views/UploadView.vue";
import NProgress from "nprogress";
import NotFound from "../views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";
import ExcelFiles from "@/components/ExcelFiles.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    /*redirect: () => {
      return { path: "/form", name: "form", component: FormView };
    },*/
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
  {
    path: "/uploads",
    name: "uploads",
    component: UploadView,
    props: (route) => ({ page: parseInt(route.query._page) || 1 }),
  },
  {
    path: "/events",
    name: "list",
    component: ListView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
  {
    path: "/excel-files",
    name: "excel",
    component: ExcelFiles,
  },
  {
    path: "/excel-files/:file",
    name: "ExelFile",
    component: ExcelFiles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
