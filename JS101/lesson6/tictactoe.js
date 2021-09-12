const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';


function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
// eslint-disable-next-line max-lines-per-function
function joinOr(arr, deliminator = ',' , joinVerb = 'or') {
  let joinStr = "";
  if (arr.length >= 3) {
    for (let index = 0; index < arr.length; index++) {
      if ((index === arr.length - 1)) {
        joinStr += `${joinVerb} ${arr[index]}`;
      } else {
        joinStr += `${arr[index]}${deliminator} `;
      }
    }
  } else if (arr.length === 2) {
    joinStr += `${arr[0]} ${joinVerb} ${arr[1]}`;
  } else if (arr.length === 1) {
    joinStr += `${arr[0]}`;
  }
  return joinStr;
}
function prompt(string) {
  console.log(`=>${string}`);
}
function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}
function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);

function boardFull(board) {
  return emptySquares(board).length === 0;
}
function someoneWon(board) { // board is unused for now; we'll use it later
  return !!detectWinner(board);
}
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];
    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

  }
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');