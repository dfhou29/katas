// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20. 

//version 1: use pop and shift to remove spaces, and splice to create encoded string
// const urlEncode = function(text) {
//   let splittedString = text.split(' ');
//   let encodedString = '';
//   while(splittedString[0] === ''){
//     splittedString.shift();
//   }
//   while(splittedString[splittedString.length - 1] === ''){
//     splittedString.pop();
//   }


// for (let x = 1; x < splittedString.length; x+=2){
//   splittedString.splice(x,0,'%20');
// }

// splittedString.forEach(element => {
//   encodedString += element;
// });

// return encodedString;
// };

//version 2 (better one), use trim() to remove excessive whitespace and create another string to hold the encoded string

const urlEncode = function(text){
  let encodedString = '';
  let trimmedString = text.trim();
  for (let x = 0; x < trimmedString.length; x++){
    if (trimmedString.charAt(x) === ' '){
      encodedString += '%20';
    }
    else {
      encodedString += trimmedString.charAt(x);
    }
  }
  return encodedString;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("  blue is greener than purple for sure"));
