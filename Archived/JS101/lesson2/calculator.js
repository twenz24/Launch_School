const readline = require('readline-sync');

console.log('Welcome to Calculator!');
// Ask the user for the first number.
console.log('What is the first number?');
let firstAnswer = readline.question();

// Ask the user for the second number.
console.log('What is the second number?');
let secondAnswer = readline.question();

// Ask the user for an operation to perform.
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();


// Perform the operation on the two numbers.
let output;
if (operation === '1') {
  output = Number(firstAnswer) + Number(secondAnswer);
} else if (operation === '2') { 
output = Number(firstAnswer) - Number(secondAnswer);
} else if (operation === '3') { 
  output = Number(firstAnswer) * Number(secondAnswer);
} else if (operation === '4') { 
  output = Number(firstAnswer) / Number(secondAnswer);
}

// Print the result to the terminal.
console.log(`The result is ${output}`);