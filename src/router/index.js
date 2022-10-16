import Vue from "vue";
import VueRouter from "vue-router";
import addresses from "@/views/addresses/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/addresses",
  },
  {
    path: "/addresses",
    name: "addresses",
    component: addresses,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
