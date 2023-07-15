/* We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings. */

const camelCase = function(text){
  let trimmedStrings = text.split(' ');
  let output = trimmedStrings[0]; //skip the first word
  for (let x = 1; x < trimmedStrings.length; x++){
    output += trimmedStrings[x].charAt(0).toUpperCase() + trimmedStrings[x].slice(1); //turn the first letter of each word into cap and append the rest of word to its end
  }
  return output;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));