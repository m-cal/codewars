function findAverage(array) {
  if (array.length == 0) {return 0};
  let sum = array.reduce((accum, current) => accum + current);
  return sum / array.length;
}