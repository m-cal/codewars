function findOdd(arr) {
  let checked = [];
  for (let i = 0; i < arr.length; i++) {
    if (! checked.includes(arr[i])) {
      let count = 0;
      for (let i2 =0; i2 < arr.length; i2++) {
        if (arr[i2] == arr[i]) {
          count++;
        }
      }
      if (count % 2 != 0) {
        return arr[i];
      }
    }
  }
}

/*
have to track how many times each int appears
  - at each index of arr, check if current value has been checked
  - if it has not, check it and then add it to the "checked" arr
  - if it has, skip it
*/