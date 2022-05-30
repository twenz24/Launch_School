/*

Tic Tac Toe is a 2-player board game.
The board is a 3x3 grid.
Players take turns marking a square with a marker that identifies the player.
Traditionally, the player to go first uses the marker X to
mark her squares, and the player to go second uses the marker O.
The first player to mark 3 squares in a row with her marker wins the game.
A row can be a horizontal row, a vertical column, or either of the two
diagonals (top-left to bottom-right and top-right to bottom-left).
There is one human player and one computer player.
The human player always moves (places a marker) first in the
initial version of our game; you can change that later.

nouns:
game, board, square, grid, marker, row, player, human, computer
verbs:
play, mark, move, place

Organized:
Game (n)
Board (n)
Row (n)
Square (n)
Marker (n)
Player (n)
- Mark (v)
- Play (v)
- Human (n)
- Computer (n)

*/
let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  toString() {
    return this.marker;
  }
  setMarker(marker) {
    this.marker = marker;
  }
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    //STUB - we'll talk about stubs a bit later
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }
  isFull() {
    return this.unusedSquares().length === 0;
  }
  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    //STUB
    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];
  play() {
    //SPIKE
    this.displayWelcomeMessage();

    this.board.display();
    while (true) {

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  joinOr(arr, char = ',', delim = 'or') {
    let copyArr = arr.slice();
    if (copyArr.length > 2) {
      copyArr.splice(arr.length - 1, 0, delim);
      return copyArr.join(`${char} `);
    } else if (copyArr.length === 2) {
      return copyArr.join(` ${delim} `);
    } else {
      return copyArr.join('');
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }
  validChoice() {
    return this.board.squares[this.choice] === " ";
  }

  humanMoves() { // was firstPlayerMoves
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${this.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
    // mark the selected square with the human's marker
  }

  computerMoves() { // was secondPlayerMoves
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}
let joinOr = function(arr, char = ',', delim = 'or') {
  if (arr.length > 2) {
    return arr.splice(arr.length - 2, 0, delim).join(`${char} `);
  } else if (arr.length === 2) {
    return arr.join(` ${delim} `);
  } else {
    return arr.join('');
  }
};

let game = new TTTGame();
game.play();