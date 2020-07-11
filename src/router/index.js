import Vue from "vue";
import VueRouter from "vue-router";
import Website from "@/components/feature/website/Wrapper";
import WebsiteDetail from "@/components/feature/website/desktop/Detail";
import FirstSlide from "@/components/feature/carousel/FirstSlide";
import ExampleSlide from "@/components/feature/carousel/ExampleSlide";
import DevSlide from "@/components/feature/carousel/DevSlide";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Website",
    component: Website,
    children: [
      {
        path: ":name",
        name: "WebsiteDetail",
        props: true,
        component: WebsiteDetail
      }
    ]
  },
  {
    path: "/insta/first-slide",
    name: "FirstSlide",
    component: FirstSlide
  },
  {
    path: "/insta/example-slide",
    name: "ExampleSlide",
    component: ExampleSlide
  },
  {
    path: "/insta/dev-slide",
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
  mode: "history",
  scrollBehavior() {
    return { x: undefined, y: undefined };
  }
});

export default router;
