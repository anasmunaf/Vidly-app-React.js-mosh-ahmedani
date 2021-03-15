/** @format */

import http, { setJwt } from "./http";
import { apiEndpoint } from "../config.json";
import jwtDecode from "jwt-decode";

setJwt(localStorage.getItem("token"));

export async function login(user) {
  const { data: jwt } = await http.post(`${apiEndpoint}/auth`, {
    email: user.username,
    password: user.password,
  });
  localStorage.setItem("token", jwt);
}
export function logout() {
  localStorage.removeItem("token");
}
export function getUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export function loginWithJwt(response) {
  localStorage.setItem("token", response);
}

export default {
  login,
  logout,
  getUser,
  loginWithJwt,
};
