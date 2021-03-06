import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Toothbrush from "../views/Toothbrush.vue"

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/toothbrush",
    name: "Toothbrush",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Toothbrush,
  },
  {
    path: "/toothpaste",
    name: "Toothpaste",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Toothpaste.vue"),
  },
  {
    path: "/mouthwash",
    name: "Mouthwash",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mouthwash.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shop.vue"),

    children: [
      {
        path: "",
        name: "shop-listing",
        component: () => import("../components/SP/ProductListingComponent.vue"),
      },
      {
        path: ":id",
        name: "shop-product",
        component: () => import("../components/SP/productPageCom.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/cs5460",
    name: "Cs5460",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cs5460.vue"),
  },
  {
    path: "/cs1006",
    name: "Cs1006",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cs1006.vue"),
  },
  {
    path: "/be-you",
    name: "BE-You",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BE-You.vue"),
  },
  {
    path: "/black-is-white",
    name: "Black-is-White",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Black-is-White.vue"),
  },
  {
    path: "/interdentalBrush",
    name: "InterdentalBrush",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InterdentalBrush.vue"),
  },
  {
    path: "/interdentalBrushes",
    name: "InterdentalBrushes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InterdentalBrushes.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
  },
  {
    path: "/MouthwashPerio",
    name: "MouthwashPerio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/MouthwashPerio.vue"),
  },
  {
    path: '/blog/cs540',
    name: 'Cs5460 Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/Cs5460.vue')
  },
  {
    path: '/blog/implant',
    name: 'Implant Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/Implant.vue')
  },
  {
    path: '/blog/clean-teeth',
    name: 'Clean Teeth Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/CleanTeeth.vue')
  },
  {
    path: '/blog/sensitive-teeth',
    name: 'Sensitive Teeth Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/SensitiveTeeth.vue')
  },
  {
    path: '/blog/gum-care',
    name: 'Gum Care Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog/GumCare.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
