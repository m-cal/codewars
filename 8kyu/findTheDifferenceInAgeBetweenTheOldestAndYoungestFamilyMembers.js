function differenceInAges(ages){
  let sorted = ages.sort((a, b) => a-b);
  let oldest = sorted[sorted.length-1];
  let youngest = sorted[0];
  let result = [];
  result.push(youngest);
  result.push(oldest);
  result.push(oldest - youngest);
  return result;
}