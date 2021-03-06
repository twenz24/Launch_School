const readline = require("readline-sync");

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
function prompt(str) {
  console.log(`=> ${str}`);
}

function validAnswer(str) {
  while (!['y', 'n'].includes(str)) {
    prompt("That is not a valid answer. Please enter (Y or N)");
    str = readline.question()[0].toLowerCase();
  }
  return str;
}

function validGameChoice(str) {
  while (!['h', 's'].includes(str)) {
    prompt("That is not a valid answer. Please enter (Hit or Stay)");
    str = readline.question()[0].toLowerCase();
  }
  return str;
}

function handValue(cards) {
  let sumOfCards = 0;
  let values = cards.map(card => card[1]);
  values.forEach(value => {
    if (value === "Ace") {
      sumOfCards += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sumOfCards += 10;
    } else {
      sumOfCards += Number(value);
    }
  });

  values.filter(value => value === "Ace").forEach(_ => {
    if (sumOfCards > 21) sumOfCards -= 10;
  });

  return sumOfCards;
}

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

  prompt(`Dealer has: ${dealerHand[0][1]} and an unknown card`);
  prompt(`You have: ${playerHand[0][1]} and ${playerHand[1][1]}`);

  let bust = false;
  while (true) {
    prompt("Hit or Stay?");
    let answer = readline.question()[0].toLowerCase();
    answer = validGameChoice(answer);
    if (answer.toLowerCase() === 's') {
      break;
    }

    playerHand.push(deck.pop());

    if (busted(playerHand)) {
      console.log(`You currently have: ${handAsString(playerHand)}`);
      bust = true;
      break;
    }
    prompt(`You currently have: ${handAsString(playerHand)}`);
  }
  let playAgain = '';
  if (bust === true) {
    prompt('You have busted! The Dealer wins!');
    prompt('Would you like to play again? (Y or N)');
    playAgain = readline.question()[0].toLowerCase();
    playAgain = validAnswer(playAgain);
  }

  if (playAgain === 'y') {
    prompt("You chose to play again!");
    prompt("_________________________\n");
    continue;
  } else if (playAgain.toLowerCase() === 'n') {
    break;
  }

  while (handValue(dealerHand) < 17) {
    dealerHand.push(deck.pop());

    if (busted(playerHand)) break;
  }
  prompt(`You have: ${handAsString(playerHand)}`);
  prompt(`The Dealer has: ${handAsString(dealerHand)}`);


  if (busted(dealerHand)) {
    prompt("The Dealer has busted! You win!");
    bust = busted(dealerHand);
  } else if (busted(playerHand)) {
    prompt('You have busted! The Dealer wins!');
    bust = busted(playerHand);
  }
  if (!findWinner(playerHand, dealerHand) && !bust) {
    prompt("It's a tie!");
  } else if (!bust) {
    prompt(findWinner(playerHand, dealerHand));
  }

  prompt('Would you like to play again? (Y or N)'); //end game or ask user to play again?
  playAgain = readline.question()[0].toLowerCase();
  playAgain = validAnswer(playAgain);

  if (playAgain === 'n') {
    prompt('Thanks for playing!');
    break;
  } else {
    prompt("You chose to play again!");
    console.log("_________________________\n");
  }
}

