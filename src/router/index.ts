import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/demo",
    name: "demo",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../views/DemoVue.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../views/SignUp.vue"),
  },
  {
    path: "/notFound",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "/signUp" && !localStorage.getItem("role")) {
//     store.dispatch("getRole").then(() => {
//       if (store.state.role === "admin") {
//         next();
//       } else {
//         next("/notFound");
//       }
//     });
//   } else if (to.path === "/signUp" && localStorage.getItem("role")) {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
