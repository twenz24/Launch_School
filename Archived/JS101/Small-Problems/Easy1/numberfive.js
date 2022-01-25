/*
1) Problem
Input:
- the total amount of the bill
- whole number indicating the percent of the tip intended
Output:
- the calculated dollar value of the tip
- the total amount of the bill with the tip
Explicit:
- the percentage will be a whole number
- the bill is a whole number
- tac is inlcuded within the bill

Implicit:
the outputs should be number values not strings
the output calculations should go to 2 decimals

2) Examples
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

3) Data Structures
4) Algorithm

a) collect the total bill amount from the user
b) collect the desired tip percetaage as a whole number
c) calculate the tip
d calculate the total bill amount
e) output the tip amount and the total bill amount

5) Code
*/
const readline = require('readline-sync');

console.log("What is the bill?");
let bill = readline.question();
bill = Number(bill);

console.log("What is the tip percentage?");
let tip = readline.question();
tip = Number(tip) / 100;

let tipValue = tip * bill;

let billTotal = tipValue + bill;

tipValue = Number(tipValue.toFixed(2));
billTotal = Number(billTotal.toFixed(2));

console.log(`The tip is $${tipValue}`);
console.log(`The total is $${billTotal}`);
