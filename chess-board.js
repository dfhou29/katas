const generateBoard = function(white, black){
  let board = [];
  for (let column = 0; column < 8; column++){
    board[column] = [0,0,0,0,0,0,0,0];
  }
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
}

const queenThreat = function(board){
  let position = [];
  for (let x = 0; x < board.length; x++){
    for (y = 0; y < board[x].length; y++){
      if (board[x][y] === 1){
        position.push([x, y]); //retrieve positions of queens
      }
    }
  }

  return (Math.abs(position[0][0] - position[1][0]) === Math.abs(position[0][1] - position[1][1]) || position[0][0] === position[1][0] || position[0][1] === position[1][1])?true:false;
}






// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
