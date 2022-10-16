import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VeeValidate from "vee-validate";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
