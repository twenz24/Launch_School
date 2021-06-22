const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_ANSWERS = ['r', 'p', 's', 'k','l']

let userWins = 0;
let computerWins = 0;

function displayWinner(choice, computerChoice) {
  if(choice.length === 1) {
    let letter = choice;
    choice = VALID_CHOICES[VALID_ANSWERS.indexOf(letter)];
  }
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) || 
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt('You win!');
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
             (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
             (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
             (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
             (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function prompt(message) {
  console.log(`=>${message}`);
}

function recordCount(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
  (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
  (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) || 
  (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
  (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
  userWins = userWins + 1
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    computerWins = computerWins + 1
  }
}

function displayGrandMaster() {
  if (computerWins === 3) {
    console.log('The computer is the grand master!');
  } else if (userWins === 3) {
    console.log('You are the grand master!')
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} or ${VALID_ANSWERS.join(', ')}, respectively`)
  let choice = readline.question();

  while((!VALID_CHOICES.includes(choice)) && (!VALID_ANSWERS.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(choice, computerChoice);
  recordCount(choice, computerChoice);
  
  prompt(`You have ${userWins} wins, the computer has ${computerWins} wins!`);

  displayGrandMaster();

  if ((userWins === 3) || (computerWins === 3)) {
    break;
  }

  prompt('Do you want to play again (y/n)?');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'n'){
     break;
    }
}