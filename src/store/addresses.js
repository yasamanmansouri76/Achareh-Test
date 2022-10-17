import api from "@/services/interceptors";

export default {
  namespaced: true,
  actions: {
    getAddresses() {
      return api.get("/address").then((response) => response.data);
    },
    addAddresses(context, payload) {
      return api.post("/address", payload).then((response) => response);
    },
  },
};
