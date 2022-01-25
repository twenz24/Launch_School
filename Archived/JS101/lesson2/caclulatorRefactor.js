const readline = require('readline-sync');

const JSON = require('./calculator_messages.json');

function prompt(message) {
  console.log(`==>${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(JSON["greeting"]);
let restart = true;
while (restart) {

  // Ask the user for the first number.
  prompt(JSON["number1"]);
  let firstAnswer = readline.question();

  while (invalidNumber(firstAnswer)) {
    prompt(JSON["wrongNumber"]);
    firstAnswer = readline.question();
  }

  // Ask the user for the second number.
  prompt(JSON["number2"]);
  let secondAnswer = readline.question();

  while (invalidNumber(secondAnswer)) {
    prompt(JSON["wrongNumber"]);
    firstAnswer = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(JSON["operator"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(JSON["invalidOperator"]);
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

  console.log(JSON["tryAgain"]);
  let answer = readline.question();

  if (answer[0].toLowerCase() === 'y') {
    restart = true;
  } else
    restart = false;
}

console.log(JSON["signOff"]);