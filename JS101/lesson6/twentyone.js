const readline = require("readline-sync");

//1. Initialize deck

const VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: [1, 11]
};

function handAsString(cards) {
  let str = '';
  cards.forEach(card => {
    if (card === cards[cards.length - 1]) {
      str = str + 'and ' + card[1];
    } else {
      str = str + card[1] + ', ';
    }
  });
  return str;
}

function handValue(cards) {
  let sumOfCards = 0;
  cards.forEach(card => {
    if (typeof VALUES[card[1]] === "object") {
      let aceValues = VALUES['Ace'];
      if (sumOfCards + aceValues[1] <= 21) {
        sumOfCards += aceValues[1];
      } else {
        sumOfCards += aceValues[0];
      }
    } else {
      sumOfCards += VALUES[card[1]];
    }
  });
  return sumOfCards;
}
//console.log(handValue([['C', '2'], ['S', '5'] ,['H', 'Ace']]));

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function findWinner(firstHand, secondHand) {
  let winner = '';
  if (handValue(firstHand) > handValue(secondHand)) {
    winner = 'You have won!';
  } else if (handValue(firstHand) < handValue(secondHand)) {
    winner = 'The dealer has won!';
  } else {
    winner = false;
  }
  return winner;
}

function busted(cards) {
  if (handValue(cards) > 21) {
    return true;
  } else {
    return false;
  }
}

//2. Deal cards to player and dealer

//3. Player turn: hit or stay
while (true) {
  let deck = [
    ['S', '2'],['S', '3'],['S', '4'],['S', '5'],['S', '2'],['S', '6'],['S', '7'],['S', '8'],['S', '9'],['S', '10'], //spade numbers
    ['S', 'Jack'],['S', 'Queen'],['S', 'King'],['S', 'Ace'], //spade faces
    ['D', '2'],['D', '3'],['D', '4'],['D', '5'],['D', '2'],['D', '6'],['D', '7'],['D', '8'],['D', '9'],['D', '10'], //diamond numbers
    ['D', 'Jack'],['D', 'Queen'],['D', 'King'],['D', 'Ace'], //diamond faces
    ['H', '2'],['H', '3'],['H', '4'],['H', '5'],['H', '2'],['H', '6'],['H', '7'],['H', '8'],['H', '9'],['H', '10'], //hearts numbers
    ['H', 'Jack'],['H', 'Queen'],['H', 'King'],['H', 'Ace'], //hearts faces
    ['C', '2'],['C', '3'],['C', '4'],['C', '5'],['C', '2'],['C', '6'],['C', '7'],['C', '8'],['C', '9'],['C', '10'], //hearts numbers
    ['C', 'Jack'],['C', 'Queen'],['C', 'King'],['C', 'Ace'], //hearts faces
  ];
  shuffle(deck);
  let playerHand = []; //find a way to use destructive
  let dealerHand = [];

  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  dealerHand.push(deck.pop());

  console.log(`Dealer has: ${dealerHand[0][1]} and unknown card`);
  console.log(`You have: ${playerHand[0][1]} and ${playerHand[1][1]}`);

  while (true) {
    console.log("hit or stay?");
    let answer = readline.question();

    if (answer === 'stay' || busted(playerHand)) break;

    playerHand.push(deck.pop());
    console.log(`You currently have: ${handAsString(playerHand)}`);
  }

  while (handValue(dealerHand) < 17) {
    dealerHand.push(deck.pop());

    if (busted(playerHand)) break;
  }
  console.log(`You have: ${handAsString(playerHand)}`);
  console.log(`The Dealer has: ${handAsString(dealerHand)}`);


  let bust = false;
  if (busted(dealerHand)) {
    console.log("The Dealer has busted! You win!");
    bust = busted(dealerHand);
  } else if (busted(playerHand)) {
    console.log('You have busted! The Dealer wins!');
    bust = busted(playerHand);
  }
  if (!findWinner(playerHand, dealerHand) && !bust) {
    console.log("It's a tie!");
  } else if (!bust) {
    console.log(findWinner(playerHand, dealerHand));
  }

  let playAgain = '';
  console.log('Would you like to play again? (Yes or No)'); //end game or ask user to play again?
  playAgain = readline.question();

  if (playAgain.toLowerCase() === 'no') {
    console.log('Thanks for playing!');
    break;
  } else {
    console.log("You chose to stay!");
    console.log("_________________________\n");
  }
}
//- repeat until bust or stay
//4. If player bust, dealer wins.
//5. Dealer turn: hit or stay
//- repeat until total >= 17
//6. If dealer busts, player wins.
//7. Compare cards and declare winner.