function highAndLow(numbers){
  let sortedArr = numbers.split(' ').map((num) => Number(num)).sort((a, b) => a-b);
  return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`;
}