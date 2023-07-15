let prompt = require("prompt-sync")({
  sigint: true
});

let randomNumber = Math.floor(Math.random() * 101); //random integer between 1 and 100

let guessedNumbers = [];

//validate input type
const validate = function(answer){
  parsedAnswer = parseInt(answer);
  while (isNaN(parsedAnswer)){
    console.log('Not a number! Try again!');
    answer = prompt('Guess a Number between 1 and 100: ');
    parsedAnswer = parseInt(answer);
  }
  return parsedAnswer;
}

const guessingGame = function(answer){
  //compare between guessed number and secret number
  while (answer !== randomNumber){
    if (answer > randomNumber){
      if (guessedNumbers.includes(answer)){
        console.log('Already guessed!');
        answer = guessingGame(validate(prompt('Guess a Number between 1 and 100: ')));
      }
      else {
        guessedNumbers.push(answer);
        console.log("Too high!");
        answer = guessingGame(validate(prompt('Guess a Number between 1 and 100: ')));
      }
    }
    else if (answer < randomNumber){
      if (guessedNumbers.includes(answer)){
        console.log('Already guessed!');
        answer = guessingGame(validate(prompt('Guess a Number between 1 and 100: ')));
      }
      else {
        guessedNumbers.push(answer);
        console.log("Too low!");
        answer = guessingGame(validate(prompt('Guess a Number between 1 and 100: ')));
      }
    }
  };
  //end the game when number is guessed
  guessedNumbers.push(answer);
  console.log('You got it! You took ' + guessedNumbers.length + ' attempts!');
  console.log('Secret number is: ' + randomNumber);
  console.log(guessedNumbers);
}

guessingGame(validate(prompt('Guess a Number between 1 and 100: ')));