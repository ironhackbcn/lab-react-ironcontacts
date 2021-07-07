export const sortByName = (arr) => {
  return arr.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}

export const sortByPopularity = (arr) => {
  return arr.sort( (a, b) => {
    return a.popularity - b.popularity;
  })
}