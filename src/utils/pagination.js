export function pagination(listNum, listLength, page, movies) {
  let x = (page - 1) * 4;
  let arr = movies.slice(x, x + 4);
  return arr;
}
