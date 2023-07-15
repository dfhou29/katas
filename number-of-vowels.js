/* In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u. */

const numberOfVowels = function(data) {
  let count = 0;
  for (let x = 0; x < data.length; x++){
    if (data.charAt(x) === 'a' ||
    data.charAt(x) === 'e' ||
    data.charAt(x) === 'i' ||
    data.charAt(x) === 'o' ||
    data.charAt(x) === 'u'){
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
