const readline = require('readline-sync');

const INITIAL_MARKER = ' ';

const HUMAN_MARKER = 'X';

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}
function prompt(string) {
  console.log(`=>${string}`)
}
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });

  while (true) {
    prompt('Choose a square (1-9):');
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);