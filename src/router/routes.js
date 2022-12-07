import { useShopStore } from "stores/shopStore";
import router from ".";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
      },
      {
        path: "auth",
        component: () => import("pages/AuthPage.vue"),
        name: "auth",

        path: "auth",
        component: () => import("pages/AuthPage.vue"),
        name: "auth",
      },

      {
        path: "/shop",

        component: () => import("pages/ShopPage.vue"),
        //refresh route
        name: "shop",
      },

      {
        path: "/info",
        component: () => import("pages/AboutPage.vue"),
        name: "info",
      },
      {
        path: "/contact",
        component: () => import("pages/ContactPage.vue"),
        name: "contact",
      },

      {
        path: "/products/:id",
        component: () => import("pages/ProductPage.vue"),
        beforeEnter: (to, from, next) => {
          const store = useShopStore();

          let productId = store.products.some((x) => x.id == to.params.id);

          if (!productId) {
            next({ name: "404" });
          } else {
            next();
          }
        },
      },
    ],
  },
  {
    path: "/checkout",
    component: () => import("pages/CheckoutPage.vue"),
    name: "checkout",
  },

  // 404 page(leave last)
  {
    path: "/:catchAll(.*)*",
    name: "404",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
