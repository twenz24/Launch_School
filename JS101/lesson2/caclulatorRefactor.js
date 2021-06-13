const readline = require('readline-sync');

function prompt(message) {
  console.log(`==>${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.log('Welcome to Calculator!');
let restart = true;
while (restart) {

// Ask the user for the first number.
prompt('What is the first number?');
let firstAnswer = readline.question();

while (invalidNumber(firstAnswer)) {
  prompt("Hmm... that doesn't look like a valid number.");
  firstAnswer = readline.question();
}

// Ask the user for the second number.
prompt('What is the second number?');
let secondAnswer = readline.question();

// Ask the user for an operation to perform.
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

// Perform the operation on the two numbers.
let output;
switch (operation) {
  case '1':
    output = Number(firstAnswer) + Number(secondAnswer);
    break; 
  case '2':
    output = Number(firstAnswer) - Number(secondAnswer);
    break;
  case '3':
    output = Number(firstAnswer) * Number(secondAnswer);
    break;
  case '4':
    output = Number(firstAnswer) / Number(secondAnswer);
    break;
}

// Print the result to the terminal.
prompt(`The result is ${output}`);

console.log('WOuld you like to use the calculator again? (Y/N)?');
let answer = readline.question();

if (answer[0].toLowerCase() === 'y') {
  restart = true;
} else
  restart = false;
}

console.log('Goodbye!');