const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function userWins(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'paper'))  {
    return true;
    } else {
      return false;
    }
  
function computerWins(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'paper') ||
           (choice === 'paper' && computerChoice === 'scissors') ||
           (choice === 'scissors' && computerChoice === 'rock') ||
           (choice === 'rock' && computerChoice === 'spock') ||
           (choice === 'paper' && computerChoice === 'lizard')) {
    return true;
  } else {
    return false;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (userWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (computerWins) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}