import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";
import FirstSlide from "@/components/feature/carousel/FirstSlide";
import FirstSlide2 from "@/components/feature/carousel/FirstSlide2";
import FirstSlide3 from "@/components/feature/carousel/FirstSlide3";
import LeoSlide from "@/components/feature/carousel/LeoSlide";
import ExampleSlide from "@/components/feature/carousel/ExampleSlide";

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
    path: "/first-slide2",
    name: "FirstSlide2",
    component: FirstSlide2
  },
  {
    path: "/first-slide3",
    name: "FirstSlide3",
    component: FirstSlide3
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
