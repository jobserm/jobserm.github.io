import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthUser from "../store/AuthUser" 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "Main",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "Main",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      layout: "Main",
    },
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/jobinfo',
    name: 'JobInfo',
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () => import('../views/JobInfo.vue')
  },
  {
    path: '/job',
    name: 'Job',
    props: true,
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () => import('../views/Job.vue')
  },
  {
    path: "/employer",
    name: "Employer",
    meta: {
      layout: "Main",
    },
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
    meta: {
      layout: "Main",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/allusers",
    name: "allusers",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () => import("../views/AllUserForm.vue"),
  },
  {
    path: "/freelance",
    name: "Freelance",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Freelance.vue"),
  },
  {
    path: "/profiles",
    name: "profiles",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () => import("../views/DetailForm.vue"),
  },
  {
    path: "/personalinformation",
    name: "personalinformation",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalForm.vue"),
  },
  {
    path: "/postjob",
    name: "postjob",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JobForm.vue"),
  },
  {
    path: "/additionals",
    name: "AdditionalsInfo",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Additionals.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    // meta: {
    //   layout: "Main",
    //   requiresAuth: true,
    //   requiresAdmin: true,
    // },
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
    meta: {
      layout: "Main",
    },
    component: () => import("../views/NewUser.vue")
  },
  {
    path: "/review",
    name: "Review",
    meta: {
      layout: "Main",
      requiresAuth: true,
    },
    component: () => import("../views/Review.vue")
  },
  {
    path: "/review-form",
    name: "ReviewForm",
    component: () => import("../views/ReviewForm.vue")
  },
  {
    path: '/admin/accountsetting',
    name: "account setting",
    // meta: {
    //   layout: "Main",
    //   requiresAuth: true,
    //   requiresAdmin: true,
    // },
    component: () => import("../views/admin/AccountSetting.vue")
  },
  {
    path: '/admin/jobs',
    name: "jobs setting",
    // meta: {
    //   layout: "Main",
    //   requiresAuth: true,
    //   requiresAdmin: true,
    // },
    component: () => import("../views/admin/Jobs.vue")
  },
  {
    path: '/admin/review',
    name: "review setting",
    // meta: {
    //   layout: "Main",
    //   requiresAuth: true,
    //   requiresAdmin: true,
    // },
    component: () => import("../views/admin/Review.vue")
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!AuthUser.getters.isAuthen) {
      if (from.name != null) {
        next({ name: "Login" });
      } 
    } else {
      next()
    } 
  }
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (!AuthUser.getters.isAdmin) {
      next({ name: "Home" });
    } else {
      next();
    }
  } 
  else {
    next();
  }

});

export default router;