import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTippy, { TippyComponent } from "vue-tippy";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

Vue.config.productionTip = false;

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

library.add(faGithub);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
