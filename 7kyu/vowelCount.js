function getCount(str) {
  let count = 0;
  let chars = str.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}