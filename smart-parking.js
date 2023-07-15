/* 

We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

    Regular cars can only park in R spots.
    Small cars can park in R or S spots.
    Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE. */

//version 1
// const whereCanIPark = function(spots, car){
//   //create array for holding available parking spot
//   let parkingSpot = new Array();  
//   if (car === 'motorcycle'){
//     for (let row = 0; row < spots.length; row++){
//       for (let column = 0; column < spots[row].length; column++){
//         //only check if the spot is not found yet
//         if (parkingSpot.length === 0){
//           if (spots[row][column] ==='M' ||
//           spots[row][column] === 'S' ||
//           spots[row][column] === 'R'){
//             //add available spot to the array
//             parkingSpot.push(column);
//             parkingSpot.push(row);
//             break;
//          }
//         }
//       }
//     }
//   }
//   else if (car === 'small'){
//     for (let row = 0; row < spots.length; row++){
//       for (let column = 0; column < spots[row].length; column++){
//         if (parkingSpot.length === 0){
//           if (spots[row][column] === 'S' ||
//           spots[row][column] === 'R'){
//             parkingSpot.push(column);
//             parkingSpot.push(row);
//             break;
//          }
//         }
//       }
//     }
//   }
//   else if (car === 'regular'){
//     for (let row = 0; row < spots.length; row++){
//       for (let column = 0; column < spots[row].length; column++){
//         if (parkingSpot.length === 0){
//           if (spots[row][column] === 'R'){
//             parkingSpot.push(column);
//             parkingSpot.push(row);
//             break;
//          }
//         }
//       }
//     }
//   }

//   if (parkingSpot.length > 0){
//     return parkingSpot;
//   }
//   else {
//     return false;
//   }
// }

//version 2
const whereCanIPark = function(spots, car){
  for (let row = 0; row < spots.length; row++){
    for(let column = 0; column < spots[row].length; column++){
      if(car === 'regular'){
        if (spots[row][column] === 'R'){
          return [column, row];
        }
      }
      else if(car === 'small'){
        if (spots[row][column] === 'R' || spots[row][column] === 'S'){
          return [column, row];
        }
      }
      else if(car === 'motorcycle'){
        if (spots[row][column] === 'R' || spots[row][column] === 'S' || spots[row][column] === 'M'){
          return [column, row];
        }
      }
    }
  }
  return false;
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))