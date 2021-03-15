/** @format */

import config from "../config.json";
import http from "./http";

export function getNewMovies() {
  return http.get(`${config.apiEndpoint}/movies`);
}

export async function getNewMovie(id) {
  try {
    if (id) return await http.get(`${config.apiEndpoint}/movies/${id}`);
    else throw Error;
  } catch (ex) {
    return {};
  }
  // if (id) return http.get(`${config.apiEndpoint}/movies/${id}`);
  // return {};
}

export function saveMovie(movie) {
  let alter = { ...movie };
  delete alter.id;
  if (movie.id) {
    return http.put(`${config.apiEndpoint}/movies/${movie.id}`, alter);
  } else {
    return http.post(`${config.apiEndpoint}/movies`, alter);
  }
}

export function deleteNewMovie(id) {
  return http.delete(`${config.apiEndpoint}/movies/${id}`);
}
