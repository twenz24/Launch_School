const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;

function prompt(string) {
  return console.log(`=> ${string}`);
}
/*

take an array and return the string of the array with effects

take an array joing them together with the specified deliminator

then before the last index we want to add a conjuction

*/
function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
               `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log("     |     |");
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log("     |     |");
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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerDefense(board) {
  let defendLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  let defendSquare = null;
  for (let index = 0; index < defendLines.length; index++) {

    let [sq1, sq2, sq3] = defendLines[index];
    if (board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === " ") {
      defendSquare = sq3;
    }
  }
  return defendSquare;
}

function computerOffense(board) {
  let attackLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  let attackSquare = null;
  for (let index = 0; index < attackLines.length; index++) {

    let [sq1, sq2, sq3] = attackLines[index];
    if (board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === " ") {
      attackSquare = sq3;
    }
  }
  return attackSquare;
}

function computerChoosesSquare(board) {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!computerDefense(board)) {

    let square = computerDefense(board);
    board[square] = COMPUTER_MARKER;
  // eslint-disable-next-line no-extra-boolean-cast
  } else if (!!computerOffense(board)) {

    let square = computerOffense(board);
    board[square] = COMPUTER_MARKER;

  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}
while (true) {
  let answer;
  let computerWins = 0;
  let userWins = 0;
  while (true) {
    let board = initializeBoard();
    if (computerWins === GAMES_TO_WIN || userWins === GAMES_TO_WIN) {
      computerWins = 0;
      userWins = 0;
    }
    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

    }

    displayBoard(board);

    if (detectWinner(board) === 'Player') {
      userWins++;
    } else if (detectWinner(board) === 'Computer') {
      computerWins++;
    }
    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    console.log(`The computer has ${computerWins} wins. You have ${userWins} wins.`);
    if (computerWins === GAMES_TO_WIN) {
      console.log(`The computer has one the match!`);
    } else if (userWins === GAMES_TO_WIN) {
      console.log(`You have one the match!`);
    }

    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');