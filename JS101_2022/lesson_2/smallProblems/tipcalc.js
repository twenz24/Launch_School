let readline = require("readline-sync");

console.log('What is the bill?');
let billAmount = Number(readline.question());

console.log("What is the tip percentage?");
let desiredTipPercentage = Number(readline.question()) / 100;

let tipAmount = billAmount * desiredTipPercentage;
let totalBillAndTip = tipAmount + billAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBillAndTip.toFixed(2)}`);