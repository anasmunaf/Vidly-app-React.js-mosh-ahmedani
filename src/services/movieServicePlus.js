/** @format */

import http from "./http";

export function getNewMovies() {
  return http.get(`/movies`);
}

export async function getNewMovie(id) {
  try {
    if (id) return await http.get(`/movies/${id}`);
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
    return http.put(`/movies/${movie.id}`, alter);
  } else {
    return http.post(`/movies`, alter);
  }
}

export function deleteNewMovie(id) {
  return http.delete(`/movies/${id}`);
}
