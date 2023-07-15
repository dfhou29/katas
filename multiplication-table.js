/* We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number. */

const multiplicationTable = function(maxValue) {
  let output = '';
  for (let x = 1; x <= maxValue; x++){
    for (let y = 1; y <= maxValue; y++){
      output += (x * y) + ' ';
    }
    output += '\n';
  }
  return output;
};

console.log(multiplicationTable(2));
console.log(multiplicationTable(5));
console.log(multiplicationTable(14));
