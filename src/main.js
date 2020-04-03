import Vue from "vue";
import App from "./App.vue";
import {
  VLazyImagePlugin
} from "v-lazy-image";
import 'bootstrap'

Vue.config.productionTip = false;
Vue.use(VLazyImagePlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");