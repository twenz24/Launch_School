/*
RPS is a two-player game where each player chooses one of three possible moves:
rock, paper, or scissors. The winner is chosen by comparing their moves with the
following rules:

Rock crushes scissors, i.e., rock wins against scissors.
Scissors cuts paper, i.e., scissors beats paper.
Paper wraps rock, i.e., paper beats rock.
If the players chose the same move, the game is a tie.

Seperate out the verbs and nouns
Nouns: player, move, rule
Verbs: choose, compare

what do I want to do

have an area where the weights are
the weights should affect the choices that the computer has
after each round we should assess the history to see if the weights need to be adjusted

*/
const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0,
    history: [[], {wins: [], losses: []}],
  };
}
function computerOdds() {
  let weightedOptions = {
    rock: 5,
    scissors: 5,
    paper: 5,
    lizard: 5,
    spock: 5,
  };

  let optionsArr = [];
  for (const properties in weightedOptions) {
    for (let index = 0; index < weightedOptions[properties]; index += 1) {
      optionsArr.push(properties);
    }
  }
  return optionsArr;
}

// eslint-disable-next-line max-lines-per-function
function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    weightedOptions: {
      rock: 5,
      scissors: 5,
      paper: 5,
      lizard: 5,
      spock: 5,
    },

    choose() {
      this.selectionCondition();
      console.log(this.weightedOptions);
      const choices = [];
      for (const properties in this.weightedOptions) {
        for (let index = 0; index < this.weightedOptions[properties];
          index += 1) {
          choices.push(properties);
        }
      }
      console.log(choices);
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },

    selectionCondition() {
      let totalRemoved = 0;
      for (const property in this.weightedOptions) {
        let lossesPercentage = (this.history[1]['losses'].filter(word => word === property).length) / this.history[0].length;
        if (lossesPercentage > .50) {
          totalRemoved += (this.weightedOptions[property] - 4);
          this.weightedOptions[property] = 4;
        }
      }
      let favorableChoices = Object.entries(this.weightedOptions)
        .filter(entry => entry[1] >= 5);
      while (totalRemoved !== 0) {
        let index = 0;
        index %= favorableChoices.length;
        this.weightedOptions[favorableChoices[index][1]] += 1;
        totalRemoved -= 1;
      }
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, spock, or lizard:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'spock', 'lizard'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.

// Rule if a certain choice has a 50% win percentage
// against it... decrease the odds

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  choices: ['rock', 'paper', 'scissors', 'spock', 'lizard'],
  hierarchy: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['rock', 'scissors'],
    lizard: ['paper', 'spock'],
  },
  winningScore: 5,

  decideWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    if (this.hierarchy[humanMove].includes(computerMove)) {
      return 'human';
    } else if (this.hierarchy[computerMove].includes(humanMove)) {
      return 'computer';
    } else {
      return 'tie';
    }
  },

  displayWelcomeMessage() {
    console.log(`Welcome to ${this.choices.map(word => word[0].toUpperCase() + word.slice(1)).join(', ')}!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing ${this.choices.map(word => word[0].toUpperCase() + word.slice(1)).join(', ')}. Goodbye!`);
  },

  addScore() {
    if (this.decideWinner() === 'human') {
      this.human.score += 1;
    } else if (this.decideWinner() === 'computer') {
      this.computer.score += 1;
    }
  },

  recordHistory() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    this.computer.history[0].unshift(computerMove);
    this.human.history[0].unshift(humanMove);
    if (this.decideWinner() === 'human') {
      this.human.history[1]['wins'].unshift(humanMove);
      this.computer.history[1]['losses'].unshift(computerMove);
    } else if (this.decideWinner() === 'computer') {
      this.human.history[1]['losses'].unshift(humanMove);
      this.computer.history[1]['wins'].unshift(computerMove);
    }
  },

  displayHistory() {
    let humanHistoryCopy = this.human.history[0].slice(0, 3);
    let computerHistoryCopy = this.computer.history[0].slice(0, 3);
    console.log(`Your play history is as follows: ${humanHistoryCopy.join(', ')}`);
    console.log(`The computer's play history is as follows: ${computerHistoryCopy.join(', ')}`);
    console.log(this.computer.history[1]);
    console.log(this.human.history[1]);
  },

  resetScore() {
    if (this.human.score === this.winningScore) {
      console.log('You have won the series!');
      this.human.score = 0;
      this.computer.score = 0;
    } else if (this.computer.score === this.winningScore) {
      console.log('The computer has won the series!');
      this.human.score = 0;
      this.computer.score = 0;
    }
  },

  displayWinnerAndScore() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.decideWinner() === 'human') {
      console.log('You win!');
      console.log(`You have ${this.human.score} points. The computer has ${this.computer.score} points.`);
    } else if (this.decideWinner() === 'computer') {
      console.log('Computer wins!');
      console.log(`You have ${this.human.score}. The computer has ${this.computer.score}.`);
    } else {
      console.log("It's a tie");
      console.log(`You have ${this.human.score} points. The computer has ${this.computer.score} points.`);
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.recordHistory();
      this.addScore();
      this.displayWinnerAndScore();
      if (this.human.score === this.winningScore ||
        this.computer.score === this.winningScore) {
        this.resetScore();
      }
      this.displayHistory();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
