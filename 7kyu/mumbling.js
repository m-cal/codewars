function accum(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i).toUpperCase() + str.charAt(i).toLowerCase().repeat(i));)
  }
  return arr.join('-');
}