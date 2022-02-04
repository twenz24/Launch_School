/*
____________________________________
Problem
Build a program that randomly generates Teddy's age,
and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

Input: nothing
Output: random number between 20 and 120
Explicit Rules: age is inclusive of boundaries

Implicit Rules: age should be whole number
Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo


Code
*/
let teddyAge = (Math.floor(Math.random() * (120 - 20 + 1)) + 20);
console.log(`Teddy is ${teddyAge} years old!`);