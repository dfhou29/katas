/* The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]

The first will be the value to repeat, the second will be the amount of times to repeat that value. */

const repeatNumbers = function(data){
  var output = []; //arrays storing the final output
  for (number of data){
    let repeated = '';
    for(let x = 0; x < number[1]; x++){
      repeated += number[0]; //repeat number 
    }
    output.push(repeated); //append to the array
  }
  return output;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));