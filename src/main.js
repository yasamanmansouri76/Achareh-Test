import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VeeValidate from "vee-validate";
import router from "./router";
import store from "./store";
import globalMixin from "@/mixins/global.js";
import validatorMessages from "@/plugins/validator.js";

import "@/assets/styles/main.scss";

Vue.config.productionTip = false;

Vue.mixin(globalMixin);

Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  dictionary: {
    en: { messages: validatorMessages },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
