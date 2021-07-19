/** @format */
import http from "./http";

export function register(user) {
  return http.post(`/users`, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
