function squareDigits(num){
  let digits = num.toString().split('');
  let newDigits = digits.map( (i) => (Number(i)**2).toString());
  return Number(newDigits.join(''));
}

/*
- make num string
- split string into array of digits
- iterate over array
  - for each index, call Number() and square that value
- join array to string
- call Number on that string
*/

