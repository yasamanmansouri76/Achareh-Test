import axios from "axios";

const api = axios.create({
  baseURL: `https://stage.achareh.ir/api/karfarmas/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Ng==",
  },
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response && err.response.status >= 400) {
      const errors = err.response.data.errors;
      for (const e in errors) {
        alert(e + " " + errors[e][0]);
      }
    }
    if (err.response && err.response.status === 500) {
      alert("مشکلی سمت سرور بوجود آمده است!");
    }
    if (err.response && err.response.status <= 403) {
      alert(err.response.data.detail);
    } else {
      return Promise.reject(err);
    }
  }
);

export default api;
