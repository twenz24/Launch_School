/*
____________________________________
Problem
Write a program that solicits six numbers from the user and
logs a message that describes whether the sixth number appears among the
first five numbers.

Input: 6 numbers
Output: if that 6th number appears in the first 5
Explicit Rules:

Implicit Rules:

numbers passed are whole numbers?

Questions:
Do we want to ask if they want to playAgain?
____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo
ask for 6 numbers from the user
store the first 5 numbers
check if the 6th number is included in the first 5
output designated

____________________________________
Code
*/
const readline = require("readline-sync");

let storedNumbers = [];
console.log('Enter the 1st number: ');
let firstNum = readline.question();
storedNumbers.push(firstNum);

console.log('Enter the 2nd number: ');
let secondNum = readline.question();
storedNumbers.push(secondNum);

console.log('Enter the 3rd number: ');
let thirdNum = readline.question();
storedNumbers.push(thirdNum);

console.log('Enter the 4th number: ');
let fourthNum = readline.question();
storedNumbers.push(fourthNum);

console.log('Enter the 5th number: ');
let fifthNum = readline.question();
storedNumbers.push(fifthNum);

console.log('Enter the last number: ');
let lastNum = readline.question();

if (storedNumbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${storedNumbers}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${storedNumbers}.`);
}