let shuffle = require('shuffle-array'),
  collection = [["Spade", "2"],["Spade", "3"], ["Spade", "4"],["Spade", "5"],["Spade", "6"],["Spade", "7"],
    ["Spade", "8"],["Spade", "9"],["Spade", "10"],["Spade", "Jack"],["Spade", "Queen"],["Spade", "King"],["Spade", "Ace"],["Club", "2"],["Club", "3"], ["Club", "4"],["Club", "5"],["Club", "6"],["Club", "7"],
    ["Club", "8"],["Club", "9"],["Club", "10"],["Club", "Jack"],["Club", "Queen"],["Club", "King"],["Club", "Ace"],["Heart", "2"],["Heart", "3"], ["Heart", "4"],["Heart", "5"],["Heart", "6"],["Heart", "7"],
    ["Heart", "8"],["Heart", "9"],["Heart", "10"],["Heart", "Jack"],["Heart", "Queen"],["Heart", "King"],["Heart", "Ace"],["Diamond", "2"],["Diamond", "3"], ["Diamond", "4"],["Diamond", "5"],["Diamond", "6"],["Diamond", "7"],
    ["Diamond", "8"],["Diamond", "9"],["Diamond", "10"],["Diamond", "Jack"],["Diamond", "Queen"],["Diamond", "King"],["Diamond", "Ace"]];

let readline = require("readline-sync");

class Deck {
  constructor() {
    this.reset();
    this.values = {
      2 : 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
      10: 10, Jack: 10, Queen: 10, King: 10, Ace: 11
    };
  }

  shuffleCards() {
    shuffle(this.cards);
  }

  isNumberedCard(card) {
    return "2345678910".includes(card);
  }

  isFaceCard(card) {
    return ["Queen", "King", "Jack"].includes(card);
  }

  isAce(card) {
    return card === "Ace";
  }

  reset() {
    this.cards = collection.slice();
  }

  deal() {
    return this.cards.shift();
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

  resetHand() {
    this.hand = [];
  }
}

class Player extends Participant {
  constructor() {
    //STUB
    super();
    this.wallet = 5;
    // Score? Hand? Amount of money available?
  }

  reduceWallet() {
    this.wallet -= 1;
  }

  addWallet() {
    this.wallet += 1;
  }

  getWalletStatus() {
    return this.wallet;
  }

  isOutOfMoney() {
    return this.wallet === 0;
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    super();
    this.hidden = true;
  }

  getHiddenStatus() {
    return this.hidden;
  }

  unhide() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    console.clear();
    this.displayWelcomeMessage();
    while (true) {
      this.playOneGame();
      this.displayWalletStatus();
      if (this.player.isOutOfMoney()) {
        this.displayBroke();
        break;
      }
      if (!this.playAgain()) break;
      this.resetGame();
    }
    this.displayGoodbyeMessage();
  }

  playOneGame() {
    while (true) {
      this.startGame();

      this.playerTurn();
      if (this.busted()) {
        this.whenBusted();
        break;
      }

      this.dealerTurn();
      if (this.busted()) {
        this.whenBusted();
        break;
      }

      this.displayResult();
      this.displayWinner();
      this.assessWinnings();
      break;
    }
  }

  displayWalletStatus() {
    console.log(`You currently have $${this.player.getWalletStatus()} in your wallet.`);
  }

  continueGame() {
    readline.question("Press return to continue...");
  }

  whenBusted() {
    this.displayBusted();
    this.assessWinnings();
  }

  displayBroke() {
    console.log(`You do not have any more money to bet!`);
  }

  playAgain() {
    let answer;
    while (true) {
      console.log("");
      console.log(`Would you like to play again (yes or no)?`);
      answer = readline.question();
      if ('yY'.includes(answer[0]) || 'Nn'.includes(answer[0])) break;
      console.log("That is an invalid input.");
    }
    return 'yY'.includes(answer[0]);
  }

  startGame() {
    this.dealCards();
    this.showCards();
  }

  resetGame() {
    this.dealer.resetHand();
    this.player.resetHand();
    this.deck.reset();
    this.dealer.hide();
    console.clear();
    console.log("Let's play again!");
  }

  logHand(hand) {
    for (let index = 0; index < hand.length; index += 1) {
      let card = hand[index];
      if (this.dealer.getHiddenStatus() && hand === this.dealer.hand) {
        console.log(`${card[1]} of ${card[0]}s`);
        console.log(`Unknown card`);
        break;
      }
      console.log(`${card[1]} of ${card[0]}s`);
    }
  }

  showCards() {
    let dealerHand = this.dealer.hand;
    let playerHand = this.player.hand;
    console.log("");
    console.log('The dealer has: ');
    console.log("");
    this.logHand(dealerHand);
    console.log("");
    console.log( `You have: `);
    console.log("");
    this.logHand(playerHand);
    console.log("");
  }

  dealCards() {
    this.deck.shuffleCards();

    this.player.hit(this.deck.deal());
    this.dealer.hit(this.deck.deal());
    this.player.hit(this.deck.deal());
    this.dealer.hit(this.deck.deal());

    this.updateScore(this.player);
    this.updateScore(this.dealer);
  }

  hitOrStay() {
    let answer;
    while (true) {
      console.log(`Would you like to hit or stay?`);
      answer = readline.question();
      console.log("");
      console.log(answer[0]);
      if ('hH'.includes(answer[0]) || 'Ss'.includes(answer[0])) break;
      console.log(`That is not a valid response`);
    }
    console.clear();
    return answer[0];
  }

  playerTurn() {
    while (true) {
      this.displayResult();
      let response = this.hitOrStay();
      if (response === 'h') {
        this.player.hit(this.deck.deal());
        this.updateScore(this.player);
        console.clear();
        this.showCards();
        if (this.player.isBusted()) break;
      } else {
        break;
      }
    }
    this.dealer.unhide();
  }

  displayBusted() {
    if (this.player.isBusted()) {
      console.log(`You have busted! You lose!`);
    } else if (this.dealer.isBusted()) {
      console.log(`The dealer has busted! You win!`);
    }
  }

  assessWinnings() {
    if (this.determineWinner() === `dealer`) {
      this.player.reduceWallet();
    } else if (this.determineWinner() === `player`) {
      this.player.addWallet();
    }
  }

  dealerTurn() {
    this.updateScore(this.dealer);
    while (this.dealer.getScore() < 17) {
      this.showCards();
      this.continueGame();
      console.log("");
      console.log(`***The dealer has chosen to hit***`);
      console.log("");
      this.continueGame();
      console.clear();
      this.dealer.hit(this.deck.deal());
      this.updateScore(this.dealer);
    }
    this.showCards();
  }

  busted() {
    return this.player.isBusted() || this.dealer.isBusted();
  }

  displayWelcomeMessage() {
    console.log(`Welcome to Twenty One!`);
  }

  updateScore(participant) {
    let cards = participant.hand.map(card => card[1]);
    let cardVals = [];
    for (let index = 0; index < cards.length; index += 1) {
      let card = cards[index];
      if (this.deck.isNumberedCard(card)) {
        cardVals.push(Number(card));
      } else if (this.deck.isFaceCard(card)) {
        cardVals.push(10); // value of face cards
      } else {
        cardVals.push(11);
      }
    }
    cardVals = this.adjustAces(cardVals);
    participant.score = cardVals.reduce((a, b) => a + b, 0);
  }

  adjustAces(currentScoresArr) {
    while (true) {
      let score = currentScoresArr.reduce((a, b) => a + b, 0);
      if (score <= 21) break;
      else {
        let index = currentScoresArr.findIndex(card => card === 11);
        if (index === -1) break;
        currentScoresArr[index] = 1;
      }
    }
    return currentScoresArr;
  }

  displayGoodbyeMessage() {
    console.log("");
    console.log(`Thanks for playing Twenty One!`);
  }

  displayResult() {
    this.continueGame();
    if (this.dealer.getHiddenStatus()) {
      console.log("");
      console.log(`Your score is ${this.player.getScore()}.`);
      console.log("");
    } else {
      console.log("");
      console.log(`The dealer's score is ${this.dealer.getScore()}.`);
      console.log(`Your score is ${this.player.getScore()}.`);
      console.log("");
    }
  }

  determineWinner() {
    if (this.dealer.isBusted()) {
      return 'player';
    } else if (this.player.isBusted()) {
      return 'dealer';
    } else if (this.player.getScore() > this.dealer.getScore()) {
      return 'player';
    } else if (this.player.getScore() < this.dealer.getScore()) {
      return 'dealer';
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