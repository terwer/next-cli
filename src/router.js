import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

export default () => {
  return new Router({
    mode: process.ssr ? "history" : "hash",
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        component: About
      }
    ]
  });
};
