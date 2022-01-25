/*
1) Problem

Input: two numbers

Output: logging the output of those numbers after performing various arithmetic
operations

Explicit:
- arguments have to be positive numbers
- no need to validate input
- use Operations: addition, subtraction, product, quotient, remainder, and power

Implicit:
- first number input should be first number in the operation statement
- prompt should be used for computer logs

2) Examples

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23


3) Data Structures
4) Algorithm

  1) Prompt user for first number
  2) prompt user for second number
  3) print out result of various operations on 2 numbers
5) Code
*/
const readline = require("readline-sync");

function prompt(string) {
  console.log(`==> ${string}`);
}

prompt('Enter the first number: ');
let firstNumber = Number(readline.question());

prompt('Enter the second number: ');
let secondNumber = Number(readline.question());

prompt(`${firstNumber} + ${secondNumber} = ${Math.floor(firstNumber + secondNumber)}`);
prompt(`${firstNumber} - ${secondNumber} = ${Math.floor(firstNumber - secondNumber)}`);
prompt(`${firstNumber} * ${secondNumber} = ${Math.floor(firstNumber * secondNumber)}`);
prompt(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
prompt(`${firstNumber} % ${secondNumber} = ${Math.floor(firstNumber % secondNumber)}`);
prompt(`${firstNumber} ** ${secondNumber} = ${Math.floor(firstNumber ** secondNumber)}`);