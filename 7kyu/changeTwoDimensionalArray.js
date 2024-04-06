function matrix(array) {
  let arr = array;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] < 0) {
      arr[i][i] = 0;
    }
  }
  return arr;
}