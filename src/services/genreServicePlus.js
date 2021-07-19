/** @format */

import http from "./http";

export default function newGenres() {
  return http.get(`/genres`);
}
