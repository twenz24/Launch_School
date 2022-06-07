let shuffle = require('shuffle-array'),
  collection = [["Spades", "2"],["Spades", "3"], ["Spades", "4"],["Spades", "5"],["Spades", "6"],["Spades", "7"],
    ["Spades", "8"],["Spades", "9"],["Spades", "10"],["Spades", "Jack"],["Spades", "Queen"],["Spades", "King"],["Spades", "Ace"],["Club", "2"],["Club", "3"], ["Club", "4"],["Club", "5"],["Club", "6"],["Club", "7"],
    ["Club", "8"],["Club", "9"],["Club", "10"],["Club", "Jack"],["Club", "Queen"],["Club", "King"],["Club", "Ace"],["Heart", "2"],["Heart", "3"], ["Heart", "4"],["Heart", "5"],["Heart", "6"],["Heart", "7"],
    ["Heart", "8"],["Heart", "9"],["Heart", "10"],["Heart", "Jack"],["Heart", "Queen"],["Heart", "King"],["Heart", "Ace"],["Diamond", "2"],["Diamond", "3"], ["Diamond", "4"],["Diamond", "5"],["Diamond", "6"],["Diamond", "7"],
    ["Diamond", "8"],["Diamond", "9"],["Diamond", "10"],["Diamond", "Jack"],["Diamond", "Queen"],["Diamond", "King"],["Diamond", "Ace"]];

let readline = require("readline-sync");

class Deck {
  constructor() {
    //STUB
    this.reset();
    this.values = {
      2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8,
      9: 9, 10: 10, Jack: 10, Queen: 10, King: 10, Ace: 11,
    };
  }

  shuffleCards() {
    shuffle(this.cards);
  }

  reset() {
    this.cards = collection.slice();
  }
}

class Participant {
  constructor() {
    //STUB
    this.score = 0;
    this.hand = [];
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviors from Player and Dealer?
  }
  isBusted() {
    return this.score > 21;
  }

  hit(topCard) {
    this.hand.push(topCard);
  }

  getScore() {
    return this.score;
  }
}

class Player extends Participant {
  constructor() {
    //STUB
    super();
    this.money = Participant.INITIAL_DOLLARS;
    // Score? Hand? Amount of money available?
  }
  static INITIAL_DOLLARS = 5;
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super();
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal() {
    //STUB
    // does the dealer or the deck deal?

  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    while (true) {
      this.displayWelcomeMessage();

      this.dealCards();
      this.showCards();

      this.playerTurn();
      if (this.busted()) {
        this.displayBusted();
        if (!this.playAgain()) break;
      }

      this.dealerTurn();
      if (this.busted()) {
        this.displayBusted();
        if (!this.playAgain()) break;
      }

      this.displayResult();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }

  playOnce() {
    this.dealCards();
    this.showCards();
    if (this.busted()) break;
  }

  playAgain() {
    let answer;
    while (true) {
      console.log(`Would you like to play again (yes or no)?`);
      answer = readline.question();
      if (answer[0] === 'y' || answer[0] === 'n') break;
    }
    return answer[0] === `y`;
  }

  // add in a reset button after the play again
  dealCards() {
    this.deck.shuffleCards();
    this.player.hit(this.deck.cards.shift());
    this.player.hit(this.deck.cards.shift());
    this.dealer.hit(this.deck.cards.shift());
    this.dealer.hit(this.deck.cards.shift());
    this.updateScore(this.player);
    this.updateScore(this.dealer);
  }

  showCards() {
    console.log( `The dealer has a ${this.playerHand(this.dealer)[0]} and an unknown card`);
    console.log( `You have a ${this.playerHand(this.player)[0]} and ${this.playerHand(this.player)[1]}`);
  }
  hitOrStay() {
    let answer;
    while (true) {
      console.log(`Would you like to hit or stay?`);
      answer = readline.question();
      if (answer === 'hit' || answer === 'stay') break;
      console.log(`That is not a valid response`);
    }
    return answer;
  }

  playerTurn() {
    while (true) {
      let response = this.hitOrStay();
      if (response === 'hit') {
        this.player.hit(this.deck.cards.shift());
        this.updateScore(this.player);
        this.displayHand(this.player);
        if (this.player.isBusted()) break;
      } else {
        break;
      }
    }
  }

  displayBusted() {
    if (this.player.isBusted()) {
      console.log(`You have busted! You lose!`);
    } else if (this.dealer.isBusted()) {
      console.log(`The dealer has busted! You win!`);
    }
  }

  joinOr(arr, char = ',', delim = 'and') {
    let copyArr = arr.slice();
    if (copyArr.length > 2) {
      copyArr.splice(arr.length - 1, 0, delim);
      return copyArr.slice(0,copyArr.length - 2).join(`${char} `) + `, ${delim} ` + `${copyArr[copyArr.length - 1]}.`;
    } else if (copyArr.length === 2) {
      return copyArr.join(` ${delim} `);
    } else {
      return copyArr.join('');
    }
  }

  displayHand(player) {
    let hand = this.playerHand(player);
    console.log(`Your score is ${player.getScore()} resulting from a hand of ${this.joinOr(hand)}`);
  }


  playerHand(player) {
    return player.hand.map(card => card[1]);
  }

  dealerTurn() {
    this.updateScore(this.dealer);
    while (this.dealer.getScore() < 17) {
      this.displayHand(this.dealer);
      console.log(`***The dealer has chosen to hit***`);
      this.dealer.hit(this.deck.cards.shift());
      this.updateScore(this.dealer);
    }
  }

  busted() {
    return this.player.isBusted() || this.dealer.isBusted();
  }

  displayWelcomeMessage() {
    console.log(`Welcome to Twenty One!`);
  }

  updateScore(participant) {
    let cards = participant.hand.map(card => card[1]);
    let cardValues = cards.map(card => this.deck.values[card]);
    participant.score = cardValues.reduce((a, b) => a + b, 0);
  }

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Twenty One!`);
  }

  displayResult() {
    console.log(`The dealer's score is ${this.dealer.getScore()} resulting from a hand of ${this.joinOr(this.playerHand(this.dealer))}`);
    console.log(`Your score is ${this.player.getScore()} resulting from a hand of ${this.joinOr(this.playerHand(this.player))}`);
  }

  determineWinner() {
    if (this.dealer.getScore() > this.player.getScore()) {
      return `dealer`;
    } else if (this.dealer.getScore() < this.player.getScore()) {
      return 'player';
    } else {
      return 'tie';
    }
  }

  displayWinner() {
    let winner = this.determineWinner();
    if (winner ===  `dealer`) {
      console.log(`The dealer has won the game!`);
    } else if (winner ===  `player`) {
      console.log(`You have won the game!`);
    } else {
      console.log('It is a tie!');
    }
  }
}

let game = new TwentyOneGame();
game.start();