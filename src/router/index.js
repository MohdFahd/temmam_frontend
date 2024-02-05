import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CallCenter from "../views/CallCenter.vue";
import ContactUs from "../views/ContactUs.vue";
import Services from "../views/Services.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/callcenter/:id",
    name: "CallCenter",
    component: CallCenter,
    props: true,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
    props: true,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
