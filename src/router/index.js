import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobinfo',
    name: 'JobInfo',
    component: () => import('../views/JobInfo.vue')
  },
  {
    path: '/job',
    name: 'Job',
    component: () => import('../views/Job.vue')
  },
  {
    path: "/employer",
    name: "Employer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Employer.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/freelance",
    name: "Freelance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Freelance.vue"),
  },
  {
    path: "/personalinformation",
    name: "personalinformation",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalForm.vue"),
  },
  {
    path: "/postjob",
    name: "postjob",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JobForm.vue"),
  },
  {
    path: "/additionals",
    name: "AdditionalsInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Additionals.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/index.vue"),
  },
  {
    path:"/table",
    name: "test table",
    component: () => import("../views/testTable.vue")
  },
  {
    path:"/firebase",
    name: "firebase",
    component: () => import("../views/testFirebase.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
