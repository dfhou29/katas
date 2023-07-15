/* In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name. */

const instructorWithLongestName = function(instructors) {
  let longestLength = 0; //variable for length comparison
  let longestIndex; //keep track of index of object with the longest name
  instructors.forEach((element,index) => {
    if (element.name.length > longestLength){
      longestLength = element.name.length;
      longestIndex = index;
    }
  });
  return instructors[longestIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
