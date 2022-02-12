/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
const readline = require("readline-sync");

function initializeDeck() {
  let deck = [["H", 2], ["H", 3], ["H", 4], ["H", 5], ["H", 6], ["H", 7], ["H", 8], ["H", 9], ["H", 10], ["H", "Jack"], ["H", "Queen"], ["H", "King"], ["H", "Ace"],
    ["C", 2], ["C", 3], ["C", 4], ["C", 5], ["C", 6], ["C", 7], ["C", 8], ["C", 9], ["C", 10], ["C", "Jack"], ["C", "Queen"], ["C", "King"], ["C", "Ace"],
    ["S", 2], ["S", 3], ["S", 4], ["S", 5], ["S", 6], ["S", 7], ["S", 8], ["S", 9], ["S", 10], ["S", "Jack"], ["S", "Queen"], ["S", "King"], ["S", "Ace"],
    ["D", 2], ["D", 3], ["D", 4], ["D", 5], ["D", 6], ["D", 7], ["D", 8], ["D", 9], ["D", 10], ["D", "Jack"], ["D", "Queen"], ["D", "King"], ["D", "Ace"]];
  return deck;
}


function determineAceValue(cardSum) {
  let aceValue;
  if (cardSum <= 10) {
    aceValue = 11;
  } else {
    aceValue = 1;
  }
  return aceValue;
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value[0] === "A") {
      sum += determineAceValue(sum);
    } else if (['J', 'Q', 'K'].includes(value[0])) {
      sum += 10;
    } else {
      sum += value;
    }
  });
  return sum;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function calculateResults(userHand, computerHand) {
  if (total(computerHand) > total(userHand)) {
    return "The Dealer";
  } else if (userHand < computerHand) {
    return 'You';
  } else {
    return null;
  }
}

function displayResults(results) {
  if (results) {
    console.log(`${results} have one the hand!`);
  } else {
    console.log(`The hand was a push!`);
  }
}

function busted(hand) {
  if (hand > 21) {
    return true;
  } else {
    return false;
  }
}

function initialHand(deck) {
  let hand = [];
  hand.push(deck.pop());
  hand.push(deck.pop());
  return hand;
}

function joinAnd(arr, delimiter = ', ', word = 'and') {
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


function displayHands(userHand, computerHand) {
  let userValues = userHand.map(card => {
    return card[1];
  });
  let computerValues = computerHand.map(card => {
    return card[1];
  });
  if (userValues.length > 2) {
    console.log(`The dealer has: ${joinAnd(computerValues)}`);
    console.log(`The user has: ${joinAnd(userValues)}`);
  } else {
    console.log(`The dealer: ${computerValues[0]} and an unknown card`);
    console.log(`You have: ${joinAnd(userValues)}`);
  }
}

while (true) {
  let deck = initializeDeck();
  shuffle(deck);
  console.log(deck);
  let computerHand = initialHand(deck);
  let userHand = initialHand(deck);

  displayHands(userHand, computerHand);

  while (true) {
    console.log("hit or stay?");
    let answer = readline.question();
    if (answer === 'stay') break;
    userHand.push(deck.pop());
    if (busted(total(userHand))) break;
    displayHands(userHand, computerHand);
  }
  while (total(computerHand) < 15) {
    if (busted()) break;
    computerHand.push(deck.pop());
  }
  let userPlayAgain = '';
  if (busted(userHand)) {
    console.log('You busted!');
    console.log('Would you like to play again?');
    userPlayAgain = readline.question();
    if (userPlayAgain === 'no') break;
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }
  if (busted(computerHand)) {
    console.log('The dealer busted. You win!');
    console.log('Would you like to play again?');
    userPlayAgain = readline.question();
    if (userPlayAgain === 'no') break;
  }


  displayHands(userHand, computerHand);
  displayResults(calculateResults(userHand, computerHand));

  console.log('Would you like to play again?');
  userPlayAgain = readline.question();
  if (userPlayAgain === 'no') break;
}