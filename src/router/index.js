import Vue from "vue";
import VueRouter from "vue-router";
import VueToast from "vue-toast-notification";

// components
const ProductsCard = () => import("../template/ProductsCard.vue");
const UsersList = () => import("../template/UsersLists.vue");
const Spinner = () => import("../components/Spinner.vue");

import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueToast);
Vue.component("product-card", ProductsCard);
Vue.component("user-list", UsersList);
Vue.component("spinner", Spinner);

export default function () {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
