export const sortByName = (arr) => {
  return arr.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

export const sortByPopularity  = (arr) => {
  return arr.sort((a, b) => {
    return b.popularity - a.popularity;
  });
}