import axios from "axios";
export default () => {
  return axios.create({
    baseURL: `https://stage.achareh.ir/api/karfarmas/`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Ng==",
    },
  });
};
