import config from "../config.json";
import http from "./http";

export default function newGenres() {
  return http.get(`${config.apiEndpoint}/genres`);
}
