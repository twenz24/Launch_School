/*
____________________________________
Problem
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.


Input: age, when they want to retire
Output: year they would retire, and how many years left they have

Explicit Rules:

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo
get the age of user
get the retirment age of user
subtract the two and store as years left to retirment
output text
____________________________________
Code
*/

const readline = require('readline-sync');

console.log(`What is your age?`);
let age = readline.question();

console.log(`At what age would you like to retire?`);
let retireAge = readline.question();

let yearsToRetirement = retireAge - age;

console.log(`Its 2022. You will retire in ${2022 + yearsToRetirement}.`);

console.log(`You only have ${yearsToRetirement} years of work to go!`);