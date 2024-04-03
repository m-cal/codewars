function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str.split('').filter((x) => !vowels.includes(x)).join('');
}