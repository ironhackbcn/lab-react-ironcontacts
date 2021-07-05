export function sortArray(array, condition) {
  return array.sort((a, b) => (a[condition] > b[condition]) ? 1 : ((b[condition] > a[condition]) ? -1 : 0));
}