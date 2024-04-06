function matrix(array) {
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    arr[i][i] = arr[i][i] < 0 ? 0 : 1;
  }
  return arr;
}