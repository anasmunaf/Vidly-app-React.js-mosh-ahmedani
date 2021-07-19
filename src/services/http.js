/** @format */

import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }
  return Promise.response(error);
});

export function setJwt(key) {
  axios.defaults.headers.common["x-auth-token"] = key;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
