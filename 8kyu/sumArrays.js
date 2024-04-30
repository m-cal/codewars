function sum (numbers) {
  if (numbers.length > 0) {
   return numbers.reduce((total, amount) => total + amount); 
  } else {
    return 0;
  }
};