function countPositivesSumNegatives(input) {
  if (input == undefined || input.length == 0) {return [];};
  let negativesSum = 0;
  let positivesCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positivesCount++;
    } else {
      negativesSum += input[i];
    }
  }
  let toReturn = [];
  toReturn.push(positivesCount);
  toReturn.push(negativesSum);
  return toReturn;
}