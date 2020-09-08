import Vue from "vue";
import VueRouter from "vue-router";

import Profile from "../views/Profile.vue";
import Experience from "../views/Experience.vue";
import Skills from "../views/Skills.vue";
import Applications from "../views/Applications.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/applications",
    name: "Applications",
    component: Applications
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
