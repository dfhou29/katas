const talkingCalendar = function(date) {
  let trimmedDate = date.split('/');
  let year = trimmedDate[0];
  let month = Number(trimmedDate[1]); //turn it into number for later switch case
  let day = String(Number(trimmedDate[2])); //get rid of 0 before day less than 10
  switch(month){
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'Feburary';
      break;
    case 3:
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break; 
    case 6:
      month = 'June';
      break;
    case 7:
      month = 'July';
      break;
    case 8:
      month = 'August';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month = 'November';
      break;
    case 12: 
      month = 'December';
      break;
  }

  //alternative
  // const months = [
  //   "January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"
  // ];

  // const [year, month, day] = date.split("/");

  // const monthName = months[Number(month) - 1];

  if (day.charAt(day.length - 1) === '1' && day !== '11'){
    day += 'st';
  }
  else if (day.charAt(day.length - 1) === '2' && day !== '12'){
    day += 'nd';
  }
  else if (day.charAt(day.length - 1) === '3' && day !== '13'){
    day += 'rd';
  }
  else {
    day += 'th';
  }

  return month + ' ' + day + ', ' + year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
