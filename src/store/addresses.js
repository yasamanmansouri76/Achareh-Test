import Api from "./server";
export default {
  namespaced: true,
  actions: {
    getAddresses() {
      return Api()
        .get("/address")
        .then((response) => response.data);
    },
  },
};
