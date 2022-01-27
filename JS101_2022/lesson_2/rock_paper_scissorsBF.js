const readline = require('readline-sync');
const VALID_CHOICES = {
  r : 'rock',
  p : 'paper',
  s : 'scissors',
  sp : 'spock',
  l : 'lizard'
};

function userWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    return true;
  } else {
    return false;
  }
}

function computerWins(choice, computerChoice) {
  if ((computerChoice === 'rock' && (choice === 'scissors' || choice === 'lizard')) ||
    (computerChoice === 'paper' && (choice === 'rock' || choice === 'spock')) ||
    (computerChoice === 'scissors' && (choice === 'paper' || choice === 'lizard')) ||
    (computerChoice === 'lizard' && (choice === 'paper' || choice === 'spock')) ||
    (computerChoice === 'spock' && (choice === 'scissors' || choice === 'rock'))) {
    return true;
  } else {
    return false;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (userWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (computerWins(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}
let fullNameChoices = Object.values(VALID_CHOICES);
let abbreviatedChoices = Object.keys(VALID_CHOICES);

let userVictories = 0;
let compVictories = 0;

while (true) {
  prompt(`Choose one: ${fullNameChoices.join(', ')} or ${abbreviatedChoices.join(', ')} respectively`);
  let choice = readline.question();

  while (!fullNameChoices.includes(choice) &&
  !abbreviatedChoices.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (choice.length < 3) {
    choice = VALID_CHOICES[choice];
  }

  let randomIndex = Math.floor(Math.random() * fullNameChoices.length);
  let computerChoice = fullNameChoices[randomIndex];

  displayWinner(choice, computerChoice);

  if (userWins(choice, computerChoice)) {
    userVictories += 1;
  } else if (computerWins(choice, computerChoice)) {
    compVictories += 1;
  }

  prompt(`The user has ${userVictories} wins. The computer has ${compVictories} wins.`);
  if (userVictories === 3) {
    prompt('You have won the series!');
    userVictories = 0;
    compVictories = 0;
  } else if (compVictories === 3) {
    prompt(`The computer has won the series!`);
    userVictories = 0;
    compVictories = 0;
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}