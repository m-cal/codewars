function spinWords(string){
  let words = string.split(' ');
  let reversedWords = words.map((word) => word.length >= 5 ? word.split('').reverse().join('') : word);
  return reversedWords.join(' ');
}