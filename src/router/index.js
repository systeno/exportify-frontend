import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/HomeView.vue")
  },
  {
    path: "/playlists",
    name: "Playlists",
    component: () => import(/* webpackChunkName: "about" */ "../views/PlaylistView")
  },
  {
    path: "/albums",
    name: "Albums",
    component: () => import(/* webpackChunkName: "about" */ "../views/AlbumView")
  },
  {
    path: "/artists",
    name: "Artists",
    component: () => import(/* webpackChunkName: "about" */ "../views/ArtistView")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
