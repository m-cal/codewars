function moveZeros(arr) {
  let delCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      i--;
      delCount++;
    }
  }
  for (let i = 0; i < delCount; i++) {
    arr.push(0);
  }
  return arr;
}