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
    path: "/contact",
    name: "Contact",
    component: () => import('../views/Contact.vue')
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
    path: "/logout",
    name: "Logout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Logout.vue"),
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
    path: "/newuser",
    name: "new user",
    component: () => import("../views/NewUser.vue")
  },
  {
    path: "/review",
    name: "Review",
    component: () => import("../views/Review.vue")
  },
  {
    path: '/admin/accountsetting',
    name: "account setting",
    component: () => import("../views/admin/AccountSetting.vue")
  },
  {
    path: '/admin/jobs',
    name: "jobs setting",
    component: () => import("../views/admin/Jobs.vue")
  },
  {
    path: '/admin/review',
    name: "review setting",
    component: () => import("../views/admin/Review.vue")
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
