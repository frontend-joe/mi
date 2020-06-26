import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";
import FirstSlide from "@/components/feature/carousel/FirstSlide";
import ExampleSlide from "@/components/feature/carousel/ExampleSlide";
import DevSlide from "@/components/feature/carousel/DevSlide";
import TrupsCollab from "@/components/feature/carousel/TrupsCollab";

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
    path: "/example-slide",
    name: "ExampleSlide",
    component: ExampleSlide
  },
  {
    path: "/dev-slide",
    name: "DevSlide",
    component: DevSlide
  },
  {
    path: "/trups-collab",
    name: "TrupsCollab",
    component: TrupsCollab
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
