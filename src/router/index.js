import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PedidosView from "../views/PedidosView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    component: PedidosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
