import Vue from "vue";
import VueRouter from "vue-router";
import UsersShow from "../views/users/Show.vue";
import UsersEdit from "../views/users/Edit.vue";
import BookingsShow from "../views/bookings/Show.vue";
import BookingsMapboxShow from "../views/bookings/MapboxShow.vue";
import BookingsGoogleShow from "../views/bookings/GoogleShow.vue";
import BookingsIndex from "../views/bookings/Index.vue";
import CravingsEdit from "../views/cravings/Edit.vue";
import CravingsNew from "../views/cravings/New.vue";
import CravingsIndex from "../views/cravings/Index.vue";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  { path: "/users/me", name: "users-show", component: UsersShow },
  { path: "/users/:id/edit", name: "users-edit", component: UsersEdit },
  { path: "/bookings/:id", name: "bookings-show", component: BookingsShow },
  { path: "/bookings/mapbox/:id", name: "bookings-mapbox-show", component: BookingsMapboxShow },
  { path: "/bookings/google/:id", name: "bookings-google-show", component: BookingsGoogleShow },
  { path: "/bookings", name: "bookings-index", component: BookingsIndex },
  { path: "/cravings/:id/edit", name: "cravings-edit", component: CravingsEdit },
  { path: "/cravings/new", name: "cravings-new", component: CravingsNew },
  { path: "/cravings", name: "cravings-index", component: CravingsIndex },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
