import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";
import FirstSlide from "@/components/feature/carousel/FirstSlide";
import LeoSlide from "@/components/feature/carousel/LeoSlide";
import ExampleSlide from "@/components/feature/carousel/ExampleSlide";
import DevSlide from "@/components/feature/carousel/DevSlide";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Website",
    component: Website
  },
  {
    path: "/first-slide",
    name: "FirstSlide",
    component: FirstSlide
  },
  {
    path: "/leo-slide",
    name: "Leo",
    component: LeoSlide
  },
  {
    path: "/example-slide",
    name: "ExampleSlide",
    component: ExampleSlide
  },
  {
    path: "/dev-slide",
    name: "DevSlide",
    component: DevSlide
  }
  // {
  //   path: "*",
  //   component: TrashShredderDelete
  // }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
