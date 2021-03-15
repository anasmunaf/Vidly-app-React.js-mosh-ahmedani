/** @format */
import config from "../config.json";
import http from "./http";

export function register(user) {
  return http.post(`${config.apiEndpoint}/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
