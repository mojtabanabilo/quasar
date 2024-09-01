const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        children: [
          {
            path: "/products",
            component: () => import("../pages/Products.vue"),
            meta: { keepAlive: true }
          },
          {
            path: "/users",
            component: () => import("../pages/Users.vue"),
          },
          {
            path: "/aboutUs",
            component: () => import("../pages/AboutUs.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
