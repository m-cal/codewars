function accum(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str)
    console.log(str[i])
    newStr.concat(str[i].repeat(i + 1));
    console.log(newStr)
  }
  return newStr;
}


// Can definitely solve with the reduce method, 
// but am not sure how it's possible for the above code to return an empty string
// so will more thoroughly investigation until I have my answer