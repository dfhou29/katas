/* In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course. */

const organizeInstructors = function(instructors) {
  let organized = {};
  for (instructor of instructors){
    if (organized.hasOwnProperty(instructor.course)){
      organized[instructor.course].push(instructor.name);
    }
    else {
      organized[instructor.course] = [instructor.name];
    }
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
