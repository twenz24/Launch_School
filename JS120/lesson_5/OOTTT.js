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
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
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
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
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
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
  }
  static MATCH_GOAL = 3;
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],
    [ "4", "5", "6" ],
    [ "7", "8", "9" ],
    [ "1", "4", "7" ],
    [ "2", "5", "8" ],
    [ "3", "6", "9" ],
    [ "1", "5", "9" ],
    [ "3", "5", "7" ],
  ];

  recordGame() {
    this.gameCount += 1;
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.playOneGame();
      if (this.matchOver()) {
        this.displayMatchWinner();
        break;
      }
      if (!this.playAgain()) break;
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
      console.log("Let's play again!");
    }
    this.displayGoodbyeMessage();
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  playerMoves(currentPlayer) {
    if (currentPlayer === this.human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  }

  playOneGame() {
    let currentPlayer = this.firstPlayer;

    this.board.reset();
    this.board.display();

    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }
    this.addScore();
    this.board.displayWithClear();
    this.displayResults();
    this.displayMatchScore();
  }

  playAgain() {
    let answer;
    while (true) {
      console.log(`Would you like to play again? (y or n)`);
      answer = readline.question();
      if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'y') break;
      console.log('That is not a valid answer. Please input "y" or "n"');
    }
    return answer.toLowerCase() === 'y';
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  playersMakeMoves() {
    this.humanMoves();
  }

  addScore() {
    if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
    } else if (this.isWinner(this.human)) {
      this.human.incrementScore();
    }
  }

  matchOver() {
    return this.human.getScore() === TTTGame.MATCH_GOAL ||
    this.computer.getScore() === TTTGame.MATCH_GOAL;
  }

  displayMatchWinner() {
    if (this.human.score === TTTGame.MATCH_GOAL) {
      console.log('You have won the match!');
    } else if (this.computer.score === TTTGame.MATCH_GOAL) {
      console.log('The computer has won the match!');
    }
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

  pickCenterSquare() {
    return this.board.unusedSquares().includes("5") ? "5" : null;
  }


  findWinningSquare(player) {
    let winningPositions = TTTGame.POSSIBLE_WINNING_ROWS.find(row => {
      return this.board.countMarkersFor(player, row) === 2 &&
        row.some(square => this.board.unusedSquares().includes(square));
    });
    return winningPositions === undefined ? undefined :
      winningPositions.find(key => {
        return this.board.squares[key].getMarker() === Square.UNUSED_SQUARE;
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

  displayMatchScore() {
    console.log(`Your score is ${this.human.score}. The computer's score is ${this.computer.score}.`);
  }

  humanMoves() {
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
  }

  computerMoves() {
    let choice = this.findWinningSquare(this.computer);
    if (!choice) {
      choice = this.findWinningSquare(this.human);
    }
    if (!choice) {
      choice = this.pickCenterSquare();
    }
    if (!choice) {
      choice = this.pickRandomSquare();
    }
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  pickRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();