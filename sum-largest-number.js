/* In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together. */

/* version 1: with array modification */
// const sumLargestNumbers = function(data) {
//   let dataCopy = data.slice(); //copy values from data
//   console.log('Data: ' + dataCopy);
//   let largestNumber = dataCopy[0]; //make the first number in array the largest number for comparison
//   let largestIndex = 0; //record the index of the largest number
//   let sum = 0;

// /* Find the largest number */
//   dataCopy.forEach((element,index) => {
//     if (element >= largestNumber){ //if there is a number in the array that is larger than the largest number, make it the largest and record its index
//       largestNumber = element;
//       largestIndex = index;
//     }
//   });
//   console.log('The largest number is: ' + largestNumber);
//   sum += largestNumber; //add the largest number to the sum
//   dataCopy.splice(largestIndex,1); //remove the largest number, then find the second largest number

// /* Find the second largest number */
//   let secondLargestNumber = dataCopy[0]; //make the first number in array the second largest number for comparison
//   dataCopy.forEach((element) => {
//     if (element >= secondLargestNumber){ //find the second largest number
//       secondLargestNumber = element;
//     }
//   });
//   console.log('The second largest number is: ' + secondLargestNumber);

// /* sum up the numbers */
//   sum += secondLargestNumber;
//   return sum;
// };

/* updated version: without modification */
const sumLargestNumbers = function (data) {
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  data.forEach(element => {
    if (element > largestNumber){
      secondLargestNumber = largestNumber; //if element is larger than the largest number, let secondLargestNumber hold the value of the original largest number, then assign element as the largest number
      largestNumber = element;
    }
    else if (element > secondLargestNumber){
      secondLargestNumber = element;
    }
  });

  return largestNumber + secondLargestNumber;
}

console.log('The sum is: ' + sumLargestNumbers([1, 10]));
console.log('The sum is: ' + sumLargestNumbers([1, 2, 3]));
console.log('The sum is: ' + sumLargestNumbers([10, 4, 34, 6, 92, 2]));
