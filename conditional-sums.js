/* For this kata, we'll be adding only the numbers in the array which match the given condition. */

const conditionalSum = function(values, condition) {

  if (values.length === 0){ //chcek if array is empty
    return 0;
  }

  let sum = 0;

  //even case
  if (condition === 'even'){
    values.forEach(element => {
      if (element % 2 === 0){
        sum += element;
      }
    });
  }
  //odd case
  if (condition === 'odd'){
    values.forEach(element => {
      if (element % 2 !== 0){
        sum += element;
      }
    });
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
