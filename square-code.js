/* The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message. */

const squareCode = function(message) {
  let trimmedMessage = message.replace(/\s/g, '');
  const columnCount = Math.ceil(Math.sqrt(trimmedMessage.length));
  let index = 0;
  let squareCodes = [];
  let output = [];
  while (index < trimmedMessage.length){
    let squareCode = '';
    for(let x = 0; x < columnCount; x++){
      if (index < trimmedMessage.length){
        squareCode += trimmedMessage[index];
        index++;
      }
    }
    squareCodes.push(squareCode);
    squareCode = '';
  }
  //console.log(squareCodes);
  for (let x = 0; x < squareCodes.length; x++){ //outer loop iterates through the item in sqaureCodes 
    for (let y = 0; y < squareCodes[x].length ; y++){ //inner loop iterate through the characters in each squareCodes array item
      if (output.length <= y){ //check if the array item is initialized, if not, push the item
        output.push(squareCodes[x][y]);
      }
      else {
        output[y] += squareCodes[x][y];
      }
    }
  }
  return output;

  
  //return squareCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
